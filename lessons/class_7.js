// //----------- ==; === -------- compare arrays

// let arr = [1, 2];
// let arr1 = ["a", "b"]

// console.log(arr == arr1);
// console.log(arr > arr1);
// console.log(arr < arr1);

// const a = [1, 2, 3];
const b = [1, 2, 3];

// const a1 = [1, 2, 7];
// const b1 = [1, 2, 6];
// let a2 = a1.join()
// let b2 = b1.join()

// console.log(JSON.stringify(a1) == JSON.stringify(b1)) // compare string
//  console.log(JSON.stringify(a1))
// console.log(b.toString() === a.toString());
// let z = b.toString()
//let x = JSON.stringify(b)

//console.log(x.length)
// =========================

//let arr = [1, 2, 3];
let emptyArr = [];
// emptyArr.push(1, 5, 7)
// emptyArr.push(1, 3, 5, "f")
// emptyArr[0] = "A"
// console.log(emptyArr)
// let str2 =
// console.log(String(arr), " /", String(emptyArr) );
// console.log(Number(...arr), Number(emptyArr));
// console.log(Boolean(arr), Boolean(emptyArr));

// ============= Objects =================================
/**
 * In JavaScript, objects are king. If you understand objects, you understand JavaScript.

In JavaScript, almost "everything" is an object.

Booleans can be objects (if defined with the new keyword)
Numbers can be objects (if defined with the new keyword)
Strings can be objects (if defined with the new keyword)
Dates are always objects
Maths are always objects
Regular expressions are always objects
Arrays are always objects
Functions are always objects
Objects are always objects
All JavaScript values, except primitives, are objects.

Objects are variablrs!
It is a common practice to declare objects with the const keyword.
 */

//  ======= examples:

//{key : values,} -property

// const person = {
//   name: "Ivan",
//   surname: "Petrov",
//   age: 33,
//   job: "QA engineer",
//   isAdmin: false
// }
// let arrNew = [["name", 'Olya']["age", 22]]
// // arrNew[0][1]
// const person2 = {
//     id: '02',
//     personalInfo: {
//        name: {
//           first: 'Jane',
//           last: 'Dow',
//        },
//       dob: '01/01/1990',
//       "contactInfo": {
//         phone: '+123456789',
//         email: null,
//         address: {
//           city: "Boston",
//           state: "M"
//         }
//       },
//     },
//    purchases: [null],
//    car: "Suzuki"
//   }
// console.log(person2['personalInfo']['name'].last);

//  console.log(typeof person2);

// const arr = [1];
// console.log(typeof arr);

// ===================  Обьявление обьекта  ===========================

// let obj = new Object();
// let user = {};

// let obj = {
//   name: 'Bob',
//   "age": 21,
//   "isAdult": true,
//   "salary": undefined,
//   4: null,
//   address: [],
//   myObj: {}
// };
// console.log(obj);

// Последнее свойство объекта (property) может заканчиваться запятой ",".

// =========================================

// ключ может состоять из нескольких слов, но тогда он
// _обязательно_ должен быть заключен в кавычки:
// let number
// number = 9

// let user = new Object()
// let user1 = {
//   name: "John",
//   age: 30,
//    highSchool: true,
// }

// console.log("original ", user1 );

// //value of age и name изменено:
//  user1.age = 20;
//  user1.name = 'Bill';
//  console.log("modified ", user1);
// console.log(user1[0])

// // //добавлено свойство address:
// user1.address = {
//   city: 'SF',
//   state: 'CA',
//   country: 'USA',
// }
// user1['hello'] = "Hi"
// console.log("added new key - address and hello ", user1);
// console.log(user1.address.state);

// // //============================================
// // //оператор delete:

//  delete user1.address.country;     //удаление свойства country
//  console.log("deleted  ", user1 );

// ====================  обращение к свойствам  =============================

// Для обращения к свойствам используется запись «через точку»: person.name, person.age.
//  или через [ ] :       person['name'], person["age"]

// const person = {

//   age: 30,
//   "likes cats": true,
//    name: 'Joey',
// };

// // //выведение значения

//  console.log(person.name);
//  console.log(person.age);

// //let arr = [4, "g", 66]
//  console.log(person["name"]); //arr[0]
//  console.log(person['age']);
//console.log(person["likes cats"]);

// ==================  Добавление свойства(property)  ================================

//создаем объект
//   const obj = {};
// console.log(obj)
// // //присваиваем значения
//  obj.name = 'Jess'; //через точку arr[0]= "jess"
// console.log(obj);

//  obj['likes read'] = true; //через скобки []
// console.log(obj);

//  obj['age'] = 28;
//  console.log(obj);

// let carModel = 'car'; //через переменную
// let num = 2
// obj[carModel] = num;
// //obj['carModel'] = 3;
//  console.log(obj);

// // =======================  Изменение свойства(property)  ===================================

// obj.name = "Bill";           //через точку
// obj['likes read'] = false;     //через скобки []
// obj[carModel] = 5;           //через переменную

//  console.log(obj);

// ================== Создание объекта с использованием переменной  =====

// let name1 = "Anna";
// let age = 17
// const user = {
//    [name1]: name1,
//    age: age

// };
// console.log(user);

// // ============================================================
// Обращение к свойствам объекта
// let arr = [1,3,5,7]
// const customers = [
//   {               //   !!! Array[0]
//     id: '01',                //
//     personalInfo: {  name: { first: 'John', last: 'Dow'}, },},

//   {                //    !!! Array[1]
//     id: '02',                //
//     personalInfo: {          //
//       name: {                //
//         first: 'Jane',       //
//         last: 'Dow',         //
//       },
//       dob: '01/01/1990',         //
//       "contactInfo": {           //
//         phone: '+123456789',     //
//         email: [3,7,[4,8]],             //
//         address: null,           //
//       },
//     },
//      purchases: [{two: 2},6, 3],           //
//   }];

