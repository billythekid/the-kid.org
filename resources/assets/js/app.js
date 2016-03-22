/**
 * Created by billythekid on 22/03/2016.
 */
new Vue({
    el: '#app',
    data: {
        contestants: [],
        folk: [],
        prizes: [],
        winners: [],
        won: false,
        limitPrizes: true
    },
    methods: {
        addContestant: function () {
            this.contestants.push(this.newContestant);
            this.newContestant = '';
        },
        removeContestant: function (index) {
            this.contestants.splice(index, 1);
        },
        addPrize: function () {
            for (var i = 0; i < this.prizeQuantity; i++) {
                var int = i + 1;
                this.prizes.push({name: this.newPrize});
            }
            this.newPrize = '';
            this.prizeQuantity = 1;
        },
        removePrize: function (index) {
            this.prizes.splice(index, 1);
        },
        pickWinners: function () {
            this.folk = Object.create(this.contestants);
            this.winners = [];
            shuffleArray(this.prizes).forEach(function (element) {
                var random = Math.floor(Math.random() * this.folk.length);
                var winner = this.folk[random] || "NO WINNER, BOO!";
                this.winners.push({
                    name: winner,
                    prize: element
                });
                if (this.limitPrizes) {
                    if (this.folk.length > 1) {
                        this.folk.splice(random, 1);
                    } else {
                        this.folk = [];
                    }
                }
            }, this);
        },
        clearWinners: function () {
            this.winners = [];
        }
    }
});

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}