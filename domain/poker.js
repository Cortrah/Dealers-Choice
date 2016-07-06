var PokerService, controller;

this.app = angular.module('poker', ['ngSanitize']);

this.app.service('PokerService', PokerService = (function() {
    PokerService.$inject = ['$rootScope'];

    function PokerService($rootScope) {
        this.$rootScope = $rootScope;
        this.connected = false;
    }

    PokerService.prototype.connect = function(playerName) {
        if (this.connected) {
            return;
        }
        this.socket = new WebSocket("ws://localhost:9293/?name=" + playerName);
        this.socket.onopen = (function(_this) {
            return function() {
                return _this.connected = true;
            };
        })(this);
        return this.socket.onmessage = (function(_this) {
            return function(mess) {
                return _this.handleMessage(mess);
            };
        })(this);
    };

    PokerService.prototype.sendCommand = function(message) {
        console.log("sending command:", message);
        return this.socket.send(JSON.stringify(message));
    };

    PokerService.prototype.handleMessage = function(message) {
        var json;
        if (message != null ? message.data : void 0) {
            json = JSON.parse(message.data);
            console.log("received message:", json);
            return this.$rootScope.$apply((function(_this) {
                return function() {
                    return _this.$rootScope.$broadcast(json["command"], json["data"]);
                };
            })(this));
        }
    };

    return PokerService;

})());

controller = function($scope, PokerService) {
    var betToMe, seatedPlayers;
    $scope.table = {};
    $scope.current_player = null;
    $scope.messages = [];
    $scope.connect = function() {
        return PokerService.connect($scope.myName);
    };
    $scope.seatClass = function(player) {
        if (player == null) {
            return "unoccupied";
        } else if (player.state === "active") {
            return "active";
        } else {
            return "";
        }
    };
    betToMe = function() {
        var ref;
        return ((ref = $scope.table) != null ? ref.to_call : void 0) !== 0;
    };
    $scope.callText = function() {
        if (betToMe()) {
            return "Call";
        } else {
            return "Check";
        }
    };
    $scope.betText = function() {
        if (betToMe()) {
            return "Raise";
        } else {
            return "Bet";
        }
    };
    $scope.handleBet = function() {
        var bet;
        bet = parseInt($scope.numChips);
        if (betToMe()) {
            bet += $scope.table.to_call;
        }
        $scope.sendCommand('bet', bet);
        return $scope.numChips = '';
    };
    $scope.playerHand = function(player) {
        if (player == null) {
            return [];
        }
        return player.cards;
    };
    $scope.cardTemplate = function(card) {
        var template;
        template = (card != null ? card.rank : void 0) || "back";
        return "/assets/cards/" + template + ".html";
    };
