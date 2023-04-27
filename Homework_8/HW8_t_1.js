// 1. Создайте еще пару классов наследников, чтобы в итоге дойти до тигра Проши. Выведите все данные Проши и покажите его способности с помощью методов.

class Animal {
  constructor(name, eyes) {
    (this.name = name), (this.eyes = eyes);
  }
  getName() {
    return `The name of the animal is ${this.name}.`;
  }
  canEat() {
    return console.log(`This animal can eat`);
  }
}

class Mammals extends Animal {
  constructor(name, eyes, skin, legs) {
    super(name, eyes), (this.skin = skin), (this.legs = legs);
  }
  canEat() {
    console.log(`This animal can eat milk`);
  }
  showBodyParts() {
    console.log(`${this.name} has ${this.legs} legs, ${this.skin}.`);
  }
}

class Predators extends Mammals {
  constructor(name, eyes, skin, legs, teeth, claws) {
    super(name, eyes, skin, legs), (this.teeth = teeth), (this.claws = claws);
  }
  canEat() {
    console.log(`This ${this.name.toLowerCase()} can eat milk and meat`);
  }
  showBodyParts() {
    console.log(
      `${this.name} has ${this.legs} legs, ${this.skin}, ${this.teeth} teeth, and ${this.claws}`
    );
  }
}

class Cats extends Predators {
  constructor(name, eyes, skin, legs, teeth, claws, nickname) {
    super(name, eyes, skin, legs, teeth, claws), (this.nickname = nickname);
  }
  showBodyParts() {
    console.log(
      `${this.name} has ${this.legs} legs, ${this.skin}, ${this.teeth} teeth, and ${this.claws} claws.`
    );
  }
  getDescription() {
    console.log(`It's name is ${this.nickname}`);
  }
}

let pet = new Cats(`Tiger`, `Brown`, `fur`, 4, `sharp`, `sharp`, `Prosha`);
console.log(pet);
pet.showBodyParts();
pet.canEat();







