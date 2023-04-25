//inheritance by prototyping

let coffeeCup = {
  name: "",
  water: "",
  cupSize: "",
};
console.log(coffeeCup);

//================================================
let coffeeCup2 = {
  milk: "",
  __proto__: coffeeCup,
};
console.log(coffeeCup2);
coffeeCup2.name = "Latte";
console.log(coffeeCup2.name);

// //================================================
let coffeeCup3 = {
  __proto__: coffeeCup2,
  makeCoffee: function () {
    console.log("Take a cup, put a coffee and a water in it");
  },
};
console.log(coffeeCup3);
coffeeCup3.name = "Mocha";
console.log(coffeeCup3.name);
coffeeCup3.makeCoffee();


