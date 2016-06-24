<template>
  <div id="tabletop">
    <div class="tabletop">
      <p>
        A simple poker game
      </p>
      <p>
        go to the <a v-link="{ path: 'splash' }">splash page</a>
      </p>
      <p>
        This will be written with
        <a href="http://hapijs.com/">hapi</a> and
        <a href="https://vuejs.org/guide/components.html#Dynamic-Components">vue</a>.
      </p>
      <p>
        It will probably also use
        <a href="https://github.com/vuejs/vue-router/" target="_blank">vue-router</a> for routing, and possibly
        <a href="https://github.com/vuejs/vuex/" target="_blank">vuex</a> for state management.
      </p>
    </div>
  </div>
  <div id="players">
    <player></player>
    <player></player>
    <player></player>
    <player></player>
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
    color: #2c3e50;
    margin-top: 50px;
    max-width: 600px;
    font-family: Source Sans Pro, Helvetica, sans-serif;
    text-align: center;
    background-color: #f5f5f5;
  }

  #tabletop a {
    color: #ee9f5e;
    text-decoration: none;
  }

  .players {
    layout: block;
    position: relative;
  }
</style>
