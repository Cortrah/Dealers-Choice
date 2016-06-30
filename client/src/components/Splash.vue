<template>
    <div id="main">
        <img class="logo" src="../assets/cav.png">
        <div class="splash">
            <h1>{{ msg }}</h1>
        </div>
        <button @click="toggleGogo">Toggle</button>
        <p id="gogo" v-show="displayGogo" class='animated' transition="flipy">
            A simple poker game
        </p>
        <p>
            go to the <a v-link="{ path: 'tabletop' }">tabletop</a>
        </p>
        <p transition="fade">
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
    import Vue from 'vue'

    Vue.transition('flipy', {
       enterClass: 'flipInX',
       leaveClass: 'flipOutX'
    });

    export default {
        data () {
            return {
                displayGogo: true,
                msg: 'Casual Card Table'
            }
        },
        methods: {
            toggleGogo: function (amt) {
                this.displayGogo = !this.displayGogo;
            }
        }
    }
</script>

<style>
    .logo {
        width: 151px;
        height: 185px
    }

    p {
        background: #ececec;
    }
</style>
