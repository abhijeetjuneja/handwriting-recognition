<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x:hidden;
  background-color: #EDEDED;
  padding: 5vh;
}
.primary-title{
  color:#4214FB;
}
.card-body{
  padding-top: 10px!important;
  padding-bottom: 10px!important;
}
</style>
