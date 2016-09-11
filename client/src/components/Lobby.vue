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
        <button @click="getUsers()"
                class="pure-button pure-button-primary">
            get users
        </button>
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
            },
            getUsers: function () {
                this.$http.get('/hapi/api/accounts', {
                    headers: {
                        username: window.sessionStorage.getItem('sessionId'),
                        password: window.sessionStorage.getItem('sessionKey'),
                        authorization: window.sessionStorage.getItem('authHeader'),
                    }
                }).then(
                    (response) => {
                        console.log(response);
                    }, (response) => {
                        console.log(response);
                    });
            }
        }
    }
</script>
