<template>
  <div class="blog-post">

    <div class="modal-header">
      <button type="button" class="close" data-dismiss="modal">&times;</button>
      <h3 class="modal-title">A little about me...</h3>
      <h5 class="date">September 18, 2017</h5>
    </div>
    <div class="modal-body">
      <p>
        Who am I? My name is Jonathan, although most people refer to me by my last name. If I had to describe myself in one word, it would have to be "philomath". From a young age I've had an undending desire to learn, to know how and why things work, and an urge to modify or customize just about everything. I've been in the automotive industry most of my life, with some of my early time spent at the Toyota manufacturing plant in Georgetown, KY. Other than acquiring a great sense of work ethic at a young age from my time there, I also learned about Kaizen. It's become a pretty common buzzword in the professional world for good reason, continuous improvement is a fantastic philosophy. Kaizen is also the reason for my physical and mental <i>need</i> to modify everything in my life.
      </p>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'postAboutMe'
  }
</script>

<style scoped>
  .date {
    color: #777;
  }
</style>