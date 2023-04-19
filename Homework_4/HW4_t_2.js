// // 2. Нарисуйте елочку
// //      *
// //     ***
// //    *****
// //   *******
// //  *********

// console.log(`Number- 2) ============`);
// let pyramid2 = ``;
// let x = 5;
// let space = ` `;
// let sum = 1;
// for (let i = 1; i <= x; i++) {
//   pyramid2 += space.repeat(x - i) + `*`.repeat(sum) + `\n`;
//   sum += 2;
// }
// console.log(pyramid2);

// console.log(`============`);

// let n = 7;
// let stairs = ``;
// let stair = 0;
// let spacePlus = ` `;
// for (let i = 0; i < n; i++) {
//   stairs += spacePlus.repeat(i + stair) + `I` + `\n`;
//   stair++;
// }
// console.log(stairs);

// // Решая другую задачу я нашел метод строк repeat. Его же использовал в этой задаче.
// // Создал новую переменную space = ' ', а потом в цикле применил к ней метод repeat.
// // Итоговый код:
// function drawStairs(n) {
//   let str = "I";
//   let space = " ";
//   for (let i = 1; i < n; i++) {
//     if (i < n) {
//       str += "\n";
//       str += space.repeat(i);
//       str += "I";
//     } else {
//       str += "I";
//       str += space;
//     }
//   }
//   console.log(str);
// }
// drawStairs(n)

// let str = "I";
// for (let i = 1; i < n; i++) {
//   if (i < n) {
//     str += "\n";
//     str += " ";
//     str += "I";
//   } else {
//     str += "I";
//     str += " ";
//   }
// }
// console.log(str);

// Первый тест, где просто первая ступенька I, соответственно, я прохожу. Во втором он ругается на то, что для третье строки у меня снова один пробел, а должно быть уже два.
