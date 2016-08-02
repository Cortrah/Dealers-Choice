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
        <h2>Players</h2>
        <ul id="playerList">
            <li v-for="player in players">
                {{ player.name }}
            </li>
        </ul>
        <h2>Discussion</h2>
        <textarea v-model="discussion" placeholder="discussion"></textarea>
        <br/>
        <input type="text" v-model="message" placeholder="my message">
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
                displayGogo: true,
                title: 'Lobby',
                discussion: '',
                message: '',
                games: [
                    { name: 'Cort\'s Table' }
                ],
                players: this.store.players
            }
        },
        methods: {
            joinGame: function () {
                // this.$children;
                let elem = document.getElementById('stage');
                window.TweenMax.to(elem, 0.5,
                    {height: 600, onComplete: this.go('tabletop')});
            },
            hostGame: function () {
                // this.$children;
                let elem = document.getElementById('stage');
                window.TweenMax.to(elem, 0.5,
                    {height: 600, onComplete: this.go('host')});
            },
            go: function (route) {
                this.$route.router.go('/' + route);
            }
        }
    }
</script>

<style>
    .logo {
        width: 151px;
        height: 185px
    }
</style>
