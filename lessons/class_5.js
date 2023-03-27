// //5. (03/21) Функции в JS (Nalya Sh)
// //https://www.youtube.com/watch?v=v9TX___qNuw&list=PL6Gtav8N4O7iYmUm6wBjJd8EJ2KFXMPIH&index=26

// //=== Option 1: function declaration ===
// function name(param1, param2) {
//   statments;
//   return expression;
// }

// //=== Option 2: function expression ===
// let name = function (param1) {
//   statments;
//   return expression;
// };

// //=== Option 3: arrow functions ===
// let name = (arg1, arg2) => {
//   expression;
// };

// //===
// function sum(a, b) {
//   let result = a + b;
//   //   console.log(result)
//   return result;           // смысл return передать значение дальше. Без этого мы не сможем залесть внутрь функции и достать значение
// }
// console.log(sum(3, 6));

// let result = sum(3, 7);
// console.log(result);

// //===
// function print(arg) {
//   console.log(arg);
// }
// function sum(a, b = 7) {
//   a = 4; // значение переданное тут в теле функции приоритетнее, чем значение в аргументе при вызове
//   let result = a + b;
//   print(result);
//   return result;
// }

// sum();

// //===
// let result2 = print(`Hello`); // смысл имеет если в функции есть return
// console.log(result2);

// //===
// function myNum() {
//   return 20;
// }
// sum(3, myNum());

// //===
// let result = 1;
// console.log(result);

// function sum(a = 5, b = 7) {
//   result = a + b;
//   return result; // это значение инкапсулировано внутри функции
// }
// console.log(result); // он не вывел 12 потому что result в функции локальный

// //===
// function print(a, b) {
//   let sum2 = sum(2, 2);
//   console.log(sum2);
// }
// print(`Hi`); // он не выдаст `Hi` так как в теле функции не идет работа с a и b

// //===
// function print(a, b) {
//   let num = 77;
//   return 4 + sum(2, 2) + num; // так не нужно потому что другие будут задавать много вопросов(а почему это, а это)
// }
// console.log(print());

// //===
// let name2 = `Anna`
// console.log(showMessage(`Fakhraddin`));
// // let name2 = `Anna`  в верхней функции она не сработает потому что задекларирована после вызова функции
// function showMessage(name1){
//   return name1 + name2
// }
