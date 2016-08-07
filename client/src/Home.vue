<template>
    <div id="home">
        <div id="header" class="pure-menu pure-menu-horizontal pure-menu-scrollable">
            <a href="#" class="pure-menu-link pure-menu-heading" v-link="{ path: '/' }">Home</a>
            <ul class="pure-menu-list">
                <span v-if="!this.store.loggedIn">
                    <li class="pure-menu-item"><a href="#" v-link="{ path: 'register' }" class="pure-menu-link">Register</a></li>
                    <li class="pure-menu-item"><a href="#" v-link="{ path: 'login' }" class="pure-menu-link">Sign In</a></li>
                </span>
                <span v-else>
                    <li class="pure-menu-item"><a href="#" v-link="{ path: 'lobby' }" class="pure-menu-link">Lobby</a></li>
                    <li class="pure-menu-item"><a href="#" v-link="{ path: 'profile' }" class="pure-menu-link">Profile</a></li>
                    <li class="pure-menu-item" @click="this.store.logout()"><a href="#" class="pure-menu-link">Sign Out</a></li>
                </span>
            </ul>
        </div>

        <div id="stage">
            <router-view :store="store"></router-view>
        </div>
    </div>
</template>

<script type="text/babel">
    import Splash from './components/Splash'
    import Vue from 'vue'

    let bus = new Vue();

    let store = new Vue({
        data () {
            return {
                bus: bus,
                loggedIn: false,
                players: [
                    {
                        'name': 'Jim',
                        'dealer': true,
                        'host': false,
                        'avatar': '../assets/dog1.png',
                        'bones': 400,
                        'betting': 60
                    },
                    {
                        'name': 'Whitey',
                        'dealer': false,
                        'host': false,
                        'avatar': '../assets/robot1.png',
                        'bones': 400,
                        'betting': 0
                    },
                    {
                        'name': 'Dan',
                        'dealer': false,
                        'host': false,
                        'avatar': '../assets/dog2.png',
                        'bones': 400,
                        'betting': 0
                    },
                    {
                        'name': 'Kyle',
                        'dealer': false,
                        'host': false,
                        'avatar': '../assets/dog3.png',
                        'bones': 400,
                        'betting': 0
                    },
                    {
                        'name': 'Bob',
                        'dealer': false,
                        'host': false,
                        'avatar': '../assets/robot2.png',
                        'bones': 400,
                        'betting': 0
                    },
                    {
                        'name': 'Cort',
                        'dealer': false,
                        'host': true,
                        'avatar': '../assets/robot3.png',
                        'bones': 400,
                        'betting': 0
                    }
                ]
            };
        },
        methods: {
            login () {
                this.loggedIn = true;
            },
            logout () {
                this.loggedIn = false;
                this.bus.$emit('logout-event');
            },
//            addPlayer: function () {
//                let playerName = this.newPlayerName.trim()
//                if (playerName) {
//                    this.players.push({
//                        'name': playerName,
//                        'dealer': false,
//                        'avatar': '../assets/cav.png',
//                        'bones': parseInt(Math.random() * 1000),
//                        'betting': 0,
//                    });
//                    this.newPlayerText = '';
//                }
//            }
        }
    });

    export default {
        name: 'Home',
        created () {
            this.bus.$on('logout-event', this.gotoSplash)
        },
        data () {
            return {
                bus: bus,
                store: store,
                destination: '',
            }
        },
        components: {
            Splash
        },
        methods: {
            gotoSplash: function () {
                let elem = document.getElementById('stage');
                this.destination = 'home';
                window.TweenMax.to(elem, 0.5,
                    {height: 300, onComplete: this.nav});
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
        display: flex;
        align-items: center;
        justify-content: center;
        background-image: url('./assets/paw_print.jpg');
    }

    #header {
        position:absolute;
        top:0px;
        left:0px;
        width: 100%;
        background-color: #f5f5f5;
    }

    #stage {
        font-family: Source Sans Pro, Helvetica, sans-serif;
        align-items: left;
        margin: 20px;
        color: #2c3e50;
        background-color: #f5f5f5;
    }

    #main a {
        color: #42b983;
        text-decoration: none;
    }
</style>
