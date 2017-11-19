<template>
  <div class="blog">

    <p class="text-center blog-title"><b>Bootcamp experience. Technical Articles. Automotive Coverage.</b></p>
    <hr>
    <ul>

      <li class="post-list">
        <p class="post-date">November 5, 2017</p>
        <p class="post-title"><b>Enabling BrowserSync in Your Laravel Project</b></p>
        <p class="post-blurb">If you're like me, clicking the refresh page button in your browser for the 200th time while working on a local project eventually gets to be too much. After searching a variety of different combinations of "live reload laravel", "laravel browsersync" and the like, I was finally able to piece...</p>
      </li>

      <li class="post-list">
        <p class="post-date">October 25, 2017</p>
        <p class="post-title"><b>PHP and Heroku</b></p>
        <p class="post-blurb">This article will serve as a quick reference guide to setting up your PHP application and database to be served over Heroku. There will be a few items that you will need to install to make this process easier. The first of these is a package manager for PHP named...</p>
      </li>

      <li class="post-list">
        <p class="post-date">October 10, 2017</p>
        <p class="post-title"><b>Babel</b></p>
        <p class="post-blurb">This is a quick and dirty rundown of Babel. Babel is, at its core, a transpiler. It basically takes code written in ES6 and converts it to ES5 so your browser understands your code. This does introduce some limitations, as not all ES6 code can be transpiled into something that...</p>
      </li>

      <li class="post-list">
        <p class="post-date">October 2, 2017</p>
        <p class="post-title"><b>Using Heroku to Host Your Apps</b></p>
        <p class="post-blurb">This article will assume you have the basics of building some type of application or web page that you'd like to be available to the whole of the internet. You just need a place to store it. Maybe it's a small project like my calculator or tic-tac-toe built with Javascript,...</p>
      </li>

      <li class="post-list">
        <p class="post-date">September 24, 2017</p>
        <p class="post-title"><b>First Week Complete</b></p>
        <p class="post-blurb">- Command line - Git - Github - Github Pages - HTML - CSS - node - npm - Bootstrap - SASS - Jekyll - Gulp - Heroku That would be 13 technologies introduced in just the first week! Whew. Thankfully I grew up on DOS machines and command line...</p>
      </li>

      <li class="post-list">
        <p class="post-date">September 23, 2017</p>
        <p class="post-title"><b>The Start of Bootcamp</b></p>
        <p class="post-blurb">Joining a bootcamp for web development has been something I've thought about in the past and, somehow, just never really got around to looking into, let alone applying for. That all changed about 3 months ago. I had recently moved back to Central Kentucky after about a year of work...</p>
      </li>
      
      <li class="post-list">
        <p class="post-date">September 18, 2017</p>
        <p class="post-title"><b>About Me</b></p>
        <p class="post-blurb">Who am I? My name is Jonathan, although most people refer to me by my last name. If I had to describe myself in one word, it would have to be "philomath". From a young age I've had an undending desire to learn...</p>
      </li>

    </ul>

  </div>
</template>

<script>
  export default {
    name: 'blog',
  }
</script>

<style scoped>
  
  hr {
    width: 50%;
  }

  .blog-title {
    padding: 3%;
    font-size: 20px;
  }

  .post-list {
    list-style-type: none;
    width: 40%;
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

</style>