// // Создайте объект.
// // Подумайте где будет храниться информация по сэндвичу и выведите ее в консоль( начинка, цена, хлеб, сыр …). Подумайте, возможно ли хранить данные на все виды сэндвичей в одном объекте или в разных, что более удобно в дальнейшем использовании.

// // Nalya solution

// let bread = `black bread`;
// let cheese = `Swiss cheese`;
// let turkey = `smoked turkey`;
// let salmon = `wild salmon`;
// let pepperoni = `pepperoni`;

// const turkeySandwich = {
//   name: `sandwich with turkey`,
//   bread: `black`,
//   cheese: `swiss`,
//   tooping: `turkey`,
// };
// const pepperoniSandwich = {
//   name: `sandwich with pepperoni`,
//   bread: `white`,
//   cheese: `mozarella`,
//   tooping: `pepperoni`,
// };
// const salmonSandwich = {
//   name: `sandwich with salmon`,
//   bread: `whole weat`,
//   cheese: `cheddar`,
//   tooping: `salmon`,
// };

// const sandwichNames = {
//   salmon: `sandwich with salmon`,
//   turkey: `sandwich with turkey`,
//   pepperoni: `sandwich with pepperoni`,
// };

// function showSandwichIngridients(topping) {
//   console.log(`Ingridients for your ${sandwichNames[topping]}\n`);
//   if (topping == `salmon`) {
//     for (let el in salmonSandwich) {
//       if (el == `name`) continue;
//       console.log(el + ` : ` + salmonSandwich[el]);
//     }
//   } else if (topping == `pepperoni`) {
//     for (let el in pepperoniSandwich) {
//       if (el == `name`) continue;
//       console.log(el + ` : ` + pepperoniSandwich[el]);
//     }
//   } else if (topping == `turkey`) {
//     for (let el in turkeySandwich) {
//       if (el == `name`) continue;
//       console.log(el + ` : ` + turkeySandwich[el]);
//     }
//   }
// }

// showSandwichIngridients(`turkey`);

// let price = 10;

// function setPrice(topping) {
//   if (topping == salmon) {
//     console.log(`Order price is: $` + price * 1.5);
//   } else {
//     console.log(`Order price is $` + price);
//   }
// }

// setPrice(turkey);
