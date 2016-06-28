<template>
    <div id="tabletop">
        <p>
            go to the <a v-link="{ path: '/' }">splash page</a>
        </p>
        Join: <input v-model='newPlayerName' v-on:keyup.enter='addPlayer'>
        <br/>
        <br/>
        <template v-for='player in players'>
            <player v-bind:name="player.name" v-bind:bones="player.bones"></player>
        </template>
        <p id="pot">
            Pot: <span id="gogo" v-show="displayPot" transition="bounce">{{ potValue }}</span>
            <br/>
            <button v-on:click='updatePot(20)'>Update Pot</button>
        </p>
    </div>
</template>

<script type="text/babel">
    import Player from './Player'

    export default {
        el: function () {
            return '#tabletop';
        },
        components: {
            Player
        },
        data: function () {
            return {
                _cid: '1',
                displayPot: false,
                newPlayerName: '',
                currentPlayer: 0,
                players: [
                    {
                        'name': 'jo jo',
                        'avatar': '../assets/cav.png',
                        'bones': 300,
                        'betting': 60
                    },
                    {
                        'name': 'frankie',
                        'avatar': '../assets/cav.png',
                        'bones': 600,
                        'betting': 0
                    },
                    {
                        'name': 'digdug',
                        'avatar': '../assets/cav.png',
                        'bones': 500,
                        'betting': 0
                    }
                ]
            }
        },
        computed: {
            potValue: function () {
                var total = 0;
                for (var i = 0; i < this.players.length; i++) {
                    total = total + this.players[i].betting;
                }
                return total;
            }
        },
        events: {
            'check': function (name) {
            },
            'bet': function (name, bet) {
                this.players[this.currentPlayer].betting += parseInt(bet);
                this.displayPot = !this.displayPot;
            },
            'call': function (name, bet) {
                this.players[this.currentPlayer].betting += parseInt(bet);
                this.displayPot = !this.displayPot;
            },
            'raise': function (name, bet) {
                this.players[this.currentPlayer].betting += parseInt(bet);
                this.displayPot = !this.displayPot;
            },
            'fold': function (name) {
            }
        },
        methods: {
            updatePot: function (amt) {
                this.players[this.currentPlayer].betting += amt;
                this.displayPot = !this.displayPot;
            },
            addPlayer: function () {
                let playerName = this.newPlayerName.trim()
                if (playerName) {
                    this.players.push({
                        'name': playerName,
                        'avatar': '../assets/cav.png',
                        'bones': parseInt(Math.random() * 1000),
                        'betting': 0,
                    });
                    this.newPlayerText = '';
                }
            }
        }
    }
</script>

<style>

    #tabletop {
        display: inline-block;
        max-width: 600px;
        padding: 20px;
        font-family: Source Sans Pro, Helvetica, sans-serif;
        text-align: center;
        color: #2c3e50;
        background-color: #f5f5f5;
    }

    #tabletop a {
        color: #ee9f5e;
        text-decoration: none;
    }

    .pot {
        align-items: center;
        height: 100px;
    }

    .bounce-transition {
        display: inline-block;
    }

    .bounce-enter {
        -webkit-animation: bounce-in .5s;
        animation: bounce-in .5s;
    }

    .bounce-leave {
        -webkit-animation: bounce-out .5s;
        animation: bounce-out .5s;
    }

    @keyframes bounce-in {
        0% {
            -webkit-transform: scale(0);
            transform: scale(0);
        }
        50% {
            -webkit-transform: scale(1.5);
            transform: scale(1.5);
        }
        100% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }
    }

    @keyframes bounce-out {
        0% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }
        50% {
            -webkit-transform: scale(1.5);
            transform: scale(1.5);
        }
        100% {
            -webkit-transform: scale(0);
            transform: scale(0);
        }
    }

    @-webkit-keyframes bounce-in {
        0% {
            -webkit-transform: scale(0);
            transform: scale(0);
        }
        50% {
            -webkit-transform: scale(1.5);
            transform: scale(1.5);
        }
        100% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }
    }

    @-webkit-keyframes bounce-out {
        0% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }
        50% {
            -webkit-transform: scale(1.5);
            transform: scale(1.5);
        }
        100% {
            -webkit-transform: scale(0);
            transform: scale(0);
        }
    }

    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }

    @keyframes bounce-out {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(0);
        }
    }

</style>
