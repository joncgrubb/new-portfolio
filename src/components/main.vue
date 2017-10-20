<template>
  <div class="main">
    <grubbHeader />
      <div class="container">
        <div class="card-navs">
          <a href="#"><h1>About</h1></a>
          <a href="#"><h1>Portfolio</h1></a>
          <a href="#"><h1>Blog</h1></a>
        </div>

        <div id="main-panel" class="panel panel-default">
          <div class="panel-body">
            <p><b>{{ cardInfo }}</b></p>
            <hr>
            {{ cardContent }}
          </div>
        </div>

        <!-- <about />
        <portfolio />
        <blog /> -->
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
    display: inline-block;
    text-align: center;
    margin-top: 100px;
    padding: 5px;
    width: 25%;
    min-width: 170px;
    border: 1px solid #ccc;
    border-radius: 3px;
    box-shadow: .5px .5px 3px #ccc;
    background-color: white;
    font-size: 25px;
    color: #363636;
  }

  .container p {
    padding: 3%;
  }
  #main-panel {
    box-shadow: .5px .5px 3px #ccc;
  }
</style>
