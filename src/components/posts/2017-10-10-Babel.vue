<template>
  <div class="blog-post">

    <div class="modal-header">
      <button type="button" class="close" data-dismiss="modal">&times;</button>
      <h3 class="modal-title">Quick Babel Explanation</h3>
      <h5 class="date">October 10, 2017</h5>
    </div>
    <div class="modal-body">
      <p>
        
      This is a quick and dirty rundown of Babel.
      </p>
      <p>

      Babel is, at its core, a transpiler. It basically takes code written in ES6 and converts it to ES5 so your browser understands your code. This does introduce some limitations, as not all ES6 code can be transpiled into something that can be reproduced in ES5.
      </p>
      <p>

      For the purposes of playing with ES6 code within our browser in bootcamp, Babel has a few different ways we can implement it. With the most current version, the devs have modularized the entire package so that developers can pick and choose only what they actually need. This does make it a little more complicated for new developers, as there are now extra steps that have to be taken to get Babel up and running.
      </p>
      <p>

      <b>Babel-standalone</b>
      </p>
      <hr>
      <p>

      <br>  
      Add the following to your HTML document:
      </p>
      <pre><code>
      <!-- Load Babel -->
      &lt;script src="https://unpkg.com/babel-standalone@6/babel.min.js"&gt;&lt;/script&gt;
      </code></pre>
      <p>

      <br>
      Install the env preset locally inside our project directory which allows the ES6 to be converted to ES5:
      </p>
      <code>
      npm install babel-preset-env --save-dev
      </code>
      <p>
        
      <br>
      Now we have to create a <code>.bablerc</code> file inside of our project directory and enter the following code inside the file:
      </p>
      <pre><code>
      {
        "presets": ["env"]
      }
      </code></pre>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'postBabel'
  }
</script>

<style scoped>
  .date {
    color: #777;
  }
</style>