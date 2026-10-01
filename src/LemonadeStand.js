export class LemonadeStand {
    cash;
    cups;
    ice;
    lemons;
    sugar;
    constructor(startingCash) {
        this.cash = startingCash;
        this.cups = 0;
        this.ice = 0;
        this.lemons = 0;
        this.sugar = 0;
    }
    buySupplies(cups, ice, lemons, sugar, totalCost) {
        this.cups += cups;
        this.ice += ice;
        this.lemons += lemons;
        this.sugar += sugar;
        this.cash += totalCost;
    }
}
