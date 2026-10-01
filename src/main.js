import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { LemonadeStand } from "./LemonadeStand.js";
const stand = new LemonadeStand(20);
// Weather
const temperature = Math.floor(Math.random() * 41) + 60;
// supply prices
const cupPrice = Math.random() * 0.10 + 0.05;
const icePrice = Math.random() * 0.05 + 0.05;
const lemonPrice = Math.random() * 0.20 + 0.15;
const sugarPrice = Math.random() * 0.10 + 0.10;
console.log("Today's temperature:", temperature);
console.log("Today's prices:");
console.log("Cups: $" + cupPrice.toFixed(2));
console.log("Ice: $" + icePrice.toFixed(2));
console.log("Lemons: $" + lemonPrice.toFixed(2));
console.log("Sugar: $" + sugarPrice.toFixed(2));
const cupsSold = stand.sellLemonade(temperature);
console.log("Cups sold: " + cupsSold);
const rl = readline.createInterface({ input, output });
const cups = Number(await rl.question("How many cups would you like to buy? "));
const ice = Number(await rl.question("How much ice would you like to buy? "));
const lemons = Number(await rl.question("How many lemons would you like to buy? "));
const sugar = Number(await rl.question("How much sugar would you like to buy? "));
stand.buySupplies(cups, ice, lemons, sugar, cupPrice, icePrice, lemonPrice, sugarPrice);
console.log("\nAfter purchasing supplies:");
console.log(stand);
rl.close();
