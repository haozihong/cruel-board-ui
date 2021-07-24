<template>
  <div>
    <div style="height: 1.8rem">
      <el-checkbox label="残酷排名" size="mini" v-model="cruelRankingColVisible"></el-checkbox>
      <el-checkbox label="Days" size="mini" v-model="daysColVisible"></el-checkbox>
      <el-checkbox label="工号" size="mini" v-model="workNumColVisible"></el-checkbox>
      <el-checkbox label="LC Rating" size="mini" v-model="ratingColVisible"></el-checkbox>
      <el-checkbox label="All Contests" size="mini" v-model="allContestsVisible"></el-checkbox>
    </div>
    <el-table
        id="boardTable"
        :data="qunyouData"
        style="width: 100%"
        :row-style="{height: '30px'}"
        :cell-style="{padding: '0'}"
        :header-row-style="{height: '40px'}"
        :header-cell-style="{padding: '0px'}"
        stripe
        height="calc(100% - 1.8rem)"
        :default-sort = "{prop: 'cruelScore', order: 'ascending'}">
      <el-table-column
          type="index">
      </el-table-column>
      <el-table-column
          align="center"
          prop="cruelRanking"
          label="残酷排名"
          width="48"
          sortable
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
          prop="workNum"
          label="工号"
          width="80"
          sortable
          v-if="workNumColVisible">
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
        <template slot="header">
          <span style="display: inline-block">
            <div style="font-size: 13px; line-height: 1.3">{{ contests[ci-1].contestIndex }}场</div>
            <div style="font-size: 11px; line-height: 1.1">{{ contests[ci-1].participantNum }}人</div>
          </span>
        </template>
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
      workNumColVisible: false,
      ratingColVisible: true,
      cruelRankingColVisible: false,
      allContestsVisible: false,
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
      let allDays = [];
      for (let i = firstEntryRow; ws[`A${i+1}`] !== undefined; ++i) {
        let person = {
          cruelRanking: ws[`A${i+1}`].v,
          lcId: ws[`B${i+1}`].v,
          lcLink: ws[`B${i+1}`].l.Rel.Target,
          days: ws[`C${i+1}`].v,
          workNum: 0,
          lcRating: ws[`D${i+1}`].v,
          cruelScore: ws[`E${i+1}`].v,
          contestRankings: []
        };
        allDays.push(person.days);
        for (let j=0; j<this.contests.length; ++j) {
          let ranking = ws[XLSX.utils.encode_cell({r: i, c: 5+j*2})].v,
              rankingClr = ws[XLSX.utils.encode_cell({r: i, c: 5+j*2})].s.fgColor?.rgb ?? 'EAEAEA',
              score = ws[XLSX.utils.encode_cell({r: i, c: 6+j*2})].v;
          if (ranking < 0) ranking = Infinity;
          person[`contest${this.contests[j].contestIndex}Ranking`] = ranking;
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

      // calculate work number
      allDays.sort((a, b) => b - a);
      let daysToIdx = {};
      for (let i=0; i<allDays.length; ++i)
        if (!(allDays[i] in daysToIdx)) daysToIdx[allDays[i]] = i + 1;
      this.qunyouData.forEach(person => person.workNum = daysToIdx[person.days]);
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
  height: 40px;
}
#boardTable >>> .el-table__body-wrapper {
  height: calc(100% - 40px) !important;
}
</style>
