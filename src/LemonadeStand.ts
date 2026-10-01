export class LemonadeStand{
    cash: number;
    cups: number;
    ice: number;
    lemons: number;
    sugar: number;

    constructor(startingCash: number){
        this.cash = startingCash;
        this.cups = 0;
        this.ice = 0;
        this.lemons = 0;
        this.sugar = 0;
    }

    buySupplies(
        cups: number,
        ice: number,
        lemons: number,
        sugar: number,
        totalCost: number
    ): void{
        this.cups += cups;
        this.ice += ice;
        this.lemons += lemons;
        this.sugar += sugar;
        this.cash += totalCost;
    }
}