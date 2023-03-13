// 2.1 Напишите следующую программу:
// - У клиента должен быть выбор из трех видов кофе.
// - Дайте названия вашим видам кофе.
// - Установите цену на кофе в зависимости от величины стаканчика( small, medium, big).
// - Выведите на экран название, затем рецепт выбранного кофе (используйте переменные для изменения рецепта и названия) и его стоимость (в зависимости от размера стаканчика).
// - Компоненты кофе не влияют на стоимость.
// - Используйте подходящую комбинацию условий if, (else if), else для решения задачи.

// My solution

// type of coffee
// let coffeeAmericano = `Americano`;
// let coffeLatte = `Latte`;
// let coffeeEspresso = `Espresso`;

// // coffee ingredients
// let coffee = `Coffee beans`;
// let water = `Warm water`;
// let milk = `Fat milk`;
// let sugar = `Sugar to taste`;

// // recipes в виде object
// let resipeAmericano = {
//   step1: `1. Pour in ${coffee}`,
//   step2: `2. Pour ${water}`,
//   step3: `3. Add some ${milk}`,
//   step4: `4. Add ${sugar}`,
//   result: `Your ${coffeeAmericano} is ready`,
// };
// let resipeLatte = {
//   step1: `1. Pour in ${coffee}`,
//   step2: `2. Pour ${water}`,
//   step3: `3. Add some ${milk}`,
//   step4: `4. Add ${sugar}`,
//   result: `Your ${coffeLatte} is ready`,
// };
// let resipeEspresso = {
//   step1: `1. Pour in ${coffee}`,
//   step2: `2. Pour ${water}`,
//   step3: `3. Add some ${milk}`,
//   step4: `4. Add ${sugar}`,
//   result: `Your ${coffeeEspresso} is ready`,
// };

// // cup size
// let cupSmall = `small`;
// let cupMedium = `medium`;
// let cupLarge = `large`;

// // cup price
// let cupSmallPrice = 50;
// let cupMediumPrice = 100;
// let cupLargePrice = 150;

// let whatCoffee = prompt(
//   `What type of coffee do you need? We have ${coffeeAmericano}, ${coffeLatte}, ${coffeeEspresso}.`
// );
// let whatCupCoffee = prompt(
//   `What cup of coffee do you want? You can choose between ${cupSmall}($${cupSmallPrice}), ${cupMedium}($${cupMediumPrice}) and ${cupLarge}($${cupLargePrice}) cups.`
// );

// if (
//   (whatCoffee = coffeeAmericano) &&
//   (whatCupCoffee = cupSmall || cupMedium || cupLarge)
// ) {
//   console.log(
//     `Your ${whatCoffee} is in a ${whatCupCoffee} cup. The picipe of this coffee: ${resipeAmericano}`
//   );
// } else if (
//   (whatCoffee = coffeLatte) &&
//   (whatCupCoffee = cupSmall || cupMedium || cupLarge)
// ) {
//   console.log(
//     `Your ${whatCoffee} is in a ${whatCupCoffee} cup. The picipe of this coffee: ${resipeLatte}`
//   );
// } else if (
//   (whatCoffee = coffeeEspresso) &&
//   (whatCupCoffee = cupSmall || cupMedium || cupLarge)
// ) {
//   console.log(
//     `Your ${whatCoffee} is in a ${whatCupCoffee} cup. The picipe of this coffee: ${resipeEspresso}`
//   );
// } else {
//   console.log(
//     `Please refresh the page and fill in the data from the options provided again.`
//   );
// }

// Nalya solution

// declare all variables
let cupSize;
let smallCup = `small cup`;
let mediumCup = `medium cup`;
let largeCup = `large cup`;
let water;
let hotWater = `hot water`;
let coldWater = `cold water`;
let price = 5;
let coffeeType;
let Latte = `Latte`;
let icedCoffee = `Iced Coffee`;
let waterVolume;

// make a choice
coffeeType = Latte;
cupSize = mediumCup;

// set recipe ingredients
if (coffeeType == icedCoffee) {
  water = coldWater;
} else {
  water == hotWater;
}

if (cupSize == smallCup) {
  waterVolume = `150 ml`;
  // console.log(cupSize + `- ` + price + `$`)
} else if (cupSize == mediumCup) {
  waterVolume = `200 ml`;
  price *= 1.5;
  // console.log(cupSize + `- ` + price + `$`)
} else if (cupSize == largeCup) {
  waterVolume = `300 ml`;
  price *= 2;
  // console.log(cupSize + `- ` + price + `$`)
}

// steps for coffee recipe
let order = `You choosed a ${cupSize} of ${coffeeType}\n Follow the steps: `;
let step1 = `1. Take a ${cupSize}`;
let step2 = `2. Put 1 spoon of coffee in it`;
let step3 = `3. Pour ${waterVolume} of ${water} in a cup`;
let step4 = `4. Pour 20 ml of milk in a cup of coffee`;
let step5 = `5. Stir coffee in a cup with a spoon`;
let orderPrice = `The order price is ${price}$`;
let result = `Enjoy your coffee!`;

// document.write(
//   order + step1 + `<br>`,
//   step1 + `<br>`,
//   step3 + `<br>`,
//   step4 + `<br>`,
//   step5 + `<br>` + `<br>` + orderPrice`<br>` + result
// );

console.log(
  order + `\n`,
  step1 + `\n`,
  step2 + `\n`,
  step3 + `\n`,
  step4 + `\n`,
  step5 + `\n` + `\n` + orderPrice + `\n` + result
);
