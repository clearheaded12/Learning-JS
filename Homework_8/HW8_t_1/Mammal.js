import { Animal } from "./Animal.js";

class Mammal extends Animal {
  constructor(name, size, legs, eyes, sex, boobs, isPredator) {
    super(name, size, legs, eyes, isPredator),
      (this.sex = sex),
      (this.boobs = boobs);
  }
  lacation() {
    if (this.sex == `f`) {
      return `${this.name} lactates because it is a female`;
    } else {
      return `${this.name} doesn't lactate because it is a male`;
    }
  }
  boobs() {
    if (this.boobs > 2) {
      return `${this.name} is not a human`;
    } else {
      return `${this.name} is probably is a human`;
    }
  }
  walk() {
    console.log(super.walk());              // тут будет родительский метод
    if (this.legs == 0) {                   // а тут уже новый метод будет
      return `${this.name} swims`;
    } else {
      return `${this.name} walks or runs`;
    }
  }
}

const dolphin = new Mammal (`dolphin`, `XL`, 0, 2, `f`, 2)
console.log(dolphin);
console.log(dolphin.walk());