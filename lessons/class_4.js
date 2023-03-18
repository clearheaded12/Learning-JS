// for in, for of, do while, continue and break (Nalya Sh)

// while
// let i = 7;
// while (i != 0) {
//   console.log(i);
//   i--;
// }

// ------

// do while
// let k = 0;
// do {
//   console.log(k);
//   k++;
// } while (k < 3);

// ------

// break
// for (let i = 0; i <= 10; i++) {
//   if (i == 7) {
//     break;
//   }
//   console.log(i);
// }

// ------

// continue
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 == 0) {
//     continue;
//   }
//   console.log(i);
// }

// let fruits = [`apple`, `pears`, `plums`, `grape`, `watermelon`];
// for (let i = 0; i < fruits.length; i++) {
//   if (fruits[i] == `grape`) {
//     break;
//   }
//   if (fruits[i] == `pears`) {
//     continue;
//   }
//   console.log(fruits[i]);
// }

// ------

// Нельзя использовать break/continue справа от оператора `?` (ternary operator)
// условие ? выражение1: выражение2

// ------

// for in
// Если просто нужно пробежаться по массиву. for in хорошо подходит
// const numbers = [45, 4, 9, 16, 25];

// let txt = ``;
// for (let el in numbers) {
//   txt += numbers[el];
//   console.log(txt);
// }

// ------

// for of
// let text = ``;
// const cars = `BMV, Volvo, Mini`;
// for (let x of cars) {
//   text += x;
//   console.log(x);
//   //   console.log(text);
// }

// ------

// inner loops
// for (let line = 1; line <= 5; line++) {                       // отвечает за количество строк
//   // console.log(line)
//   let str = ``;
//   for (let numInLine = 1; numInLine <= line; numInLine++) {   // отвечает за наполнение строки
//     str += numInLine;
//   }
//   console.log(str);
// }

// for (let i = 5; i >= 1; i--) {
//   let str = ``;
//   for (let j = i; j >= 1; j--) {
//     str += j;
//   }
//   console.log(str);
// }
