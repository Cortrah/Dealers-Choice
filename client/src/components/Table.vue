<template>
  <div id="table">
    <player></player>
    <player></player>
    <player></player>
    <player></player>
    <player></player>
    <player></player>
  </div>
</template>

<script type="text/babel">
  import Player from './components/Player'

  export default {
    components: {
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
    background-image: url(../assets/paw_print.jpg);
  }

  #table {
    color: #2c3e50;
    margin-top: -100px;
    max-width: 600px;
    font-family: Source Sans Pro, Helvetica, sans-serif;
    text-align: center;
    background-color: #f5f5f5;
  }

  #table a {
    color: #42b983;
    text-decoration: none;
  }

</style>
