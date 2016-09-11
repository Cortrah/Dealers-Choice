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
                dogAvatars: [
                    { id: '1', name: 'Cavalier', img: '../static/dog1.png' },
                    { id: '2', name: 'Mini Schnauser', img: '../static/dog2.png' },
                    { id: '3', name: 'Boston Terrier', img: '../static/dog3.png' },
                    { id: '4', name: 'Border Collie', img: '../static/dog4.png' }
                ],
                botAvatars: [
                    { id: '1', name: 'Protobot', img: '../static/robot1.png' },
                    { id: '2', name: 'Streambot', img: '../static/robot2.png' },
                    { id: '3', name: 'Grammarbot', img: '../static/robot3.png' },
                    { id: '4', name: 'Lambdabot', img: '../static/robot4.png' }
                ],
                players: [
                    {
                        'name': 'Jim',
                        'dealer': true,
                        'host': false,
                        'avatar': 'static/dog1.png',
                        'bones': 100,
                        'betting': 60
                    },
                    {
                        'name': 'Whitey',
                        'dealer': false,
                        'host': false,
                        'avatar': 'static/robot1.png',
                        'bones': 200,
                        'betting': 0
                    },
                    {
                        'name': 'Dan',
                        'dealer': false,
                        'host': false,
                        'avatar': 'static/dog2.png',
                        'bones': 300,
                        'betting': 0
                    },
                    {
                        'name': 'Kyle',
                        'dealer': false,
                        'host': false,
                        'avatar': 'static/dog3.png',
                        'bones': 400,
                        'betting': 0
                    },
                    {
                        'name': 'Bob',
                        'dealer': false,
                        'host': false,
                        'avatar': 'static/robot2.png',
                        'bones': 100,
                        'betting': 0
                    },
                    {
                        'name': 'Cort',
                        'dealer': false,
                        'host': true,
                        'avatar': 'static/robot3.png',
                        'bones': 200,
                        'betting': 0
                    }
                ]
            };
        },
        methods: {
            // login () {
            //     this.loggedIn = true;
            //     this.bus.$emit('login-event');
            // },
            // logout () {
            //     this.loggedIn = false;
            //     this.bus.$emit('logout-event');
            // }
        }
    });

    export default {
        name: 'Home',
        http: {
          root: 'http://localhost:8080/'
        },
        created () {
            this.bus.$on('logout-event', this.logout);
            this.bus.$on('login-event', this.login);
        },
        data () {
            return {
                bus: bus,
                store: store,
                destination: ''
            }
        },
        components: {
            Splash
        },
        methods: {
            logout: function () {
                window.sessionStorage.setItem('authHeader', '');
                window.sessionStorage.setItem('sessionId', '');
                window.sessionStorage.setItem('sessionKey', '');
                this.gotoSplash();
            },
            login: function (credentials) {
                window.sessionStorage.setItem('authHeader', credentials.authHeader);
                window.sessionStorage.setItem('sessionId', credentials.sessionId);
                window.sessionStorage.setItem('sessionKey', credentials.sessionKey);
                this.gotoLobby();
            },
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

    .avatar {
        width: 100px;
        height: 100px
    }
</style>
