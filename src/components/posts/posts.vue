<template>
  <div class="blog">
    <h1></h1>

    <div id="blog-panel" class="panel panel-default">
      <div class="panel-body">
        <p><b>Blog post title area.</b></p>
        <hr>
        <p>Sample blog post text area.</p>
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