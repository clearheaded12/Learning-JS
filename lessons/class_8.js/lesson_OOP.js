// 8. (04/11) ООП в JS (Nalya Sh)

// https://www.youtube.com/watch?v=IM1q5Cogxcw&list=PL6Gtav8N4O7iYmUm6wBjJd8EJ2KFXMPIH&index=41

/**
 * There are two types of OOP languages:

1. Class-Based languages like JAVA, C++.
2. Prototype-Based languages like JavaScript.
 */

//Show oop presentation in Miro

//1. We can create an object by Object Literal  => look at scriptProto.js
//2. We can create an object by using a constructor function => look at constractorFunction.js
//3. We can create an object by using new and class keywords

// Object.create() one of examples how to create an object, but we are not going to consider it here

// Defining class using ES6
/**
 * JavaScript ES6 (also known as ECMAScript 2015 or ECMAScript 6) is the newer version of JavaScript that was introduced in 2015. ECMAScript is the standard that JavaScript programming language uses. 
//  */
class Animal {
  constructor(name, eyes) {
    this.name = name; //this refers to current object
    this.eyes = eyes;
  }
  getName() {
    return `The name of the animal is ${this.name}.`;
  }
  canEat() {
    console.log(`This animal can eat`);
  }
}
// // Making object with the help of the constructor
// let animal1 = new Animal("tiger");
// let animal2 = new Animal('salmon', "blue");

// console.log(animal1.name);
// console.log(animal1.getName())
// console.log(animal1.eyes)
// animal1.eyes = "yellow"
// console.log(animal1.eyes);
// animal2.canEat()
// console.log("===========================================")

class Mammals extends Animal {
  //ovberrides cunstructor
  constructor(name, eyes, skin, legs, claws) {
    //animal nails
    super(name, eyes);
    this.skin = skin;
    this.legs = legs;
    this.claws = claws;
  }
  canEat() {
    console.log(`This animal can eat milk.`);
  }
  showBodyParts() {
    console.log(
      `${this.name} has ${this.legs} legs, ${this.skin} and ${this.claws} claws.`
    );
  }
}
let mammal1 = new Mammals("cat", "green", "fur", 4, "sharp");
console.log(mammal1.name.toUpperCase());
console.log(mammal1.getName());
console.log(mammal1.eyes);
mammal1.canEat();
mammal1.showBodyParts();

// let mammal2 = new Mammals()
// mammal2.name = "cow"
// console.log(mammal2.skin)
// console.log(mammal2.getName())

// // console.log("===========================================")

// // parent class===================================
class Person {
  //sets properties
  constructor(name) {
    this.name = name;
    this.occupation = "unemployed"; // deafault value
  }
  //method
  greet() {
    console.log(`Hello ${this.name}`);
  }
}

let person = new Person("Peter");
person.greet();
person.occupation = "QA";
console.log(person.occupation);

console.log("=======================================");

// inheriting parent class
class Student extends Person {
  constructor(name) {
    console.log("Creating student class");
    // call the super class constructor and pass in the name parameter
    super(name);
    // Overriding an occupation property
    this.occupation = "Student"; // если не указать это свойство оно подтянется от родителя
  }
  // overriding Person's method
  greet() {
    console.log(`Hello student ${this.name}.`);
    console.log("occupation: " + this.occupation);
  }
}

let student = new Student("Jack");
student.greet();
console.log(student.occupation);

// //show export and import via sandwich and sandwichClass files
