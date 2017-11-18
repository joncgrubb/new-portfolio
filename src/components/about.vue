<template>
  <div class="about-me">

    <p class="text-center"><b>Web Developer. Philomath. Automotive Enthusiast. Awesome Guy.</b></p>
    <hr>
    <img class="profile-pic" src="../assets/images/jon.jpg">
    <p class="text-center">Really short blurb about me in general.</p>
    <div class="container-fluid">  
      <div class="row">
        <div class="col-xs-4">
          <i class="fa fa-file-code-o blurb-icon" aria-hidden="true"></i>
          <p>Short and sweet info about coding / bootcamp</p>
        </div>
        <div class="col-xs-4">
          <i class="fa fa-wrench blurb-icon" aria-hidden="true"></i>
          <p>Short and sweet info about cars / mods / kaizen</p>
        </div>
        <div class="col-xs-4">
          <i class="fa fa-mobile blurb-icon" aria-hidden="true"></i>
          <p>Short and sweet info about phones / roms / dev</p>
        </div>
      </div>
    </div>

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a arcu imperdiet, vehicula nisi non, iaculis orci. Sed tincidunt ligula quis erat vestibulum imperdiet. Vestibulum viverra id nisl non mollis. Mauris sagittis lobortis blandit. Aenean eget scelerisque felis, at elementum augue. In venenatis nisi et tortor pulvinar, vitae lacinia arcu dapibus. Proin pretium dolor nulla, laoreet dapibus purus gravida sed. Donec fringilla sit amet elit ut consequat. Suspendisse tempor accumsan tellus vitae vulputate. Ut mollis hendrerit ante, ac scelerisque eros lobortis ut. Aenean euismod id nulla et mollis. In faucibus nisi massa, sit amet viverra sapien vestibulum nec.</p>
    <p>Suspendisse potenti. Etiam finibus, est ac vehicula aliquam, lacus ligula sagittis ante, porta finibus arcu tortor non velit. Donec rhoncus at lorem eget fringilla. Vivamus volutpat tortor sed odio fringilla, vitae pulvinar tortor malesuada. Vestibulum felis turpis, dignissim eu aliquet non, lacinia sit amet lorem. Nam aliquam nisl sed metus congue dictum. Vestibulum justo libero, lacinia id fringilla at, convallis sit amet tortor. Donec et volutpat neque.</p>

  </div>
</template>

<script>
  export default {
    name: 'about',
  }
</script>

<style scoped>
  
  hr {
    width: 50%;
  }

  .profile-pic {
    height: 25%;
    width: 25%;
    border-radius: 5px;
    box-shadow: .5px .5px 3px #ccc;
    display: block;
    margin: auto;
    border: 1px solid #777;
  }

  .about-me p {
    padding: 3%;
  }
  .blurb-icon {
    display: block;
    text-align: center;
    font-size: 40px;
    color: #777;
    text-shadow: 1px 1px 2px #ccc;
    margin-top: 30px;
  }

</style>