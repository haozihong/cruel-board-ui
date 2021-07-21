<template>
  <div id="app">
    <h2>Cruel Board</h2>
    <CruelBoardTable style="height: 90%"/>
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 100%;
}
</style>
