<template>
  <div class="blog-post">

    <div class="modal-header">
      <button type="button" class="close" data-dismiss="modal">&times;</button>
      <h3 class="modal-title">Using Heroku to Host Your Apps</h3>
      <h5 class="date">October 2, 2017</h5>
    </div>
    <div class="modal-body">
      <p>
      This article will assume you have the basics of building some type
      of application or web page that you'd like to be available to the whole
      of the internet. You just need a place to store it. Maybe it's a small
      project like my calculator or tic-tac-toe built with Javascript, or maybe
      something a bit more. It really doesn't matter, as what we'll cover here
      is getting what you need to deploy your app to Heroku.
      </p>
      <p>

      Heroku is a free service that will allow you to store up to 5 apps, with 
      more support and app slots available for a small fee. For now we will
      focus on the free stuff, who doesn't love free?!
      </p>
      <p>

      First, you'll need to travel on over to the Heroku website and set up your
      account.
      </p>
      <a href="https://www.heroku.com">Heroku</a>
      <p>

      <br>  
      Next you will need to have a local git repo with at bare minimum an index.html
      file stored within it for Heroku to serve your app to the wilds of the internet.
      </p>
      <p>
        
      If you don't already have this repo stored on Github, now is the time to do so.
      Create a new repo on Github, click the green Clone or Download button and copy
      the web url listed below it.
      </p>
      <p>
        
      Open terminal and navigate to your repo directory, for the sake of this article
      my repo is named "my-example-app". Set your remote with the copied url:
      </p>
      <code>git remote add origin https://github.com/username/my-example-app</code>
      <p>

      <br>  
      Create an index.js file so Heroku will know what to do:
      </p>
      <code>touch index.js</code>
      <p>

      <br>
      Let's create a .gitignore file too, there are some items we will be creating
      that we don't need to push to Github or Heroku:
      </p>
      <code>touch .gitignore</code>
      <p>

      <br>  
      And one more, a Procfile for Heroku, note there is no file extension, and capitalization is important:
      </p>
      <code>touch Procfile</code>
      <p>

      <br>  
      Open your text editor of choice and lets populate these files with what they need.
      Inside index.js, copy the following and save:
      </p>
      <pre><code>
      var express = require('express');
      var app = express();
      var port = process.env.PORT || 3000;

      app.use(express.static(__dirname + '/app/'));

      app.listen(port, function() {
      console.log('I am listening on port 3000!');
      });
      </code></pre>
      <p>
        
      <br>
      Basically this tells Heroku we'll be using an Express framework for node.js to
      run our application. The port option is so you can open a local copy of the app
      in your browser if you so choose, good for working on styling options, etc. Although you'd probably be better off installing <b>live-server</b> golbally with <b>npm</b> as it will do live reloads of the page as you edit and save files.
      </p>
      <p>
        
      An important note about line 5 of our index.js, the app.use line. The portion containing /app/ will be the directory that your application's index.html lives. This needs to be edited accordingly. For example, if your index.hmtl is in the root directory of your repo a single / would suffice. If it's located in a directory named <b>dist</b> then /app/ would need to be changed to /dist/
      </p>
      <p>
        
      Now we'll add some bits into the .gitignore file. This will prevent the files we are about to install from being pushed to Github and Heroku in the near future:
      </p>
      <pre><code>
      .DS_Store
      node_modules
      </code></pre>
      <p>

      <br>  
      Now lets add a single line to the Procfile, this is basically a script that tells Heroku to execute our index.js file:
      </p>
      <pre><code>web: node index.js</code></pre>
      <p>

      <br>  
      Once again an important note. This single line expects index.js to be located in the root directory of your project, in my case <b>my-example-app</b>. If you move the index.js file to a subdirectory this line will need to be edited to reflect that change. For example if you moved it to your <b>app</b> directory, this line would need to read <b>web: node app/index.js</b>
      </p>
      <p>
        
      NPM time! If you dont have npm installed there are plenty of helpful articles online explaining the install process. NPM is a package manager for JavaScript and makes installing things we regularly need a painless process. It is required here: <a href="https://www.npmjs.com/">NPM</a>.
      </p>
      <p>
        
      Now lets install some stuff! In terminal, once again in the root directory of your app repo, type the following:
      </p>
      <code>npm init</code>
      <p>

      <br>
      Once started you will be asked to reply to some questions, you may skip them by hitting enter or answer them so your package.json that NPM creates has relevant information in it.
      Now that NPM is initialized, lets install express. Type the following in terminal:
      </p>
      <code>npm install express --save</code>
      <p>

      <br>  
      Time to once again hit the Heroku website. Under Personal Apps tab, click the <b>New</b> button. You'll be required to specify a name and choose a region. Names for Heroku apps are first come - first serve, so if prompted that the name is taken simply pick something else! This name will soon be part of the url used to access our deployed application!
      </p>
      <p>
        
      After creating the app, if not already, navigate to your newly created app in Personal Apps tab. Open the <b>Deploy</b> tab and scroll to the bottom and copy the line below "Existing Git Repo", paste into terminal, and execute. Note that there is a $ in this line, don't copy that or it wont work, that's just letting you know to copy/paste this line into terminal.
      </p>
      <p>
        
      We're so close now! Just run your normal git commands to add, commit and push your added-to repo:
      </p>
      <code>git add .<br></code>
      <code>git commit -m "your commit message goes here"<br></code>
      <code>git push origin master</code>
      <p>

      <br>  
      Now for the Heroku portion. Pushing to Heroku works almost exactly like pushing to Github, and is therefor extremely easy!
      </p>
      <code>git push heroku master</code>
      <p>

      <br>  
      That's it! You can watch as your application gets built and deployed in the terminal, and sans any build errors you are now on your way to a web app! If there are build errors, be sure to check the Logs section of your application on the Heroku site and note any build errors that may be present in Terminal for googling solutions.
      </p>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'postHerokuApp'
  }
</script>

<style scoped>
  .date {
    color: #777;
  }
</style>