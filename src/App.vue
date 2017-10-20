<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
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
    /*text-align: center;*/
    color: #2c3e50;
  }

  @import url('https://fonts.googleapis.com/css?family=Titillium+Web');

  /* font-family: 'Titillium Web', sans-serif; */
  /* font-family: 'Open Sans', sans-serif; */

  body {
    background-color: #f2f2f2;
  }

  h1 {
    font-family: 'Titillium Web', sans-serif;
  }
</style>
