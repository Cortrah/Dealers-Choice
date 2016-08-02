<template>
    <div id="stage">
        <p id="pot">
            Pot: <span id="gogo" v-show="displayPot" class='animated' transition="bounce">{{ potValue }}</span>
            <br/>
            <button @click='updatePot(20)'>Update Pot</button>
        </p>
        <template v-for='player in players'>
            <player :name="player.name"
                    :avatar="player.avatar"
                    :bones="player.bones"
                    :dealer="player.dealer">
            </player>
        </template>
    </div>
    <br/>
    <br/>
</template>

<script type="text/babel">
    import Player from './Player'

    export default {
        el: function () {
            return '#tabletop';
        },
        props: ['store'],
        components: {
            Player
        },
        data: function () {
            return {
                _cid: '1',
                displayPot: false,
                currentPlayer: 0,
                players: this.store.players
            }
        },
        computed: {
            potValue: function () {
                var total = 0;
                for (var i = 0; i < this.store.players.length; i++) {
                    total = total + this.store.players[i].betting;
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
            }
        }
    }
</script>

<style>
    #pot {
        align-items: center;
        height: 40px;
    }
</style>
