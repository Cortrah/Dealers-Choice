'use strict';


module.exports = class DealersChoiceTable {


  constructor (name, hostId = 0, bankerId = 0) {
    this.name = name;
    this.description = 'Dealers Choice Poker';
    this.hostId = hostId;
    this.bankerId = bankerId;
    this.games = [
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
    ];
    this.dealerId = 0;
    this.states = [ 'INVITING_PLAYERS', 'SELECT_DEALER', 'DEALER_CHOOSING', 'GAME_IN_PLAY', 'ROTATE_DEALER' ];
    this.currentState = 'INVITING_PLAYERS';
    this.currentGameId = 0;
    this.pot = 0;
    this.totalMatch = 0;
    this.raiseCount = 0;
    this.currentPlayerId = 0;
    this.possibleActions = [];
    this.players = [];
  };
};
