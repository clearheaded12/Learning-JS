let log = console.log;

////////////////////////////////
// Прототипное наследование

let obj1 = {
  name: `Serj`,
  age: 32,
  show() {
    return `Name : ${this.name}, age: ${this.age}`;
  },
};

let obj2 = {
  __proto__: obj1,
  occupation: `Teacher`,
  show() {
    return `Name : ${this.name}, age: ${this.age}, occupation: ${this.occupation}`;
  },
};

// let obj3 = {
//   rewards: [2022],
//   __proto__: obj2,
// };

// // log(obj3);
// // log(obj3.name);
// // log(obj3.show()); //если у прототипа был метод show, то мы ее ПЕРЕОПРЕДЕЛИЛИ
// log(obj2.valueOf());

////////////////////////////////////

// Создание класса Person
// Это устаревший вариант поэтому он подсвечивает Person, ожидая там class

// тут функция уже как функция конструктор
// function Person(name, occupation, age) {
//   this.name = name ?? `Unknown`;
//   this.age = age;
//   this.occupation = occupation ?? `unemployed`; // значение по умолчанию
//   this.introduce = function (age) {
//     log(`Hello, I'm ${this.name}`),
//       log(`I'm a ${this.occupation} and I'm ${this.age}`);
//   };
// }

// let person1 = new Person(`Anna`, `student`); // создаем человека по экземпляру Person
// let person2 = new Person(`Serj`, `Teacher`);
// let person3 = new Person(`Amir`, `AQA`);
// log(person1);
// log(person3.introduce(21));
// log(person1 instanceof Person); // проверка на то является ли объект person1 экземпляром класса Person

// function Worker(name, age, occupation) {
//   Person.call(this, name, occupation, age); // тут мы берем от класса Person его имя и возраст(это наследование)
//   this.occupation = occupation; // это новое свойство его пишем через this
//   this.officialGreeting = function () {
//     log(`Let me introduce myself, I'm ${this.name}`),
//       log(`I'm working as a ${this.occupation}`);
//   };
// }

// function Manager(name, age, occupation, role) {
//   Worker.call(this, name, age, occupation);
//   this.role = role;
// }

// let worker1 = new Worker(`Amir`, 21, `tutor`);
// worker1.officialGreeting();
// worker1.introduce();

// let manager1 = new Manager(`Stan`, 33, `PC director`, `Head`);
// manager1.introduce();
// manager1.officialGreeting();

////////////////////////////////////

// Ниже будет соверменный подход к ООП - через class(синтаксич. сахар)

// старый способ
// function Person(name, occupation, age) {
//   this.name = name ?? `Unknown`;
//   this.age = age;
//   this.occupation = occupation ?? `unemployed`; // значение по умолчанию
//   this.introduce = function () {
//     log(`Hello, I'm ${this.name}`),
//       log(`I'm a ${this.occupation} and I'm ${this.age}`);
//   };
// }

//========= новый способ
class Person_1 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    log(`Hello, I'm ${this.name}`);
    log(`I'm ${this.age}`);
  }
}

// let p1 = new Person_1(`Fakhraddin`, `22`);
// p1.introduce();

// старый способ
// function Worker(name, age, occupation) {
//   Person.call(this, name, occupation, age); // тут мы берем от класса Person его имя и возраст(это наследование)
//   this.occupation = occupation; // это новое свойство его пишем через this
//   this.officialGreeting = function () {
//     log(`Let me introduce myself, I'm ${this.name}`),
//       log(`I'm working as a ${this.occupation}`);
//   };
// }

//========= новый способ
class Worker_1 extends Person_1 {
  constructor(name, age, occupation) {
    super(name, age); // name, age вызовут родит. конструктор, т.е они наполнят тип Worker_1 из класса Person_1
    this.occupation = occupation; // затем дополниться новым свойством occupation
  }
  introduce() {
    super.introduce(); // через super можно вызвать методы родителя
    log(`Let me introduce myself, I'm ${this.name}`),
      log(`I'm working as a ${this.occupation}`);
  }
}

// let w1 = new Worker_1(`John`, 44, `Driver`);
// w1.introduce();

// старый способ
// function Manager(name, age, occupation, role) {
//   Worker.call(this, name, age, occupation);
//   this.role = role;
// }

//========= новый способ
class Manager_1 extends Worker_1 {
  constructor(name, age, occupation, role) {
    super(name, age, occupation);
    this.role = role
  }
}

let m1 = new Manager_1(`Stan`, 26, `manager`, `Teamlead`)
log(m1.introduce())
