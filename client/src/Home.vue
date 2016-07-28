<template>
    <div id="nav">
        <button @click="gotoTabletop()">gotoTabletop</button>
        Clicked: {{ count }} times
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
    </div>

    <div id="stage">
        <router-view :count='count'></router-view>
    </div>
</template>

<script type="text/babel">
    import Splash from './components/Splash'

    // this is the equivalent of the results from
    // var app = new Vue({
    // in the default examples
    // as it is my root Vue component
    export default {
        data () {
            return {
                count: '23',
            }
        },
        components: {
            Splash
        },
        methods: {
            gotoTabletop: function () {
                // this.$children;
                let elem = document.getElementById('stage');
                window.TweenMax.to(elem, 0.5,
                    {height: 600, onComplete: this.goTabletop});
            },
            goTabletop: function () {
                this.$route.router.go('/tabletop');
            },
            increment: function () {
                this.count++;
            },
            decrement: function () {
                this.count--;
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
</style>
