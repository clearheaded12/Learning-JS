// 2. Напишите функцию с калькулятором (используйте предыдущий код), в которую, в качестве параметров, передаются три переменные, две - числовые и третья отвечает за знак арифметической операции (*, /, -, +). Проверьте работу функции.
// example:  function calculate(a, b, operator){}

// my right solution
// function calc(a, b, operator) {
//     if (operator == `+`) {
//         console.log(a + b);
//       } else if (operator == `-`) {
//         console.log(a - b);
//       } else if (operator == `*`) {
//         console.log(a * b);
//       } else if (operator == `/` && b != 0) {
//         console.log(a / b);
//       } else if (isNaN(a) || isNaN(b)){
//         console.log(`Please, enter correct number.`);
//       }
// }

// a = 3;
// b = 9;
// operator = `-`;
// calc(a, b, operator)

// =====================

// Nalya solution

// function sum(a, b) {
//   return a + b;
// }
// function substract(a, b) {
//   return a - b;
// }
// function multiplay(a, b) {
//   return a * b;
// }
// function devide(a, b) {
//   if (b == 0) {
//     return `Division by 0 is not allowed! Enter another number`;
//   } else return a / b;
// }

// function calc(a, b, sign) {
//   let result = 0;
//   if (isNaN(a) || isNaN(b)) result = `Please, enter a number`;
//   else {
//     if (sign == `+`) result = sum(a, b);
//     else if (sign == `-`) result = substract(a, b);
//     else if (sign == `*`) result = multiplay(a, b);
//     else if (sign == `/`) result = devide(a, b);
//     else return `Please, enter right sign`
//   }
//   return result
// }
// console.log(calc(8, 2, '/'));