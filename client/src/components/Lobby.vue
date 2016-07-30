<template>
    <div id="stage">
        <p>
            back to the <a v-link="{ path: '/' }">splash page</a>
        </p>
        <h1>{{ title }}</h1>
        <h2>Games</h2>
        <ul id="gameList">
            <li v-for="game in games">
                {{ game.name }}
            </li>
        </ul>
        <h2>Players</h2>
        <ul id="playerList">
            <li v-for="player in players">
                {{ player.name }}
            </li>
        </ul>
        <h2>Discussion</h2>
        <textarea v-model="message" placeholder="many messages"></textarea>
        <br/>
        <input type="text" v-model="message" placeholder="my message">
        <br/>
        <button @click="createGame()"> Create a game </button>
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
                title: 'Lobby',
                games: [
                    { name: 'Foo' },
                    { name: 'Bar' }
                ],
                players: [
                    { name: 'Joe' },
                    { name: 'Ban' }
                ]
            }
        },
        methods: {
            createGame: function () {
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

<style>
    .logo {
        width: 151px;
        height: 185px
    }
</style>
