<template>
    <div id="nav">
        <button @click="doAThing()"> {{ offsetTicks }} </button>
        <button @click="doAnotherThing()">Another Thing</button>
    </div>

    <div id="stage">
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
                let elem = document.getElementById('stage');
                window.TweenMax.fromTo(elem, 2,
                    {height: 800, width: 800},
                    {height: 400, width: 600, onComplete: this.goBack});
            },
            goBack: function () {
                let elem = document.getElementById('stage');
                window.TweenMax.fromTo(elem, 2,
                    {height: 400, width: 600},
                    {height: 800, width: 800, onComplete: this.doAnotherThing});
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

    #nav {
        position:absolute;
        top:0px;
        left:0px;
        height:30px;
        width: 100%;
        background-color: #f5f5f5;
    }

    #stage {
        display: inline-block;
        width: 600px;
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
