import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { LemonadeStand } from "./LemonadeStand.js";
const stand = new LemonadeStand(20);
// Weather
const temperature = 85;
// supply prices
const cupPrice = .10;
const icePrice = .05;
const lemonPrice = .25;
const sugarPrice = .15;
console.log("Today's temperature:", temperature);
console.log("Today's prices:");
console.log("Cups: $", cupPrice);
console.log("Ice: $:", icePrice);
console.log("Lemons: $", lemonPrice);
console.log("Sugar: $", sugarPrice);
const rl = readline.createInterface({ input, output });
const cups = Number(await rl.question("How many cups would you like to buy? "));
const ice = Number(await rl.question("How much ice would you like to buy? "));
const lemons = Number(await rl.question("How many lemons would you like to buy? "));
const sugar = Number(await rl.question("How much sugar would you like to buy? "));
stand.buySupplies(cups, ice, lemons, sugar, cupPrice, icePrice, lemonPrice, sugarPrice);
console.log("\nAfter purchasing supplies:");
console.log(stand);
rl.close();
