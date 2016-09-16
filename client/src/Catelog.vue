<template>
    <div id="home">

    </div>
</template>

<script type="text/babel">
    import Card from './components/Card'
    import Vue from 'vue'

    let bus = new Vue();

    export default {
        name: 'Catelog',

        components: {
            Card
        },
        methods: {
            gotoSplash: function () {
                let elem = document.getElementById('stage');
                this.destination = 'home';
                window.TweenMax.to(elem, 0.5,
                    {height: 300, onComplete: this.nav});
            },
            gotoLobby: function () {
                // this.$children;
                let elem = document.getElementById('stage');
                this.destination = 'lobby';
                window.TweenMax.to(elem, 0.5,
                    {height: 400, onComplete: this.nav});
            },
            gotoTabletop: function () {
                // this.$children;
                let elem = document.getElementById('stage');
                this.destination = 'tabletop';
                window.TweenMax.to(elem, 0.5,
                    {height: 400, onComplete: this.nav});
            },
            nav: function () {
                this.$route.router.go('/' + this.destination);
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
    }

</style>
