<template>
    <div id="main">
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
                let elem = document.getElementById('main');
                window.TweenMax.fromTo(elem, 2, {opacity: 1}, {opacity: 0, onComplete: this.goBack});
            },
            goBack: function () {
                let elem = document.getElementById('main');
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

    #main {
        display: inline-block;
        max-width: 600px;
        font-family: Source Sans Pro, Helvetica, sans-serif;
        text-align: center;
        color: #2c3e50;
        background-color: #f5f5f5;
    }

    #main a {
        color: #42b983;
        text-decoration: none;
    }

    .bounce-transition {
        display: inline-block;
    }

    .bounce-enter {
        -webkit-animation: bounce-in .5s;
        animation: bounce-in .5s;
    }

    .bounce-leave {
        -webkit-animation: bounce-out .5s;
        animation: bounce-out .5s;
    }

    @keyframes bounce-in {
        0% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }
        50% {
            -webkit-transform: scale(1.5);
            transform: scale(1.5);
        }
        100% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }
    }

    @keyframes bounce-out {
        0% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }
        50% {
            -webkit-transform: scale(1.5);
            transform: scale(1.5);
        }
        100% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }
    }

    @-webkit-keyframes bounce-in {
        0% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }
        50% {
            -webkit-transform: scale(1.5);
            transform: scale(1.5);
        }
        100% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }
    }

    @-webkit-keyframes bounce-out {
        0% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }
        50% {
            -webkit-transform: scale(1.5);
            transform: scale(1.5);
        }
        100% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }
    }

    @keyframes bounce-in {
        0% {
            transform: scale(1);
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
            transform: scale(1);
        }
    }
</style>
