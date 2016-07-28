<template>
    <div id="stage">
        <img class="logo" src="../assets/cav.png">
        <div class="splash">
            <h1>{{ msg }}</h1>
        </div>
        <div v-if="!loggedIn">
            <p>
                please feel free to either <a v-link="{ path: 'register' }">register</a>
            </p>
            <p>
                or <a v-link="{ path: 'login' }">signin</a>
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

        <div id="thingie">
            <component :is="currentView"></component> {{ thing }}
            <ul id="aList">
                <p>{{ message }} {{ players.length }}</p>
                <input v-model="inputMessage">{{ count }}
                <button @click="addPlayer(inputMessage)">Greet</button>
                <li v-for="player in players">
                    {{ player.name }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script type="text/babel">
    import Vue from 'vue'

    // creating the constructors
    let MyComponentA = Vue.extend({
        template: '<div>{{ guy }} custom component with a !</div>',
        data: function () {
            return {
                guy: 'A'
            }
        },
        el: function () {
            return parseInt(Math.rand() * 10000).toString()
        }
    })

    let MyComponentB = Vue.extend({
        template: '<div>{{ guy }} custom component!</div>',
        data: function () {
            return {
                guy: 'B'
            }
        }
    })

    // globally registering the constructors with a tag name
    Vue.component('aList', MyComponentA);
    Vue.component('baab', MyComponentB);

    Vue.transition('flipy', {
        enterClass: 'flipInX',
        leaveClass: 'flipOutX'
    });

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
