// // 5.3 (03/25) Функции в JS: объявление, выражения, стрелочная и функция обратного вызова CALLBACK (Stan P.)

// // https://www.youtube.com/watch?v=zxtKt1bw3PA&list=PL6Gtav8N4O7iYmUm6wBjJd8EJ2KFXMPIH&index=29

// // === callback function ===
// const addition = (num1, num2) => {
//   return num1 + num2;
// };

// const subtraction = (num1, num2) => {
//   return num1 - num2;
// };

// const product = (n1, n2) => {
//   return n1 * n2;
// };

// function result(callback, num1 = 4, num2 = 4) {
//   // callback здесь это функция как аргумент в другую функцию
//   return callback(num1, num2);
// }

// console.log(result((n1, n2) => n1 + n2));

// // усложняем callback
// function result(callback, num1 = 5, num2 = 8, num3) {
//   return callback(num1, num2, num3);
// }

// console.log(result((num1, num2, num3) => (num1 + num2) * num3, 10, 20, 30));

// // ===

// function sum() {
//   let result = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     result += arguments[i];
//   }
//   return result;
// }
// console.log(sum(10, 20, 30)); // таким образом мы можем работать с неизвестным количесвтом параметров, приходящих в функцию

// // тоже самое с for of

// function sum() {
//   let result = 0;
//   for (el of arguments) {
//     result += el;
//   }
//   return result;
// }
// console.log(sum(10, 20, 30)); // таким образом мы можем работать с неизвестным количесвтом параметров, приходящих в функцию
