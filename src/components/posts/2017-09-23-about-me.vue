<template>
  <div class="blog">
    <h1></h1>

    <div id="blog-panel" class="panel panel-default">
      <div class="panel-body">
        <p><b>A little about me...</b></p>
        <hr>
        <p>Who am I? My name is Jonathan, although most people refer to me by my last name. If I had to describe myself in one word, it would have to be "philomath". From a young age I've had an undending desire to learn, to know how and why things work, and an urge to modify or customize just about everything. I've been in the automotive industry most of my life, with some of my early time spent at the Toyota manufacturing plant in Georgetown, KY. Other than acquiring a great sense of work ethic at a young age from my time there, I also learned about Kaizen. It's become a pretty common buzzword in the professional world for good reason, continuous improvement is a fantastic philosophy. Kaizen is also the reason for my physical and mental <i>need</i> to modify everything in my life.</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'blog',
    data () {
      return {
        post: 'Blog post text here?'
      }
    }
  }
</script>

<style scoped>
  hr {
    width: 50%;
  }

  .blog h1 {
    margin-top: 100px;
    padding: 5px;
    width: 25%;
    min-width: 170px;
    border: 1px solid #ccc;
    border-radius: 3px;
    box-shadow: .5px .5px 3px #ccc;
    background-color: white;
    font-size: 25px;
  }

  .blog p {
    padding: 3%;
  }
  #blog-panel {
    box-shadow: .5px .5px 3px #ccc;
  }
</style>