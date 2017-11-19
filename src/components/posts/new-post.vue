<template>
  <div class="blog-post">

    <div class="modal-header">
      <button type="button" class="close" data-dismiss="modal">&times;</button>
      <h3 class="modal-title">Post Title Here</h3>
      <h5 class="date">Month XX, Year</h5>
    </div>
    <div class="modal-body">
      Post Body Here
    </div>

  </div>
</template>

<script>
  export default {
    name: 'postTitleName'
  }
</script>

<style scoped>
  .date {
    color: #777;
  }
</style>