<template>
    <div id="home">
        <button @click="doAThing()"> {{ offsetTicks }} </button>
        <button @click="doAnotherThing()">Another Thing</button>
        <router-view></router-view>
    </div>
</template>

<script type="text/babel">
    import Splash from './components/Splash'

    export default {
        components: {
            Splash
        },
        data: function () {
            return {
                ticks: 0
            }
        },
        methods: {
            doAThing: function () {
                this.ticks++;
            },
            doAnotherThing: function () {
                // this.$children;
                let elem = document.getElementById('splash');
                window.TweenMax.fromTo(elem, 2, {opacity: 1}, {opacity: 0, onComplete: this.goBack});
            },
            goBack: function () {
                let elem = document.getElementById('splash');
                window.TweenMax.fromTo(elem, 2, {opacity: 0}, {opacity: 1, onComplete: this.doAnotherThing});
            }
        },
        computed: {
            offsetTicks: function () {
                return this.ticks + 1;
            }
        }
    }
</script>

<style>
    html {
        height: 100%;
    }

    body {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-image: url('./assets/paw_print.jpg');
    }

    #home {
        max-width: 600px;
        font-family: Source Sans Pro, Helvetica, sans-serif;
        text-align: center;
        color: #2c3e50;
        background-color: #f5f5f5;
    }

    #home a {
        color: #42b983;
        text-decoration: none;
    }
</style>
