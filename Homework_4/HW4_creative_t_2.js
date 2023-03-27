// 2. Продумайте на будущее план развития своего кода с кофе, где в реальной жизни он мог бы быть использован. Начните создавать мини-документацию к своему проекту. Пропишите требования так, как вы хотели бы их видеть на своем проекте и чтобы посторонний человек мог в них разобраться. Скорее всего, что-то придется добавить или изменить позже.
// Очень полезно, если вы сможете работать парами и проверять друг у друга.
// (это вам поможет впоследствии писать тест кейсы, тестировать документацию и требования)

// ======
// Сюда бы я мог добавить свое решение, но добавил решение Нали для того чтобы в дальнейшем легче было писать документацию. И пример у нее хороший.

// === Requirements for Coffee ===
// 1. When user first come he should see a welcome message
// 2. There are three types of cup sizes
// 3. User should be able to see cup prices for each size before an  order
// 4. There are two recipes at this time, we should able to update code if added new recipe
// 5. Show to a user the name and the  ingredients of each type of coffee before an order
// 6. User should be able to make an order, by choosing cup size and coffee type
// 7. When a choice is made, calculate the totalPice based on cup size. Show steps for the recipe and order totalPice.
// 8. If user is lactose free, remove milk step from the recipe

// Details: totalPice, names of coffee, ingredients, cup sizes, recipe, welcome message details or text, final message,do we have confirm option,  payment method, how to calc totalPice, business type, recipe for lactose free option, what milk choice do we have?, sugar Is or Not,

let cupSize;
let smallCup = `small cup`;
let mediumCup = `medium cup`;
let largeCup = `large cup`;
let water = `water`;
let hotWater = `hot water`;
let coldWater = `cold water`;
let totalPrice = 5;
let priceToppingSugar = false;
let coffeeType;
let latte = `Latte`;
let icedCoffee = `Iced Coffee`;
let beansArabica = `Arabica ground beans`;
let beansEthiopian = `Ethiopian ground beans`;

// Welcome message
// showWelcomeMessage
function showWelcomeMessage() {
  console.log(`Welcome to our self-service cafe!`);
  console.log(`We have different cup sizes. Please choose one:\n`);
}
showWelcomeMessage()

// Show cup sizes and their prices
let cupSizes = [smallCup, mediumCup, largeCup];
for (i in cupSizes) {
  if (cupSizes[i] == smallCup) {
    console.log(cupSizes[i] + ` - ` + totalPrice + `$`);
  } else if (cupSizes == mediumCup) {
    totalPrice * 0.5;
    console.log(cupSizes[i] + ` - ` + totalPrice + `$`);
  } else if (cupSizes == largeCup) {
    totalPrice * 2;
    console.log(cupSizes[i] + ` - ` + totalPrice + `$`);
  }
  if (i == cupSizes.length - 1) {
    console.log(`\n`);
  }
}

// Show coffee types with ingredients
let latteIngredients = `${latte}:\n 1 spoon of ${beansArabica} \n ${hotWater} \n milk \n`;
let icedCoffeeIngredients = `${icedCoffee}: \n 1 spoon of ${beansEthiopian} \n ${coldWater} \n milk \n`;

console.log(`We have following coffee types: \n`);
let menu = [latteIngredients, icedCoffeeIngredients];

for (let i = 0; i < menu.length; i++) {
  console.log(menu[i]);
}

// Make a choice
coffeeType = latte;
cupSize = mediumCup;

if (coffeeType == icedCoffee) {
  water = coldWater;
} else {
  water = hotWater;
}

if (cupSize == smallCup) {
  // waterVolume = `150 ml`;
  if (priceToppingSugar == true) {
    totalPrice += 1;
  }
} else if (cupSize == mediumCup) {
  // waterVolume = `200 ml`;
  totalPrice *= 1.5;
  if (priceToppingSugar == true) {
    totalPrice += 1;
  }
} else if (cupSize == largeCup) {
  // waterVolume = `300 ml`;
  totalPrice *= 2;
  if (priceToppingSugar == true) {
    totalPrice += 1;
  }
}

// Output for client
let order = `You choosed a ${cupSize} of ${coffeeType}\n Follow the steps: `;
let step1 = `1. Take a ${cupSize}`;
let step2 = `2. Put 1 spoon of coffee in it`;
let step3 = `3. Pour ${water} in a cup with coffee`;
let step4 = `4. Pour milk in a cup of coffee`;
let step5 = `5. Stir coffee in a cup with a spoon`;
let orderPrice = `The order price is ${totalPrice}$`;
let result = `Enjoy your coffee!`;

// Add steps to recipe
let recipe = [step1, step2, step3, step4, step5];
let clientRecipe = "";
let isLactoseFree = true;
for (let i = 0; i < recipe.length; i++) {
  if (isLactoseFree == true && recipe[i] == step4) {
    continue;
  }
  clientRecipe += recipe[i] + `\n`;
}
console.log(order + `\n` + clientRecipe + `\n` + orderPrice + `\n` + result);
