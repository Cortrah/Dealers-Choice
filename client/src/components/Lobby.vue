<template>
    <div id="stage">
        <h1>{{ title }}</h1>

        <h2>Tables</h2>
        <ul id="gameList">
            <li v-for="game in games">
                {{ game.name }} <button  @click="joinGame()">Join</button>
            </li>
        </ul>
        <button @click="hostGame()"> Host a table </button>
        <br/>
        <br/>
    </div>
</template>

<script type="text/babel">

    export default {
        name: 'Lobby',
        props: ['store'],
        data () {
            return {
                title: 'Lobby',
                games: [
                    { name: 'Cort\'s Table' }
                ],
            }
        },
        methods: {
            joinGame: function () {
                // this.$children;
                let elem = document.getElementById('stage');
                window.TweenMax.to(elem, 0.5,
                    {height: 400, onComplete: this.go('tabletop')});
            },
            hostGame: function () {
                // this.$children;
                let elem = document.getElementById('stage');
                window.TweenMax.to(elem, 0.5,
                    {height: 400, onComplete: this.go('host')});
            },
            go: function (route) {
                this.$route.router.go('/' + route);
            }
        }
    }
</script>
