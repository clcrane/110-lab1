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
        cupPrice: number,
        icePrice: number,
        lemonPrice: number,
        sugarPrice: number
    ): void {
        const totalCost =
            cups * cupPrice +
            ice * icePrice +
            lemons * lemonPrice +
            sugar * sugarPrice;

        this.cups += cups;
        this.ice += ice;
        this.lemons += lemons;
        this.sugar += sugar;

        this.cash -= totalCost;
    }

    sellLemonade(temperature: number): number {
        let cupsSold = 0;

        if (temperature >= 90) {
            cupsSold = 10;
        }
        else if (temperature >= 80) {
            cupsSold = 7;
        }
        else if (temperature >= 70) {
            cupsSold = 5;
        }
        else {
            cupsSold = 3;
        }

        cupsSold = Math.min(
            cupsSold,
            this.cups,
            this.ice,
            this.lemons,
            this.sugar
        );

        this.cups -= cupsSold;
        this.ice -= cupsSold;
        this.lemons -= cupsSold;
        this.sugar -= cupsSold;

        this.cash += cupsSold;

        return cupsSold;
    }
}