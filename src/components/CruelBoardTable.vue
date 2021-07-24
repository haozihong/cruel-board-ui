<template>
  <div>
    <div style="height: 20px">
      <el-checkbox label="Cruel Ranking" size="mini" v-model="cruelRankingColVisible" @change="refreshTable"></el-checkbox>
      <el-checkbox label="Days" size="mini" v-model="daysColVisible" @change="refreshTable"></el-checkbox>
      <el-checkbox label="Rating" size="mini" v-model="ratingColVisible" @change="refreshTable"></el-checkbox>
      <el-checkbox label="All Contests" size="mini" v-model="allContestsVisible" @change="refreshTable"></el-checkbox>
    </div>
    <el-table
        id="boardTable"
        :data="qunyouData"
        style="width: 100%"
        stripe
        height="calc(100% - 20px)"
        :default-sort = "{prop: 'cruelScore', order: 'ascending'}"
        :key="refresh">
      <el-table-column
          type="index">
      </el-table-column>
      <el-table-column
          prop="cruelRanking"
          label="Ranking"
          width="80"
          v-if="cruelRankingColVisible">
      </el-table-column>
      <el-table-column
          label="LC ID"
          width="120"
          align="center">
        <template v-slot="scope">
          <a :href="scope.row.lcLink">{{ `${scope.row.lcId}` }}</a>
        </template>
      </el-table-column>
      <el-table-column
          align="center"
          prop="days"
          label="Days"
          width="80"
          sortable
          v-if="daysColVisible">
      </el-table-column>
      <el-table-column
          align="center"
          prop="lcRating"
          label="Rating"
          width="100"
          sortable
          v-if="ratingColVisible">
        <template v-slot="scope">
          <span :style="`color: #${scope.row.lcRating >= 2100 ? 'A30000' : '0426A4'}`">
            {{ scope.row.lcRating }}
          </span>
        </template>
      </el-table-column>
      <el-table-column
          align="center"
          prop="cruelScore"
          label="Score"
          width="100"
          sortable
          :sort-by="'cruelRanking'"
          :sort-orders="['ascending', 'descending']">
      </el-table-column>
      <el-table-column
          align="center"
          v-for="ci in contestsShowingNum < contests.length ? contestsShowingNum : contests.length" :key="ci"
          :prop="`contest${contests[ci-1].contestIndex}Ranking`"
          :label="`${contests[ci-1].contestIndex} (${contests[ci-1].participantNum})`"
          sortable
          width="100">
        <template v-slot="scope">
          <div :style="`background: #${scope.row.contestRankings[ci-1].rankingClr}; color: black`">
            {{ scope.row.contestRankings[ci-1].ranking === Infinity ?
              "N/A" :
              `${scope.row.contestRankings[ci-1].ranking} | ${scope.row.contestRankings[ci-1].score}` }}
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import XLSX from 'xlsx';

export default {
  name: 'CruelBoardTable',
  data() {
    return {
      daysColVisible: true,
      ratingColVisible: true,
      cruelRankingColVisible: false,
      allContestsVisible: false,
      refresh: 0,
      contests: [],
      qunyouData: []
    }
  },
  computed: {
    contestsShowingNum() {
      return this.allContestsVisible ? this.contests.length : 3;
    }
  },
  methods: {
  },
  mounted() {
    this.axios.get("./lc-score-board/generateEXCEL/index.xlsx", {responseType: "arraybuffer"}).then(resp => {
      let data = new Uint8Array(resp.data);
      let wb = XLSX.read(data, {type: 'array', cellStyles: true});
      let ws = wb.Sheets[wb.SheetNames[0]];
      // console.log(ws['F79']);

      // find first row of participants data
      let firstEntryRow = 0;
      while (ws[XLSX.utils.encode_cell({c: 0, r: firstEntryRow})] === undefined)
        ++firstEntryRow;

      // read contests info
      let firstContextCol = 5;
      for (let i = firstContextCol;
           ws[XLSX.utils.encode_cell({r: firstEntryRow-3, c: i})] !== undefined;
           i += 2) {
        this.contests.push({
          id: this.contests.length,
          contestIndex: ws[XLSX.utils.encode_cell({r: firstEntryRow-3, c: i})].v,
          participantNum: ws[XLSX.utils.encode_cell({r: firstEntryRow-2, c: i})].v
        });
      }

      // read each qunyou
      for (let i = firstEntryRow; ws[`A${i+1}`] !== undefined; ++i) {
        let person = {
          cruelRanking: ws[`A${i+1}`].v,
          lcId: ws[`B${i+1}`].v,
          lcLink: ws[`B${i+1}`].l.Rel.Target,
          days: ws[`C${i+1}`].v,
          lcRating: ws[`D${i+1}`].v,
          cruelScore: ws[`E${i+1}`].v,
          contestRankings: []
        };
        for (let j=0; j<this.contests.length; ++j) {
          let ranking = ws[XLSX.utils.encode_cell({r: i, c: 5+j*2})].v,
              rankingClr = ws[XLSX.utils.encode_cell({r: i, c: 5+j*2})].s.fgColor?.rgb ?? 'EAEAEA',
              score = ws[XLSX.utils.encode_cell({r: i, c: 6+j*2})].v;
          if (ranking < 0) ranking = Infinity;
          // person[`contest${this.contests[j].contestIndex}Ranking`] = ranking;
          // person[`contest${this.contests[j].contestIndex}RankingClr`] = rankingClr;
          // person[`contest${this.contests[j].contestIndex}Score`] = score;
          person.contestRankings.push({
            ranking: ranking,
            rankingClr: rankingClr,
            score: score,
          });
        }
        this.qunyouData.push(person);
        // if (i > 25) break;
      }
      // console.log(this.qunyouData[0]);
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}

/* element-ui's bug */
#boardTable >>> .el-table__header-wrapper {
  height: 82px;
}
#boardTable >>> .el-table__body-wrapper {
  height: calc(100% - 82px) !important;
}
</style>
