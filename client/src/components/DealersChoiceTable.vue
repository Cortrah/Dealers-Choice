<template>
    <div id="stage">
        <p id="pot">
            Pot:
                <span id="gogo" v-show="displayPot" class='animated' transition="bounce">
                    {{ potValue }}
                </span>
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
    import Vue from 'vue'

    let Table = Vue.extend({
        data () {
            return {
                id: Math.random(30).toString(),
                name: 'SuperTable',
                description: 'Dealers Choice Poker',
                hostId: 0,
                bankerId: 0,
                games: [
                    {
                        'name': 'Five Card Bluff',
                        'states': [ 'ANTE', 'DEAL5', 'BETTING', 'SHOWDOWN', 'PAYOUT' ],
                        'currentState': 'ANTE',
                        'maxRaises': 3,
                        'maxAmount': 'DOUBLE_ANTE'
                    },
                    {
                        'name': 'Five Card Draw',
                        'states': [ 'ANTE', 'DEAL5', 'BETTING', 'DRAW3', 'SHOWDOWN', 'PAYOUT' ],
                        'currentState': 'ANTE',
                        'maxRaises': 3,
                        'maxAmount': 'DOUBLE_ANTE'
                    }
                ],
                dealerId: 0,
                states: [ 'INVITING_PLAYERS', 'SELECT_DEALER', 'DEALER_CHOOSING', 'GAME_IN_PLAY', 'ROTATE_DEALER' ],
                currentState: 'INVITING_PLAYERS',
                currentGameId: 0,
                pot: 0,
                totalMatch: 0,
                raiseCount: 0,
                currentPlayerId: 0,
                possibleActions: [],
                players: []
            };
        },
        methods: {
            addPlayer (playerName) {
                this.players.push(
                    {
                        'name': playerName,
                        'dealer': false,
                        'host': false,
                        'avatar': 'static/dog1.png',
                        'bones': 100,
                        'betting': 0
                    }
                );
            }
        }
    });

    export default Table
</script>
