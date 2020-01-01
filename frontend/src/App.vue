<template>
  <div id="app">
    <Navigation></Navigation>
    <router-view></router-view>
  </div>
</template>

<script>

import Navigation from '@/components/Navigation'

export default {
  name: 'app',
  components: {
    Navigation
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x:hidden;
  min-height: 100vh;
  background-color: #EDEDED;
}
@import url(http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,700italic,300,400,700);
body {
    font-family: 'Open Sans', sans-serif;
}
.primary-title{
  color:#4214FB;
}
.card-body{
  padding-top: 10px!important;
  padding-bottom: 10px!important;
}
.card {
  background-color: #f8f9fa!important; 
  border-radius: 0.3rem!important;
  border:none!important;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
