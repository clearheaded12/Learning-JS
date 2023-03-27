// 4.3 (03/18) Функции встроенного объекта Math, методы объекта console и вложенные циклы (Stan P.)
// https://www.youtube.com/watch?v=msGhBbvXqqo&list=PL6Gtav8N4O7iYmUm6wBjJd8EJ2KFXMPIH&index=23

// console.log(Math.sign(num));
// let num = 10
// console.log(Math.abs([2]));

// ====== Функции встроенного объекта Math ======
// let num = 4.9103
// Math .round() , .floor() , .ceil() , .trunc()

// Округляет к меньшему целому числу .floor
// console.log(Math.floor(num));

// Округляет к большему числу .ceil
// console.log(Math.ceil(num));

// Рботает чистая математика. .5 округлиться к большему .round
// console.log(Math.round(num));

// Игнорирует все что после точки .trunc
// console.log(Math.trunc(num));

// console.log(num.toFixed(0) + 10); в этом примере toFixed возвращает строку тут внимательнее

// ====== Методы объекта console ======
// console.error
// console.warn
// for (let i = 0; i <= 10; i++) {
//   if (i == 5) {
//     console.error(i); // .warn(подсвечивает желтым)
//   } else {
//     console.log(i);
//   }
// }

// console.time
// let className = `JavaScript`;
// let result = 0;
// console.time();
// for (let i = 0; i < 1000000000; i++) {
//   result++;
// }
// console.timeEnd()

// console.table
// let name1 = [[1, 2, 3], [4, 2, 4]]
// console.error(name1);

// ====== Вложенные циклы ======
// const arr = [12, 46, 2, 39, 42, 6];

// let idx = 10;
// let arrSored = [];
// for (let i = 10; i <= 20; i++) {
//   arrSored[idx++] = i;
// }
// console.log(arrSored)

// max и min элемент
// let max = (min = arr[0]);
// for (let i = 1; i < arr.length; i++) {
//   if (max < arr[i]) {
//     max = arr[i];
//   }
//   if (min > arr[i]) {
//     max = arr[i];
//   }
// }
// console.log(max, min);

// Сортировка
// console.log(arr);
// for (let i = 0; i < arr.length - 1; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] > arr[j]) {
//       let temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//     }
//   }
// }
// console.log(arr);
