// 6.1 (03/29) Codewars (Svetlana G)
// https://www.youtube.com/watch?v=_fzNyQrPkt4&list=PL6Gtav8N4O7iYmUm6wBjJd8EJ2KFXMPIH&index=32

// --------------------------------------------------

// 1. Task (https://www.codewars.com/kata/57cc40b2f8392dbf2a0003ce/train/javascript)
// let arr = [80, 117, 115, 104, 45, 85, ["t", "e", "s", "t"], 112, 115];

// first option
// function check(a, x) {
//   b = a.indexOf(x);          // indexOf() -> array method
//   console.log(b);
//   return a.indexOf(x) >= 0;
// }
// console.log(check(arr, `t`));

// second option
// function check(a, x) {
//   return a.includes(x);
// }
// console.log(check(arr, 115));

// --------------------------------------------------

// 2. Task (https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/train/javascript)

// let arr = ["wolf", "sheep", "sheep", "sheep", "sheep", "sheep"];
// // let arr = [`wolf`];

// function warnTheSheep(queue) {
//   if (queue[queue.length - 1] == `wolf`) {
//     return "Pls go away and stop eating my sheep";
//   } else {
//     let a = queue.length - (queue.indexOf(`wolf`) + 1);
//     return `Oi! Sheep number ${a}! You are about to be eaten by a wolf!`;
//   }
// }
// console.log(warnTheSheep(arr));

// different solution

// function warnTheSheep(queue) {
//   if (queue.indexOf(`wolf`) == queue.length - 1) {
//     return "Pls go away and stop eating my sheep";
//   }
//   let r = queue.indexOf(`sheep`, queue.lastIndexOf(`wolf`)); // начни искать овцу после начала индекса волка
//   return `Oi! Sheep number ${
//     queue.length - r
//   }! You are about to be eaten by a wolf!`;
// }
// console.log(warnTheSheep(arr));

// --------------------------------------------------

// 3. Task(https://www.codewars.com/kata/56f699cd9400f5b7d8000b55/train/javascript)

// arr = ["tail", "body", "head"]

// function fixTheMeerkat(arr) {
//   arr.reverse();
//   return arr;
// }
// console.log(fixTheMeerkat(arr));

// просто для заметки, что можно так комбинировать методы
// arr[i] = arr[i].split('').reverse().join('')

// --------------------------------------------------

// 4. Task(https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript)

// let n = 35231;

// function digitize(n) {
//   return n.toString().split("").reverse().map(Number);
// }

// console.log(digitize(n));

// // different solution

// function digitize(n) {
//   let arr = [];
//   let b = n.toString();
//   for (let i = b.length-1; i >= 0; i--){
//     arr.push(Number(b[i]));
//   }
//   return arr;
// }

// console.log(digitize(n));

// --------------------------------------------------

// 5. Task(https://www.codewars.com/kata/5b4e779c578c6a898e0005c5/train/javascript)

// describe("Some simple stairs", function () {
//   it("Draw stairs with only 1 step", () =>
//     assert.equal(
//       drawStairs(1),
//       "I",
//       "The first step has no padding on the left, just an 'I'"
//     ));
//   it("Draw stairs with 3 steps", () =>
//     assert.equal(
//       drawStairs(3),
//       "I\n I\n  I",
//       "There's something wrong with these 3 steps"
//     ));
//   it("Draw stairs with 5 steps", () =>
//     assert.equal(
//       drawStairs(5),
//       "I\n I\n  I\n   I\n    I",
//       "5-step stairs no good"
//     ));
// });

// let n = 5;
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
//   return str;
// }
// console.log(drawStairs(5));
