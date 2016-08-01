<template>
    <div id="stage">
        <h1>{{ title }}</h1>
        <p>
            choose some settings
        </p>
        <p>
           invite some players
        </p>
        <button @click='hostGame()'>Join</button>
    </div>
</template>

<script type="text/babel">

    export default {
        data () {
            return {
                title: 'Host a Table'
            }
        },
        methods: {
            hostGame: function () {
                // this.$children;
                let elem = document.getElementById('stage');
                window.TweenMax.to(elem, 0.5,
                    {height: 600, onComplete: this.go('tabletop')});
            },
            go: function (route) {
                this.$route.router.go('/' + route);
            }
        }
    }
</script>
