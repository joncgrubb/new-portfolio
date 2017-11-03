<template>
  <div class="main">
    <grubbHeader />
      <div class="container">
        <div class="card-navs">
          <button class="btn btn-default"><h1>About</h1></button>
          <button class="btn btn-default"><h1>Portfolio</h1></button>
          <button class="btn btn-default"><h1>Blog</h1></button>
        </div>

        <div id="main-panel" class="panel panel-default">
          <div class="panel-body">
            <p><b>{{ cardInfo }}</b></p>
            <hr>
            {{ cardContent }}
          </div>
        </div>

        <about />
        <portfolio />
        <blog />
      </div>
    <grubbFooter />
  </div>
</template>

<script>
  import grubbHeader from './header.vue';
  import grubbFooter from './footer.vue';
  import about from './about.vue';
  import portfolio from './portfolio.vue';
  import blog from './blog.vue';

  export default {
    name: 'grubbMain',
    components: {
      'grubbHeader': grubbHeader,
      'grubbFooter': grubbFooter,
      'about': about,
      'portfolio': portfolio,
      'blog': blog
    },
    data () {
      return {
        msg: 'Generic Placeholder'
      }
    }
  }
</script>

<style scoped>
  hr {
    width: 50%;
  }

  .card-navs {
    -webkit-user-select: none; /* Safari */        
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */
  }

  .container h1 {
    text-align: center;
    font-size: 25px;
    color: #363636;
    margin: 0;
  }

  .container .btn {
    margin-top: 100px;
    margin-bottom:10px;
    box-shadow: .5px .5px 3px #ccc;
  }

  .container p {
    padding: 3%;
  }
  #main-panel {
    box-shadow: .5px .5px 3px #ccc;
  }
</style>
