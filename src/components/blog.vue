<template>
  <div class="blog">
    <h1 class="text-center">Blog</h1>

    <div id="blog-panel" class="panel panel-default">
      <div class="panel-body">
        <p class="text-center"><b>Bootcamp experience. Technical Articles. Automotive Coverage.</b></p>
        <hr>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a arcu imperdiet, vehicula nisi non, iaculis orci. Sed tincidunt ligula quis erat vestibulum imperdiet. Vestibulum viverra id nisl non mollis. Mauris sagittis lobortis blandit. Aenean eget scelerisque felis, at elementum augue. In venenatis nisi et tortor pulvinar, vitae lacinia arcu dapibus. Proin pretium dolor nulla, laoreet dapibus purus gravida sed. Donec fringilla sit amet elit ut consequat. Suspendisse tempor accumsan tellus vitae vulputate. Ut mollis hendrerit ante, ac scelerisque eros lobortis ut. Aenean euismod id nulla et mollis. In faucibus nisi massa, sit amet viverra sapien vestibulum nec.</p>
        <p>Suspendisse potenti. Etiam finibus, est ac vehicula aliquam, lacus ligula sagittis ante, porta finibus arcu tortor non velit. Donec rhoncus at lorem eget fringilla. Vivamus volutpat tortor sed odio fringilla, vitae pulvinar tortor malesuada. Vestibulum felis turpis, dignissim eu aliquet non, lacinia sit amet lorem. Nam aliquam nisl sed metus congue dictum. Vestibulum justo libero, lacinia id fringilla at, convallis sit amet tortor. Donec et volutpat neque.</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'blog',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
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