/**
 * Created by billythekid on 22/03/2016.
 */
new Vue({
    el: '#app',
    data: {
        contestants: [],
        prizes: [],
        winners: [],
        won: false
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
            this.winners = [];
            this.prizes.forEach(function (element) {
                this.winners.push({
                    name: this.contestants[Math.floor(Math.random() * this.contestants.length)],
                    prize: element
                });
            }, this);
        }

    }
});