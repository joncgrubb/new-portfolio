<template>
  <div class="header">
    <h1>Jonathan Grubb</h1>
    <hr>
    <a href="https://github.com/joncgrubb"><i class="fa fa-github" aria-hidden="true"></i></a>
    <a href="https://www.linkedin.com/in/joncgrubb"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
    <a href="https://stackoverflow.com/users/8508292/joncgrubb"><i class="fa fa-stack-overflow" aria-hidden="true"></i></a>
    <a href="https://www.instagram.com/definitely.not.grubb/"><i class="fa fa-instagram" aria-hidden="true"></i></a>
  </div>
</template>

<script>
  export default {
    name: 'grubbHeader',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style scoped>
  .header {
  background-color: #363636;
  min-height: 100px;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 15px;
  box-shadow: 4px 0px 5px #222;
  }

  .header h1 {
    color: #e5e5e5;
  }

  .header hr {
    width: 8%;
    display:block;
    -webkit-animation: hr-anim 5s infinite;
      -moz-animation:    hr-anim 5s infinite;
      -o-animation:      hr-anim 5s infinite;
      animation:         hr-anim 5s infinite; 
  }

  .header a {
    text-decoration: none;
  }

  .header i {
    display: inline;
    color: #e5e5e5;
    font-size: 30px;
    margin-right: 10px;
  }

  .header i:hover {
    color: #363636;
    text-shadow: 0px 0px 5px #e5e5e5;
    text-decoration: none;
  }

  @-webkit-keyframes hr-anim {
    0%   { width: 8%; }
    50% { width: 4%; }
    80% { width: 0px;}
    100%{ width:8%;}
  }
  @-moz-keyframes hr-anim {
    0%   { width: 8%; }
    50% { width: 8%; }
    80% { width: 0px;}
    100%{ width:8%;}
  }
  @-o-keyframes hr-anim {
    0%   { width: 8%; }
    50% { width: 8%; }
    80% { width: 0px;}
    100%{ width:8%;}
  }
  @keyframes hr-anim {
    0%   { width: 8%; }
    50% { width: 8%; }
    80% { width: 0px;}
    100%{ width:8%;}
  }
</style>
