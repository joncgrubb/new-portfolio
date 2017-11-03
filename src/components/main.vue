<template>
  <div class="main">
    
    <grubbHeader />
      <div class="container">
        <div class="card-navs">
          <button class="btn btn-default" v-bind:class="{ active: about }" v-on:click="getAbout"><h1>About</h1></button>
          <button class="btn btn-default" v-bind:class="{ active: portfolio }" v-on:click="getPortfolio"><h1>Portfolio</h1></button>
          <button class="btn btn-default" v-bind:class="{ active: blog }" v-on:click="getBlog"><h1>Blog</h1></button>
        </div>

        <div id="main-panel" class="panel panel-default">
          <div class="panel-body">
            <transition name="component-fade" mode="out-in">
              <about v-if="about == true"/>
              <portfolio v-if="portfolio == true" />
              <blog v-if="blog == true" />
            </transition>
          </div>
        </div>

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
        about: true,
        portfolio: false,
        blog: false
      }
    },
    methods: {
      getAbout: function() {
        this. portfolio = false;
        this.blog = false;
        this.about = true;
      },
      getPortfolio: function() {
        this.blog = false;
        this.about = false;
        this.portfolio = true;
      },
      getBlog: function() {
        this.about = false;
        this.portfolio = false;
        this.blog = true;
      }
    }
  }
</script>

<style scoped>
  
  hr {
    width: 50%;
  }

  .btn:focus {
  outline: none;
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

  #main-panel {
    box-shadow: .5px .5px 3px #ccc;
  }

  .component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
  }
  .component-fade-enter, .component-fade-leave-to {
    opacity: 0;
  }

</style>
