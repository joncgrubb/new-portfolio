<template>
  <div class="blog">

    <p class="text-center blog-title"><b>Bootcamp experience. Technical Articles. Automotive Coverage.</b></p>
    <hr>
    <ul>

      <li class="post-list">
        <p class="post-date">November 5, 2017</p>
        <p class="post-title"><b>Enabling BrowserSync in Your Laravel Project</b></p>
        <p class="post-blurb">If you're like me, clicking the refresh page button in your browser for the 200th time while working on a local project eventually gets to be too much. After searching a variety of different combinations of "live reload laravel", "laravel browsersync" and the like, I was finally able to piece...</p>
        <button type="button" class="btn btn-default btn-md" data-toggle="modal" data-target="#myModal" v-on:click="getPost7">Read More</button>
      </li>

      <li class="post-list">
        <p class="post-date">October 25, 2017</p>
        <p class="post-title"><b>PHP and Heroku</b></p>
        <p class="post-blurb">This article will serve as a quick reference guide to setting up your PHP application and database to be served over Heroku. There will be a few items that you will need to install to make this process easier. The first of these is a package manager for PHP named...</p>
        <button type="button" class="btn btn-default btn-md" data-toggle="modal" data-target="#myModal" v-on:click="getPost6">Read More</button>
      </li>

      <li class="post-list">
        <p class="post-date">October 10, 2017</p>
        <p class="post-title"><b>Babel</b></p>
        <p class="post-blurb">This is a quick and dirty rundown of Babel. Babel is, at its core, a transpiler. It basically takes code written in ES6 and converts it to ES5 so your browser understands your code. This does introduce some limitations, as not all ES6 code can be transpiled into something that...</p>
        <button type="button" class="btn btn-default btn-md" data-toggle="modal" data-target="#myModal" v-on:click="getPost5">Read More</button>
      </li>

      <li class="post-list">
        <p class="post-date">October 2, 2017</p>
        <p class="post-title"><b>Using Heroku to Host Your Apps</b></p>
        <p class="post-blurb">This article will assume you have the basics of building some type of application or web page that you'd like to be available to the whole of the internet. You just need a place to store it. Maybe it's a small project like my calculator or tic-tac-toe built with Javascript,...</p>
        <button type="button" class="btn btn-default btn-md" data-toggle="modal" data-target="#myModal" v-on:click="getPost4">Read More</button>
      </li>

      <li class="post-list">
        <p class="post-date">September 24, 2017</p>
        <p class="post-title"><b>First Week Complete</b></p>
        <p class="post-blurb">- Command line - Git - Github - Github Pages - HTML - CSS - node - npm - Bootstrap - SASS - Jekyll - Gulp - Heroku That would be 13 technologies introduced in just the first week! Whew. Thankfully I grew up on DOS machines and command line...</p>
        <button type="button" class="btn btn-default btn-md" data-toggle="modal" data-target="#myModal" v-on:click="getPost3">Read More</button>
      </li>

      <li class="post-list">
        <p class="post-date">September 23, 2017</p>
        <p class="post-title"><b>The Start of Bootcamp</b></p>
        <p class="post-blurb">Joining a bootcamp for web development has been something I've thought about in the past and, somehow, just never really got around to looking into, let alone applying for. That all changed about 3 months ago. I had recently moved back to Central Kentucky after about a year of work...</p>
        <button type="button" class="btn btn-default btn-md" data-toggle="modal" data-target="#myModal" v-on:click="getPost2">Read More</button>
      </li>
      
      <li class="post-list">
        <p class="post-date">September 18, 2017</p>
        <p class="post-title"><b>About Me</b></p>
        <p class="post-blurb">Who am I? My name is Jonathan, although most people refer to me by my last name. If I had to describe myself in one word, it would have to be "philomath". From a young age I've had an undending desire to learn...</p>
        <button type="button" class="btn btn-default btn-md" data-toggle="modal" data-target="#myModal" v-on:click="getPost1">Read More</button>
      </li>

    </ul>

    <div id="myModal" class="modal fade" role="dialog">
      <div class="modal-admin">

        <!-- Modal content-->
        <div class="modal-content">
          <!-- <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h3 class="modal-title">Enabling BrowserSync in Your Laravel Project</h3>
            <h5 class="date">November 5, 2017</h5>
          </div>
          <div class="modal-body">
            
          </div> -->
          <postAboutMe v-if="post1 == true"/>

          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
  import postAboutMe from './posts/2017-09-18-about-me.vue';

  export default {
    name: 'blog',
    components: {
      'postAboutMe': postAboutMe
    },
    data () {
      return {
        post1: false,
        post2: false,
        post3: false,
        post4: false,
        post5: false,
        post6: false,
        post7: false
      }
    },
    methods: {
      getPost1: function() {
        this.post2 = false;
        this.post3 = false;
        this.post4 = false;
        this.post5 = false;
        this.post6 = false;
        this.post7 = false;
        this.post1 = true;
      },
      getPost2: function() {
        this.post1 = false;
        this.post3 = false;
        this.post4 = false;
        this.post5 = false;
        this.post6 = false;
        this.post7 = false;
        this.post2 = true;
      },
      getPost3: function() {
        this.post1 = false;
        this.post2 = false;
        this.post4 = false;
        this.post5 = false;
        this.post6 = false;
        this.post7 = false;
        this.post3 = true;
      },
      getPost4: function() {
        this.post1 = false;
        this.post2 = false;
        this.post3 = false;
        this.post5 = false;
        this.post6 = false;
        this.post7 = false;
        this.post4 = true;
      },
      getPost5: function() {
        this.post1 = false;
        this.post2 = false;
        this.post3 = false;
        this.post4 = false;
        this.post6 = false;
        this.post7 = false;
        this.post5 = true;
      },
      getPost6: function() {
        this.post1 = false;
        this.post2 = false;
        this.post3 = false;
        this.post4 = false;
        this.post5 = false;
        this.post7 = false;
        this.post6 = true;
      },
      getPost7: function() {
        this.post1 = false;
        this.post2 = false;
        this.post3 = false;
        this.post4 = false;
        this.post5 = false;
        this.post6 = false;
        this.post7 = true;
      }
    }
  }
</script>

<style scoped>
  
  hr {
    width: 50%;
  }

  pre {
    width: 50%;
  }

  .btn {
    margin-bottom: 20px;
  }

  .blog-title {
    padding: 3%;
    font-size: 20px;
  }

  .post-list {
    list-style-type: none;
    width: 60%;
    margin: auto;
  }

  .post-date {
    color: #777;
    display: inline-block;
    margin-top: 20px;
  }

  .post-title {
    font-size: 20px;
  }

  .post-blurb {

  }

  body .modal {
    /* new custom width */
    max-width: 1500px;
    /* must be half of the width, minus scrollbar on the left (30px) */
    margin-top: 5%;
  }

  .date {
    color: #777;
  }

</style>