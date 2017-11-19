<template>
  <div class="blog-post">

    <div class="modal-header">
      <button type="button" class="close" data-dismiss="modal">&times;</button>
      <h3 class="modal-title">PHP and Heroku</h3>
      <h5 class="date">October 25, 2017</h5>
    </div>
    <div class="modal-body">
      <p>
      This article will serve as a quick reference guide to setting up your PHP application and database to be served over Heroku. There will be a few items that you will need to install to make this process easier. The first of these is a package manager for PHP named Composer. Much like npm for JavaScript, Composer will help you install cool packages to make your application better and will automatically install the dependencies these packages will require. This article will assume you have a working local PostgreSQL database and a working directory with at least an index.php file that you are using to query information from the database.
      </p>
      <p>

      There are many different database management systems available today, but for the sake of this article I am assuming you are familiar with PostgreSQL. Likewise, I am assuming that you'll be utilizing PSequel as a GUI to manage our database.
      </p>
      <p>

      First, you'll need to travel on over to the Heroku website and set up your
      account.
      </p>
      <a href="https://www.heroku.com">Heroku</a>
      <p>

      <br>  
      Next you will need to create a new app on your Heroku account. Application names on Heroku are first come, first serve, and the name will eventually be a part of the web URL used to access your application.
      </p>
      <p>
        
      After creating the app, navigate to the Resources tab within the application and enter the following into the search bar located in the Add-ons section:
      </p>
      <code>postgres</code>
      <p>

      <br>  
      Select Heroku Postgres from the dropdown and a popup window will appear asking what plan you would like to use. We will be covering the Hobby Dev - Free version only. Click the Provision button to add this feature. If you would like to upgrade to a paid plan, doing some research on the Heroku website would be strongly advised.
      </p>
      <p>
        
      Now navigate to the Settings tab within your application and in the Config Variables section click the Reveal Config Vars button. You will notice a "DATABASE_URL" field with a URL field next to it containing the Heroku URL for your database. Take note of this URL as we'll be using it later.
      </p>
      <p>
        
      In your index.php file in your working directory, in the PHP section of your application where you are setting your local database url, add the following code (note, this is where you'll need that database URL from the Settings tab of your Heroku app, not the exact URL listed below):
      </p>
      <pre><code>
      $raw_url = 'postgres://really.big.string.of.garbled.letters/numbers.you.copied.from.DATABASE_URL.on.Heroku';

      $url = parse_url($raw_url);

      var_dump($url);
      </code></pre>
      <p>

      <br>
      Save your file and reload your page in your browser, you'll now see an array being displayed near the top of your page displaying some easy-to-read information about your remote database URL. Open PSequel and open a new window. Click "Add Connection" in the bottom left of the screen. Name this something appropriate appended by "for Heroku" so you can remember this is your remote database and not your local one. We'll now need to fill in the URL information we dumped to our browser. Simply copy/paste from and into the appropriate fields in PSequel. Note that you will need to remove the "/" from the "Database:" portion. Now put a check in the Use SSL tickbox, you will not need to fill any of this information out.
      </p>
      <p>

      Click Connect in the bottom right of the screen and you're now connected to your remote database hosted on Heroku!
      </p>
      <p>

      Now open a new browser tab and download and install Composer globally from here: <a href="https://getcomposer.org/">Composer</a> Make sure to follow directions to do a global install here, as some of the commands we issue will not work correctly if not globally installed.
      </p>
      <p>

      Now, in terminal within your project working directory, type the following:
      </p>
      <code>composer require vlucas/phpdotenv</code>
      <p>

      <br>
      A few more commands to enter in terminal while we are here:
      </p>
      <code>touch .gitignore</code><br>
      <code>touch .env</code><br>
      <code>touch .env.sample</code>
      <p>

      <br>
      Open .gitignore in your text editor of choice and add the following lines:
      </p>
      <pre><code>
      /vendor
      .env
      </code></pre>
      <p>

      <br>
      Open .env.sample in your text editor of choice and add the following line:
      </p>
      <pre><code>
      DATABASE_URL=postgres://user:password@host:port/database
      </code></pre>
      <p>

      <br>
      Copy this line into your .env file and then change the user, password, host, port, and database sections to match your local database URL.
      </p>
      <p>

      All of this work is going to allow us to have two seperate copies of our code and database, one local and one remote hosted on Heroku. We will now set up our code so that it will automatically default to our local database for development and default to our remote for the production application.
      </p>
      <p>

      First, we will add an if statement to our index.php file within the same function we are using to set the database URL:
      </p>
      <pre><code>
      if (file_exists('.env')) {
        require __DIR__ . '/vendor/autoload.php';
        $dotenv = new Dotenv\Dotenv(__DIR__);
        $dotenv->load();
      }
      </code></pre>
      <p>

      <br>
      Now we will need to remove the $raw_url variable line and change our $url variable line to read as follows:
      </p>
      <pre><code>
      $url = parse_url(getenv("DATABASE_URL"));
      </code></pre>
      <p>

      <br>
      Now we just need to add a Procfile to our working directory so Heroku knows how to build our app. In your project working directory in terminal type:
      </p>
      <code>touch Procfile</code>
      <p>

      <br>
      Open Procfile in your text editor and add the following line:
      </p>
      <pre><code>
      web: vendor/bin/heroku-php-nginx
      </code></pre>
      <p>

      <br>
      Now add, commit, and push to your Github repo. In your browser, navigate to your newly created app in Personal Apps tab. Open the <b>Deploy</b> tab and scroll to the bottom and copy the line below "Existing Git Repo", paste into terminal, and execute. Note that there is a $ in this line, don't copy that or it wont work, that's just letting you know to copy/paste this line into terminal.
      </p>
      <p>

      You can now deploy to Heroku by using the following command in terminal:
      </p>
      <code>git push heroku master</code>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'postPhpAndHeroku'
  }
</script>

<style scoped>
  .date {
    color: #777;
  }
</style>