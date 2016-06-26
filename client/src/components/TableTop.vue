<template>
  <div id="tabletop">
    <div class="tabletop">
      <p>
        go to the <a v-link="{ path: '/' }">splash page</a>
      </p>
      <br/>
      <player></player>
      <player></player>
      <player></player>
      <p class="pot">
        Pot
        <span id="gogo" v-if="show" transition="bounce">Look at me!</span>
      </p>
      <player></player>
      <player></player>
      <player></player>
    </div>
  </div>
</template>

<script type="text/babel">
  import Player from './Player'

  export default {
    components: {
      Player
    }
  }
</script>

<style>

  #tabletop {
    display: inline-block;
    justify-content: center;
    margin-top: -100px;
    max-width: 600px;
    padding: 20px;
    font-family: Source Sans Pro, Helvetica, sans-serif;
    text-align: center;
    color: #2c3e50;
    background-color: #f5f5f5;
  }

  #tabletop a {
    color: #ee9f5e;
    text-decoration: none;
  }

  .pot {
    align-items: center;
    height: 100px;
  }
  .bounce-transition {
    display: inline-block; /* otherwise scale animation won't work */
  }
  .bounce-enter {
    animation: bounce-in .5s;
  }
  .bounce-leave {
    animation: bounce-out .5s;
  }

  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes bounce-out {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(0);
    }
  }

</style>
