<template>
    <div id="stage">
        <img class="logo" src="../assets/cav.png">
        <div class="splash">
            <h1>{{ msg }} {{ count }} </h1>
        </div>
        <div v-if="!loggedIn">
            <p>
                please feel free to either <a v-link="{ path: 'register' }">register</a>
            </p>
            <p>
                or <a v-link="{ path: 'login' }">log in</a>
            </p>
        </div>
        <div v-else>
            <p>
                go to the <a v-link="{ path: 'lobby' }">lobby</a>
            </p>
            <p>
                or <a v-link="{ path: 'logout' }">sign out</a>
            </p>
        </div>
    </div>
</template>

<script type="text/babel">

    export default {
        props: ['count', 'thing'],
        el: function () {
            return '#thingie' + parseInt(Math.rand() * 10000).toString()
        },
        data () {
            return {
                loggedIn: false,
                msg: 'Casual Card Table',
                inputMessage: 'ok',
                currentView: 'aList',
                players: [
                    { name: 'guy' },
                    { name: 'smiley' }
                ]
            }
        },
        methods: {
            addPlayer: function (name) {
                this.players.push({'name': name});
                this.currentView = 'baab';
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
