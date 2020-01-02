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
}
@import url(http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,700italic,300,400,700);
body {
    font-family: 'Open Sans', sans-serif;
    background:radial-gradient(ellipse at center, rgba(140, 132, 254,1) 0%, rgba(255,254,234,1) 35%,rgba(140, 132, 254,1)100%);
    animation: gradientBG 15s ease infinite;
}
.btn {
  background: rgba(0,0,0,0.3)!important;
  color:white;
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
nav.navbar {
  background: rgba(0,0,0,0.1)!important;
}
.page-item.disabled .page-link{
   background: rgba(0,0,0,0.1)!important;
   color:white!important;
  border-color: transparent!important;
}
.page-item.active .page-link{
   background: rgba(0,0,0,0.1)!important;
   color:white!important;
  border-color: white!important;
}
.navbar-light .navbar-nav .nav-link{
  color:white!important;
}
.custom-file-input{

}

.page-link{
  background: rgba(0,0,0,0.1)!important;
  color:white!important;
  border-color: transparent!important;
}
.animated{
  -webkit-animation-duration: 2500ms;
  animation-duration: 2500ms;
}
.fade-enter-active, .fade-leave-active {
  animation: go 2s;
}
.invisible {
  opacity: 0
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 5;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
