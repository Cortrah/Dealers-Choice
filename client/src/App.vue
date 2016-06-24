<template>
  <div id="app">
    <splash></splash>
    <tabletop></tabletop>
    <router-view></router-view>
  </div>
</template>

<script type="text/babel">
  import Splash from './components/Splash'
  import Tabletop from './components/Tabletop'
  import Player from './components/Player'

  export default {
    components: {
      Splash,
      Tabletop,
      Player
    }
  }
</script>

<style>
  html {
    height: 100%;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    background-image: url(./assets/paw_print.jpg);
  }

  #app {
    color: #2c3e50;
    margin-top: -100px;
    max-width: 600px;
    font-family: Source Sans Pro, Helvetica, sans-serif;
    text-align: center;
    background-color: #f5f5f5;
  }

  #app a {
    color: #42b983;
    text-decoration: none;
  }
</style>
