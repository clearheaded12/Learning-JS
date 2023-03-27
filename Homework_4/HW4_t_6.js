// 5. Задача с интервью*
// У вас есть массив с тремя видами скобок, предположим
// [ '{', ')', '(', ')', ')', '}, '[', ']', ')'] . Количество элементов и последовательность может быть разной.
// Нужно выяснить, все ли скобки являются парными  в правильной последовательности (открывающая и затем закрывающая). Также, скобки могут быть вложенными, но тем не менее, если последовательность соблюдена, то они считаются парными.
// Пример:
// [ ')', '{', '(', '(', ')', ')', '}, '[', ']', '(' ] - у двух нет пары (нарушена последовательность)
// [ '{', '(', '(', ')', ')', '}, '[', ']' ] - у всех есть пара
// [ '{', '(', '(', ')', ')', '}', '[', '[', ')' ] - у трех нет пары

// Nalya solution
// HW #4 Part 2
// https://www.youtube.com/watch?v=AaTNDJU1dUc&list=PL6Gtav8N4O7iYmUm6wBjJd8EJ2KFXMPIH&index=24

// let countOpen = 0;
// let countClose = 0;
// let result = 0;

// // Вариант с одним видом скобочек
// let myArr = ["(", ")", "(", "(", "(", ")", "{", "(", ")", ")"];
// // let myArr = [")", "(", "(", "(", ")", "(", ")", ")", "(", ")"];

// for (let i = 0; i < myArr.length; i++) {
//   if (myArr[i] == "(") {
//     countOpen++;
//   } else if (myArr[i] == `)`) {
//     countClose++;
//   }
//   result = countOpen - countClose;
//   console.log(result);
//   if (result < 0) {
//     console.log(`Wrong sequence`);
//     break;
//   }
// }

// if (countOpen == countClose) {
//   console.log(`Equal`);
// } else {
//   console.log(`Not equal`);
// }

// Вариант с несколькими видами скобочек

// let result = 0;
// let result2 = 0;
// let result3 = 0;

// let myArr = ["{", "(", "(", ")", ")", "}", "[", "]", ")"];
// for (let i in myArr) {
//   if (myArr[i] == `(`) {
//     result++;
//   } else if (myArr[i] == `)`) {
//     result--;
//   }
//   if (result < 0) {
//     console.log(`Wrong sequence of '()'`);
//     break;
//   }
//   if (myArr[i] == `{`) {
//     result2++;
//   } else if (myArr[i] == `}`) {
//     result2--;
//   }
//   if (result2 < 0) {
//     console.log(`Wrong sequence of '{}'`);
//     break;
//   }
//   if (myArr[i] == `[`) {
//     result3++;
//   } else if (myArr[i] == `]`) {
//     result3--;
//   }
//   if (result3 < 0) {
//     console.log(`Worng sequence of '[]'`);
//     break;
//   }
//   console.log(result, result2, result3);


//   if (result < 0 || result2 < 0 || result3 < 0) {
//     console.log(`Wrong sequence`);
//     break;
//   }
// }

// if (result == 0 && result2 == 0 && result3 == 0) {
//   console.log(`All Equal`);
// } else if (result == 0 || result2 == 0 || result3 == 0) {
//   console.log(`Not equal`);
// }
