<template>
  <div class="portfolio">

    <p class="text-center portfolio-title"><b>A few of the awesome apps I've built...</b></p>
    <hr>
    <div class="row">
      <div class="col-xs-4 text-center">
        <a href="https://grubb-ice-cream.herokuapp.com/" target="_blank"><button class="btn btn-default hvr-radial-out"><i class="fa fa-shopping-bag" aria-hidden="true"></i></button></a><p>Ice Cream Shop</p>
      </div>
      <div class="col-xs-4 text-center">
        <a href="https://grubb-tic-tac-toe.herokuapp.com/" target="_blank"><button class="btn btn-default hvr-radial-out"><i class="fa fa-hashtag" aria-hidden="true"></i></button></a><p>Tic Tac Toe</p>
      </div>
      <div class="col-xs-4 text-center">
        <a href="https://grubb-weather-doom.herokuapp.com/" target="_blank"><button class="btn btn-default hvr-radial-out"><i class="fa fa-sun-o" aria-hidden="true"></i></button></a><p>Weather Doom</p>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-4 text-center">
        <a href="https://grubb-spacedock.herokuapp.com/" target="_blank"><button class="btn btn-default hvr-radial-out"><i class="fa fa-space-shuttle" aria-hidden="true"></i></button></a><p>Spacedock Orderform</p>
      </div>
      <div class="col-xs-4 text-center">
        <a href="https://grubb-connect-4.herokuapp.com/" target="_blank"><button class="btn btn-default hvr-radial-out"><i class="fa fa-gamepad" aria-hidden="true"></i></button></a><p>Connect 4</p>
      </div>
      <div class="col-xs-4 text-center">
        <a href="https://grubb-sorting-hat.herokuapp.com/" target="_blank"><button class="btn btn-default hvr-radial-out"><i class="fa fa-address-book" aria-hidden="true"></i></button></a><p>Sorting Hat</p>
      </div>
    </div>

    <div class="bottom"></div>

  </div>
</template>

<script>
  export default {
    name: 'portfolio',
  }
</script>

<style scoped>
  
  hr {
    width: 50%;
  }

  .portfolio-title {
    padding: 3%;
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

  .hvr-radial-out {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px transparent;
  position: relative;
  overflow: hidden;
  background: #e1e1e1;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.2s;
  transition-duration: 0.2s;
  }
  .hvr-radial-out:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #363636; /* #2098D1; */
    border-radius: 100%;
    -webkit-transform: scale(0);
    transform: scale(0);
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }
  .hvr-radial-out:hover, .hvr-radial-out:focus, .hvr-radial-out:active {
    color: white;
  }
  .hvr-radial-out:hover:before, .hvr-radial-out:focus:before, .hvr-radial-out:active:before {
    -webkit-transform: scale(2);
    transform: scale(2);
  }

</style>