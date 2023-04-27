import CoffeeOrder from "./coffeeOrder.js"
import SandwichOrder from "./sandwichOrder.js"

//
let totalPrice = 0
let all = []
let coffeeOrder1 = new CoffeeOrder(1, "Latte", "small")
let coffeeOrder2 = new CoffeeOrder(2, "Cappuccino", "medium", "sweet")
let sandwichOrder1 = new SandwichOrder(1, 'salmon')

//v1 for price calculation
// /**
//  * @param {Array} allPrices 
//  * @returns totalPrice
//  */
// function calcTotalPrice(allPrices) {

//    for (let i in allPrices) {
//       totalPrice += allPrices[i]
//    }
//    return totalPrice
// }

//v2 for price calculation
function calcTotalPrice(allPrices){
   allPrices = all
   for (let i in allPrices) {
      totalPrice += allPrices[i]
   }
   return totalPrice
}

function addPrice(price) {
   
   all.push(price)
   return all
}


function showTotalPrice() {
   console.log(`Your total price is: $` + calcTotalPrice())
}

//OUTPUT
console.log(`${coffeeOrder1.coffeeName} is sweet: `+ coffeeOrder1.setSweet())
console.log(`${coffeeOrder2.coffeeName} is sweet : ` + coffeeOrder2.setSweet())
console.log('====================\n')

coffeeOrder1.showCoffeeRecipe()
coffeeOrder1.showCoffeePrice()
console.log('====================\n')

coffeeOrder2.showCoffeeRecipe()
coffeeOrder2.showCoffeePrice()
console.log('====================\n')

sandwichOrder1.showSandwichChoice()
sandwichOrder1.showSandwichIngredients() 
sandwichOrder1.showSandwichPrice()

console.log('====================\n')
coffeeOrder1.showCoffeePrice()
coffeeOrder2.showCoffeePrice()
sandwichOrder1.showSandwichPrice()

//v2
addPrice(5)
addPrice(7.5)
addPrice(15)

// //v1
//calcTotalPrice([coffeeOrder1.price, coffeeOrder2.price, sandwichOrder1.price])

showTotalPrice()