// 1. Свойства 1-го уровня -array elements
//   console.log(customers.length);
//   console.log(customers[0]);
//   console.log(customers[1]);
//   console.log(customers[2]);

// // 2. Свойства 2-го уровня -from array to object
// //   console.log(customers[0].id);
// //   console.log(customers[0]['id'])

// // 3. Свойства 3-го уровня
//  console.log(customers[1].personalInfo.name);
//  console.log(customers[1].personalInfo['dob']);
//  console.log(customers[1]['personalInfo']['dob']);

// 4. Свойства 4-го уровня
//  console.log(customers[1].personalInfo.name.first);
//  console.log(customers[1].personalInfo.contactInfo.email);
//  console.log(customers[1]['personalInfo']['contactInfo']['email'][1]);

// ====================  Проверка существования свойства  ======================================

// ===== проверка с undefined
// В отличие от многих других языков, особенность JavaScript-объектов в том,
// что можно получить доступ к любому свойству. Даже если свойства не существует –
// ошибки не будет!

// При обращении к свойству, которого нет, возвращается undefined.
// Это позволяет просто проверить существование свойства:

// let user = {
//    newKey: 'MY Key',
// };
// console.log(user)
// console.log(user.age);
// console.log(user.newKey);
// console.log(user.name === undefined); // true означает "свойства нет"
// user.name = "Anna"
// // console.log(user)
// // user.name = " Pavel"
// console.log(user)
// console.log(user.newKey !== undefined)

// ===== через оператор in check the key
// let obj = {
//    firstName: 'Sofia',
//    lastName: 'I.',
//    age: 35,
//    language: 'Java',
//    newKey: undefined,
//    9: false,
//    job: {
//       name1: "Olga",
//       newObj: { age1: 23 }
//    },
// };
// //console.log(obj);

// //   console.log("firstName" in obj);
// //  console.log("first" in obj);
// //  console.log(undefined in obj);
//  console.log( 'age1' in obj.job.newObj);  // can't check by value

// console.log(obj.newKey === undefined);

// ==================================Example
// let userInfo = {
//    name: "Anna",
//    age:  30,
//    address : {
//       city: "Boston",
//       street: "Rose Dr."
//    }
// }

// //Operator in
// if ("name" in userInfo){            // check if key  -name- in object
//    console.log(userInfo.name)
// }

// //console.log(userInfo.address.street)
// //опциональная цепочка
// console.log(userInfo?.address?.street)

// ============================================================

// обращение, добавление на примере

// let obj = {
//   firstName: "Sofia",
//   lastName: "I.",
//   country: "Argentina",
//   continent: "Americas",
//   age: 35,
//   language: "Java",
// };
// let name1 = obj.firstName;
// let language = obj.language;

// console.log(name1, " ,", language);

// let a = `Hi ${name1}, Do you like ${obj.language}?`;

// console.log(a);

// let newKey = 'hello';
// obj[newKey] = a;      // obj.hello = a;

// console.log(obj);

// =======================  цикл for ... in  ===================================

// const arr = ['a', 'b', 'c'];
// for (let i = 0; ; i++) {}
// for (let el of arr) {}

// Для итерации по объекту используется цикл for ... in

// for (let key in object) {
//   тело цикла выполняется для каждого свойства объекта
// }

let obj = {
  name: "John",
  age: 30,
  isAdmin: true
};

for(let key in obj){
  // ключи
  console.log(key);  // name, age, isAdmin

//   // значения ключей
 //console.log(obj[key]); // John, 30, true   /arr[i]

  //console.log(key + ": " + obj[key]);
}

// //count salaries
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };

//  let sum = 0;
// for(let key in salaries) {
//    sum += salaries[key];
// }

//  console.log(sum); // 390

// let obj = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// function multiplyNumeric(obj) {
//   let res = 0;
//   for(let key in obj) {
//      //res += obj[key] * 2;
//     if(typeof obj[key] == 'number'){
//       res += obj[key] * 2;
//    }
//   }
//   return res;
// }
// console.log(multiplyNumeric(obj));

// ============================================================

// Объекты – это ассоциативные массивы с рядом дополнительных возможностей.
// Они хранят свойства (пары ключ-значение), где:

// => Ключи свойств должны быть строками (string) или символами (symbol) (обычно строками).
// => Значения могут быть любого типа.
// => Чтобы получить доступ к свойству, мы можем использовать:

// => Запись через точку: obj.key.
// => Квадратные скобки obj["key"]. Квадратные скобки позволяют взять ключ из переменной, например, obj[varWithKey].
// Удаление свойства: delete obj.key.
// Проверка существования свойства: "key" in obj.
// Перебор свойств объекта: цикл for(let key in obj).

// ======================  Методы объектов  ======================================

// Object.keys, values, entries
// Для простых объектов доступны следующие методы:

// Object.keys(obj) – возвращает массив ключей.
// Object.values(obj) – возвращает массив значений.
// Object.entries(obj) – возвращает массив пар [ключ, значение].

let user = {
  name: "John",
  age: 30,
  isAdmin: true,
  language: "JavaScript",
};

// console.log("Keys: ", Object.keys(user));    //выводит ключи (keys)
// console.log("Values: ", Object.values(user));  //выводит значения (values)
// console.log(Object.entries(user)); //выводит массив массивов

// ======== перебор в цикле
//console.log('===========');
let user3 = {
  name: { name: "Kate", age2: 22 },
  age: 30,
  language: "en",
  home: "apartment",
  number: 6,
};

// // перебор значений -checking values
for (let i of Object.values(user3.name)) {
  console.log(i);
}
