<template>
  <div id="app">
    <div style="text-align: center">
      <el-link href="https://wisdompeak.github.io/lc-score-board/" :underline="false" style="height: 75px">
        <div style="display: flex; justify-content: center; align-items: center">
          <img src="./assets/YouXiuLogo.png" alt="logo" style="height: 40px; padding-right: 0.75rem">
          <h1>残酷刷题群</h1>
        </div>
      </el-link>
    </div>
  <CruelBoardTable style="height: calc(100% - 75px)"/>
  </div>
</template>

<script>
import CruelBoardTable from './components/CruelBoardTable.vue'

export default {
  name: 'App',
  components: {
    CruelBoardTable
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
</style>
