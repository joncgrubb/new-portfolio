<template>
  <div class="about-me">

    <p class="text-center"><b>Web Developer. Philomath. Automotive Enthusiast. Awesome Guy.</b></p>
    <hr>
    <img class="profile-pic" src="../assets/images/jon.jpg">
    <p class="text-center">I have an insatiable desire to learn, modify, and improve everything around me. I've loved technology from a young age and have been in the automotive industry for most of my professional career. From coding and writing scripts for gaming addons and bots, to assisting with development of custom android ROMS with the folks over on the xda forums, to hiring, training and leading employees in a brand new market for a national top 10 automotive company, my need to learn, improve, and help others do the same has only gotten stronger.</p>
    <div class="container-fluid">  
      <div class="row">
        <div class="col-sm-4">
          <i class="fa fa-code blurb-icon" aria-hidden="true"></i>
          <p class="blurb-title"><b>Developer</b></p>
          <p class="text-center">The Awesome Inc web development bootcamp has been a fantastic opportunity for me to break out of my comfort zone in the automotive industry to pursue my dream of becoming an asset in the ever changing technology industry.</p>
        </div>
        <div class="col-sm-4">
          <i class="fa fa-wrench blurb-icon" aria-hidden="true"></i>
          <p class="blurb-title"><b>Enthusiast</b></p>
          <p class="text-center">I helped my best friend build a turbocharged 500 wheel horsepower 1.6 liter 1991 Honda CRX that still managed 40+ mpg while not on boost. My current project is a 2006 Acura TSX that I've outfitted with extremely rare Japan-only parts for the car show scene.</p>
        </div>
        <div class="col-sm-4">
          <i class="fa fa-mobile blurb-icon" aria-hidden="true"></i>
          <p class="blurb-title"><b>Philomath</b></p>
          <p class="text-center">I'm a lifelong learner. Everything I become interested in becomes a hobby to me in some form or fashion. Mobile phones, cooking, home automation... I never turn down an opportunity to research something new, especially if it means the need for buying new tools.</p>
        </div>
      </div>
    </div>

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
    margin-bottom: 20px;
    border: 1px solid #777;
  }

  .about-me p {
    padding: 3%;
  }

  .blurb-title {
    text-align: center;
    color: #777;
    font-size: 16px;
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