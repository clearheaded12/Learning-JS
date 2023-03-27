// // Внедрите в свой код про кофе цикл, там, где это может понадобиться. Добавьте комментарии в код с пояснениями изменений, зачем они нужны.

// === my solution ===
// // declare all variables
// let coffeeAmount = 3; // количество кофе
// let waterAmount = 3; // количество воды
// let numberCoffeeCup = 0;
// let notEnoughCups = 0;

// for (let i = 0; i < 5; i++) {
//   // приготавливаем 5 чашек кофе
//   notEnoughCups++;
//   const coffeePerCup = 1;
//   const waterPerCup = 1;
//   let coffeeUsed = coffeePerCup;
//   let waterUsed = waterPerCup;
//   if (coffeeAmount >= coffeeUsed && waterAmount >= waterUsed) {
//     coffeeAmount -= coffeeUsed;
//     waterAmount -= waterUsed;
//     numberCoffeeCup++;
//     console.log(
//       `Enough ingredients for a cup of coffee! This is ${numberCoffeeCup} cup of coffee`
//     );
//   } else {
//     console.log(
//       `The ingredients are not enough for ${notEnoughCups} cups of coffee, unfortunately.`
//     );
//   }
// }

// let makeCoffeeMessage = `Now let's get started making your coffee!`;
// let cupSize;
// let smallCup = `small cup`;
// let mediumCup = `medium cup`;
// let largeCup = `large cup`;
// let water = `water`;
// let hotWater = `hot water`;
// let coldWater = `cold water`;
// let totalPrice = 5;
// let priceToppingSugar = false;
// let coffeeType;
// let Latte = `Latte`;
// let icedCoffee = `Iced Coffee`;
// let waterVolume;

// // make a choice
// coffeeType = Latte;
// cupSize = largeCup;

// // set recipe ingredients
// if (coffeeType == icedCoffee) {
//   water = coldWater;
// } else {
//   water == hotWater;
// }

// if (cupSize == smallCup) {
//   waterVolume = `150 ml`;
//   if (priceToppingSugar == true) {
//     totalPrice += 1;
//   }
//   // console.log(cupSize + `- ` + price + `$`)
// } else if (cupSize == mediumCup) {
//   waterVolume = `200 ml`;
//   totalPrice *= 1.5;
//   if (priceToppingSugar == true) {
//     totalPrice += 1;
//   }
//   // console.log(cupSize + `- ` + price + `$`)
// } else if (cupSize == largeCup) {
//   waterVolume = `300 ml`;
//   totalPrice *= 2;
//   if (priceToppingSugar == true) {
//     totalPrice += 1;
//   }
//   // console.log(cupSize + `- ` + price + `$`)
// }

// // steps for coffee recipe
// let order = `You choosed a ${cupSize} of ${coffeeType}\n Follow the steps: `;
// let step1 = `1. Take a ${cupSize}`;
// let step2 = `2. Put 1 spoon of coffee in it`;
// let step3 = `3. Pour ${waterVolume} of ${water} in a cup`;
// let step4 = `4. Pour 20 ml of milk in a cup of coffee`;
// let step5 = `5. Stir coffee in a cup with a spoon`;
// let orderPrice = `The order price is ${totalPrice}$`;
// let result = `Enjoy your coffee!`;

// // document.write(
// //   order + step1 + `<br>`,
// //   step1 + `<br>`,
// //   step3 + `<br>`,
// //   step4 + `<br>`,
// //   step5 + `<br>` + `<br>` + orderPrice`<br>` + result
// // );

// console.log(
//   `\n` + makeCoffeeMessage + `\n`,
//   order + `\n`,
//   step1 + `\n`,
//   step2 + `\n`,
//   step3 + `\n`,
//   step4 + `\n`,
//   step5 + `\n` + `\n` + orderPrice + `\n` + result
// );