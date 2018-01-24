<template>
  <div class="blog-post">

    <div class="modal-header">
      <button type="button" class="close" data-dismiss="modal">&times;</button>
      <h3 class="modal-title">HTTP Tunneling with ngrok</h3>
      <h5 class="date">January 20, 2018</h5>
    </div>
    <div class="modal-body">
      <p>

      When building applications that utilize the Twilio Voice or SMS API, you will need to handle incoming messages and calls as well as be able to respond to them. In the development environment running on localhost, this poses a few challenges for us. While testing these features we will need the Twilio service to be able to "talk" with our local machine. This is referred to as a tunnel. There are many ways we could go about doing this, some safer than others, but as the title of this post suggests, we will be using a simple little tool called ngrok (pronounced 'en-grok', as per the author).
      </p>
      <p>

      Pop over to the ngrok website and download the tool: <a href="https://ngrok.com/download">Here</a>
      </p>
      <p>

      The tool has extremely good documentation which I won't repeat here, and the author has some great blog posts about writing good documentation that I highly recommend reading if you have the chance.
      </p>
      <p>

      It is extremely simple to start using ngrok to open your project up to the internet, and even monitor the traffic coming and going from your local project. Simply open the terminal and enter:
      </p>
      <code>./ngrok http 8080</code>
      <p>

      You will need to leave this terminal window open for the tool to continue to function, and you'll be able to see API requests coming through. If you'd like to utilize the debugging features of ngrok, open a browser tab and enter:
      </p>
      <code>localhost:4040</code>
      <p>

      This is the web interface you can use for debugging, extremely useful if you're integrating Twilio into a Laravel or PHP project where debugging can be a bit more difficult for beginners.
      </p>
      <p>

      I wanted to share this tool and a small how-to before my next post which will cover integrating a voice message to users attempting to call in to your Twilio long number. Setting up ngrok is a requirement for allowing this to work locally.
      </p>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'postNgrok'
  }
</script>

<style scoped>
  .date {
    color: #777;
  }
</style>