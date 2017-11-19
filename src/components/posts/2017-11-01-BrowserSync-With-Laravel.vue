<template>
  <div class="blog-post">

    <div class="modal-header">
      <button type="button" class="close" data-dismiss="modal">&times;</button>
      <h3 class="modal-title">Enabling BrowserSync in Your Laravel Project</h3>
      <h5 class="date">November 11, 2017</h5>
    </div>
    <div class="modal-body">
      <p>

      If you're like me, clicking the refresh page button in your browser for the 200th time while working on a local project eventually gets to be too much. After searching a variety of different combinations of "live reload laravel", "laravel browsersync" and the like, I was finally able to piece together how to get automatic page refresh working locally within my Laravel project. The official documentation is mostly great and informative but, especially for developers new to the framework, getting live reload working isn't exactly spelled out for you.
      </p>
      <p>

      This is the quickest way to get Browsersync working on your local Laravel project. This framework offers loads of customization, so this post is tailored to new developers and students just looking for a much needed break from that refresh page button.
      </p>
      <p>

      I'm assuming since you've found this post that you have a basic understanding of the framework and of package managers and installing development software on your Mac. For this example we'll be making use of Homebrew, npm, and obviously Laravel.
      </p>
      <p>

      Web devlopers just <i>love</i> our package managers, so if you don't have Yarn, you'll need it (Laravel makes use of it anyway, so now is a good time to install it).
      </p>
      <p>

      We will take care of global installation of Yarn so you won't have any trouble with new projects in the future. Open terminal and use Homebrew to install it:
      </p>
      <code>brew install yarn</code>
      <p>

      <br>  
      Whether you have an existing Laravel project or need to create a new one, these steps will not change (other than installing the prerequisite applications that we're covering now). Assuming you have an existing project and you haven't done so already, navigate to your project root directory in terminal and enter:
      </p>
      <code>npm install</code>
      <p>

      <br>  
      This will install the dependencies that Laravel needs to serve your page with Browsersync and doesn't install automatically on creating a new project as with Composer packages.
      </p>
      <p>
        
      Now, with your favorite text editor, open the <b>webpack.mix.js</b> file located in your Laravel project root directory. We will need to edit one of these lines to include browsersync in a way that will work for us. Below is what the lines we need to modify should look like (at least for version 5.5 of Laravel) after a fresh new project has been started:
      </p>
      <pre><code>
      mix.js('resources/assets/js/app.js', 'public/js')
       .sass('resources/assets/sass/app.scss', 'public/css');
       </code></pre>
      <p>

      <br>  
      Edit it to now look like this:
      </p>
      <pre><code>
      mix.js('resources/assets/js/app.js', 'public/js')
         .sass('resources/assets/sass/app.scss', 'public/css')
         .browserSync('http://localhost:8000');
      </code></pre>
      <p>

      <br>
      You will notice that the URL in the line we added is the exact URL (and port) that <b>php artisan serve</b> utilizes for working on our application locally by default. We won't need to use that URL anymore in our browser for working locally!
      </p>
      <p>

      Now open your local server like you would normally with artisan by entering into terminal:
      </p>
      <code>php artisan serve</code>
      <p>

      <br>
      You'll need to open another terminal tab at this point, as we'll actually be utilizing two seperate local servers (which is what we require for live reload!)
      </p>
      <p>

      Now you'll need to run another command in terminal. Note that this command may have to be run twice, as the first time you run it may just install dependencies required for the Mix to compile. So if you get errors, just run the same command once more before Googling error messages. In terminal:
      </p>
      <code>npm run watch</code>
      <p>

      <br>
      Once this command runs successfully it should automagically open a new browser tab of a localhost server in your browser that will update any time you save a file within your Laravel project! Now that refresh page button can rest, finally.
      </p>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'postBrowserSync'
  }
</script>

<style scoped>
  .date {
    color: #777;
  }
</style>