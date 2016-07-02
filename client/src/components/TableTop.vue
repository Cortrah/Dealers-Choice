<template>
    <div id="stage">
        <p>
            go to the <a v-link="{ path: '/' }">splash page</a>
        </p>
        Join: <input v-model='newPlayerName' @keyup.enter='addPlayer'>
        <br/>
        <br/>
        <template v-for='player in players'>
            <player :name="player.name"
                    :avatar="player.avatar"
                    :bones="player.bones"
                    :dealer="player.dealer">
            </player>
        </template>
        <p id="pot">
            Pot: <span id="gogo" v-show="displayPot" class='animated' transition="bounce">{{ potValue }}</span>
            <br/>
            <button @click='updatePot(20)'>Update Pot</button>
        </p>
    </div>
</template>

<script type="text/babel">
    import Player from './Player'
    import Vue from 'vue'

    Vue.transition('bouncey', {
        enterClass: 'bounceIn',
        leaveClass: 'bounceOut'
    });

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
                        'dealer': true,
                        'avatar': '../assets/cav.png',
                        'bones': 300,
                        'betting': 60
                    },
                    {
                        'name': 'frankie',
                        'dealer': false,
                        'avatar': '../assets/cav.png',
                        'bones': 600,
                        'betting': 0
                    },
                    {
                        'name': 'digdug',
                        'dealer': false,
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
                        'dealer': false,
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
    #pot {
        align-items: center;
        height: 100px;
    }
</style>
