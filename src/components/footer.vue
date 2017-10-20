<template>
  <div class="footer">
    <a href="https://github.com/joncgrubb"><i class="fa fa-github" aria-hidden="true"></i></a>
    <a href="https://www.linkedin.com/in/joncgrubb"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
    <a href="https://stackoverflow.com/users/8508292/joncgrubb"><i class="fa fa-stack-overflow" aria-hidden="true"></i></a>
    <a href="https://www.instagram.com/definitely.not.grubb/"><i class="fa fa-instagram" aria-hidden="true"></i></a><br>
    <div id="grubbfoot">
      <i id="copy" class="fa fa-copyright" aria-hidden="true"></i><p>Jonathan Grubb  2017</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'grubbFooter',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style scoped>
  .footer {
    background-color: #363636;
    min-height: 70px;
    text-align: center;
    padding-top: 10px;
    margin-top: 10%;
    position: relative;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .footer i {
    display: inline;
    color: #e5e5e5;
    font-size: 20px;
    margin-right: 10px;
  }

  .footer i:hover {
    color: #363636;
    text-shadow: 0px 0px 5px #e5e5e5;
  }

  #copy {
    display: inline;
    font-size: 15px !important;
  }

  .footer p {
    display: inline;
    color: #e5e5e5;
  }

  .footer a {
    text-decoration: none;
  }

  #grubbfoot {
    margin-top: 8px;
  }
</style>