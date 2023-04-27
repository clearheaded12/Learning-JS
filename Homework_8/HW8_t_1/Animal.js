// 2 вариант но немного другое. Это от Егения

export class Animal {
  constructor(name, size, legs, eyes, isPredator = true) {
    (this.name = name),
      (this.size = size),
      (this.legs = legs),
      (this.eyes = eyes);
    this.isPredator = isPredator;
  }
  eat() {
    if (!this.isPredator) {
      return `${this.name} doesn't eat meat`;
    } else {
      return `${this.name} eats meat`;
    }
  }
  walk() {
    if (this.legs >= 2) {
      return `${this.name} with ${this.legs} legs can walk`;
    } else {
      return `${this.name} with ${this.legs} legs cannot walk`;
    }
  }
  see() {
    if (this.eyes > 0) {
      return `${this.name} can see because it has ${this.eyes} eyes`;
    } else {
      return `${this.name} cannot see because it has ${this.eyes} eyes`;
    }
  }
}
