<template>
  <div class="portfolio">

    <p class="text-center"><b>A few of the awesome apps I've built...</b></p>
    <hr>
    <div class="row">
      <div class="col-xs-4 text-center">
        <a href="https://grubb-ice-cream.herokuapp.com/" target="_blank"><button class="btn btn-default"><i class="fa fa-shopping-bag" aria-hidden="true"></i></button></a><p>Ice Cream Shop</p>
      </div>
      <div class="col-xs-4 text-center">
        <a href="https://grubb-tic-tac-toe.herokuapp.com/" target="_blank"><button class="btn btn-default"><i class="fa fa-hashtag" aria-hidden="true"></i></button></a><p>Tic Tac Toe</p>
      </div>
      <div class="col-xs-4 text-center">
        <a href="https://grubb-weather-doom.herokuapp.com/" target="_blank"><button class="btn btn-default"><i class="fa fa-sun-o" aria-hidden="true"></i></button></a><p>Weather Doom</p>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-4 text-center">
        <a href="https://grubb-spacedock.herokuapp.com/" target="_blank"><button class="btn btn-default"><i class="fa fa-space-shuttle" aria-hidden="true"></i></button></a><p>Spacedock Orderform</p>
      </div>
      <div class="col-xs-4 text-center">
        <a href="https://grubb-connect-4.herokuapp.com/" target="_blank"><button class="btn btn-default"><i class="fa fa-gamepad" aria-hidden="true"></i></button></a><p>Connect 4</p>
      </div>
      <div class="col-xs-4 text-center">
        <a href="https://grubb-sorting-hat.herokuapp.com/" target="_blank"><button class="btn btn-default"><i class="fa fa-address-book" aria-hidden="true"></i></button></a><p>Sorting Hat</p>
      </div>
    </div>

    <div class="bottom"></div>

  </div>
</template>

<script>
  export default {
    name: 'portfolio',
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

  .row {
    margin-top: 50px;
  }

  .btn {
    margin: 3%;
  }

  .btn i {
    font-size: 50px;
    padding: 5px;
  }

  .bottom {
    margin-bottom: 50px;
  }

  .fa-hashtag {
    -ms-transform: skew(13deg);
    -webkit-transform: skew(13deg);
    transform: skew(13deg);
  }

</style>