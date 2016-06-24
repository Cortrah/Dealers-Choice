<template>
  <div id="splash">
    <img class="logo" src="../assets/cav.png">
    <div class="splash">
      <h1>{{ msg }}</h1>
    </div>
    <p>
      A simple poker game
    </p>
    <p>
      go to the <a v-link="{ path: 'tabletop' }">table</a>
    </p>
    <p>
      This will be written with
      <a href="http://hapijs.com/">hapi</a> and
      <a href="https://vuejs.org/guide/components.html#Dynamic-Components">vue</a>.
    </p>
    <p>
      To get a better understanding of how the boilerplate that this is based on works, check out
      <a href="http://vuejs-templates.github.io/webpack" target="_blank">its documentation</a>.
      It is also recommended to go through the docs for
      <a href="http://webpack.github.io/" target="_blank">Webpack</a> and
      <a href="http://vuejs.github.io/vue-loader/" target="_blank">vue-loader</a>.
    </p>
    <p>
      It will probably also use
      <a href="https://github.com/vuejs/vue-router/" target="_blank">vue-router</a> for routing, and possibly
      <a href="https://github.com/vuejs/vuex/" target="_blank">vuex</a> for state management.
    </p>
  </div>
</template>

<script type="text/babel">
  export default {
    data () {
      return {
        msg: 'Casual Card Table'
      }
    }
  }
</script>

<style>

  #splash {
    color: #2c3e50;
    margin-top: -100px;
    max-width: 600px;
    font-family: Source Sans Pro, Helvetica, sans-serif;
    text-align: center;
    background-color: #f5f5f5;
  }

  #splash a {
    color: #42b983;
    text-decoration: none;
  }

  .logo {
    width: 151px;
    height: 185px
  }
</style>
