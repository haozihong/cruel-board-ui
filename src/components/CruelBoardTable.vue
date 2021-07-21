<template>
  <div class="hello">
    <button v-on:click="loadMore(5)">Load 5 More</button>
    <el-table
        :data="boardData"
        style="width: 100%"
        stripe
        height="100%"
        :default-sort = "{prop: 'cruelScore', order: 'ascending'}"
        :key="refresh"
    >
      <el-table-column
          fixed
          type="index">
      </el-table-column>
      <el-table-column
          prop="cruelRanking"
          label="Cruel Ranking"
          v-if="false">
      </el-table-column>
      <el-table-column
          fixed
          label="Participants"
          width="160"
          align="center">
        <template v-slot="scope">
          <a :href="scope.row.lcLink">{{ `${scope.row.lcId}` }}</a>
        </template>
      </el-table-column>
      <el-table-column
          fixed
          prop="days"
          label="days"
          width="80"
          sortable>
      </el-table-column>
      <el-table-column
          fixed
          prop="lcRating"
          label="Rating"
          width="100"
          sortable>
      </el-table-column>
      <el-table-column
          fixed
          prop="cruelScore"
          label="Score"
          width="100"
          sortable
          :sort-by="'cruelRanking'"
          :sort-orders="['ascending', 'descending']">
      </el-table-column>
      <el-table-column
          v-for="c in this.contestsShown" :key="c.id"
          width="100">
        <template slot="header">
          {{ c.contestIndex }}
        </template>
        <template v-slot="scope">
          {{ `${scope.row.contestRankings[c.id].ranking} | ${scope.row.contestRankings[c.id].score}` }}
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
      refresh: 0,
      contests: [],
      contestsShown: [],
      boardData: []
    }
  },
  methods: {
    loadMore(k) {
      for (let i=this.contestsShown.length; k>0 && i<this.contests.length; ++i, --k) {
        this.contestsShown.push(this.contests[i]);
      }
      this.refresh ^= 1;
    }
  },
  mounted() {
    this.axios.get("./index.xlsx", {responseType: "arraybuffer"}).then(resp => {
      let data = new Uint8Array(resp.data);
      let wb = XLSX.read(data, {type: 'array'});
      let ws = wb.Sheets[wb.SheetNames[0]];
      // console.log(ws['B10']);

      let firstEntryRow = 0;
      while (ws[XLSX.utils.encode_cell({c: 0, r: firstEntryRow})] === undefined)
        ++firstEntryRow;

      // read contests
      let firstContextCol = 5;
      for (let i = firstContextCol;
           ws[XLSX.utils.encode_cell({r: firstEntryRow-3, c: i})] !== undefined;
           i += 2) {
        this.contests.push({
          id: (i-firstContextCol) / 2,
          contestIndex: ws[XLSX.utils.encode_cell({r: firstEntryRow-3, c: i})].v,
          participantNum: ws[XLSX.utils.encode_cell({r: firstEntryRow-2, c: i})].v
        });
      }

      // read each person
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
          person.contestRankings.push({
            ranking: ws[XLSX.utils.encode_cell({r: i, c: 5+j*2})].v,
            score: ws[XLSX.utils.encode_cell({r: i, c: 6+j*2})].v
          });
        }
        this.boardData.push(person);
        // console.log(person);
        // if (i > 45) break;
      }

      // this.contestsShown = this.contests;
      this.contestsShown = this.contests.slice(0, 5);
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
