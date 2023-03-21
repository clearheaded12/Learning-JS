// // 1. Нарисуйте ромб

// //          1
// //         121
// //        12321
// //       1234321
// //      123454321
// //     12345654321
// //    1234567654321
// //   123456787654321
// //  12345678987654321
// // 1234567890987654321
// //  12345678987654321
// //   123456787654321
// //    1234567654321
// //     12345654321
// //      123454321
// //       1234321
// //        12321
// //         121
// //          1

// // Nalya solution

// console.log(`1)============`);
// let newStr = ``;
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= i; j++) {
//     newStr += j;
//   }
//   newStr += `\n`;
// }
// console.log(newStr);

// console.log(`2)============`);
// let newStr2 = ``;
// let x = 5;
// let space = ` `;
// for (let i = 1; i <= x; i++) {
//   newStr2 += space.repeat(x - i);
//   for (let j = 1; j <= i; j++) {
//     newStr2 += j;
//   }
//   newStr2 += `\n`;
// }
// console.log(newStr2);

// console.log(`3)============`);
// let row = ``;
// for (let i = 1; i <= 5; i++) {
//   row += i;
// }
// console.log(row);

// console.log(`4)============`);
// let newStr4 = ``;
// // let x = 5;
// // let space = ``;
// for (let i = 1; i <= x; i++) {
//   newStr4 += space.repeat(i - 1);
//   for (let j = 1; j <= x + 1 - i; j++) {
//     newStr4 += j;
//   }
//   newStr4 += `\n`;
// }
// console.log(newStr4);

// console.log(`5)============`);
// let newStr5 = ``;
// // let x = 5;
// // let space =` `;
// for (let i = 1; i <= x; i++) {
//   for (let j = x + 1 - i; j >= 1; j--) {
//     newStr5 += j;
//   }
//   newStr5 += `\n`;
// }
// console.log(newStr5);

// console.log(`5-2)============`);
// console.log(
//   `54321` + `\n` + `4321` + `\n` + `321` + `\n` + `21` + `\n` + `1` + `\n`
// );

// console.log(`7)============`);
// let pyramid = ``;
// // x = 10;
// // let space = ` `;
// for (let i = 1; i <= x; i++) {
//   pyramid += space.repeat(x - i);
//   for (let j = 1; j <= i; j++) {
//     pyramid += j;
//   }
//   for (let j = i - 1; j >= 1; j--) {
//     pyramid += j;
//   }
//   pyramid += `\n`;
// }
// console.log(pyramid);

// console.log(`8)============`);
// let romb = ``;
// x = 10; //5
// // let space = ` `;
// for (let i = 1; i <= x; i++) {
//   romb += space.repeat(x - i);
//   for (let j = 1; j <= i; j++) {
//     if (j == 10) {
//       //remove 10 or 10%
//       romb += 0;
//     } else romb += j;
//     // romb += j;
//   }
//   for (let j = i - 1; j >= 1; j--) {
//     //? let j = 1; j <= i; j++
//     romb += j;
//   }
//   romb += `\n`;
// }
// x = 9; //4
// for (let i = 1; i <= x; i++) {
//   romb += space.repeat(i); // i - 1 if x = 5
//   for (j = 1; j <= x + 1 - i; j++) {
//     romb += j;
//   }
//   for (let j = x - i; j >= 1; j--) {
//     romb += j;
//   }
//   romb += `\n`;
// }
// console.log(romb);
