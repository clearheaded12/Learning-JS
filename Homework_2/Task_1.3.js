// 1.3 Решите задачу с помощью пройденных тем:
// «Улитка ползёт вверх по стене высотой 5 метров. Каждый день она проползает вверх на 3 метра, а каждую ночь съезжает вниз на 2 метра. За сколько дней она доползёт до вершины стены.»

// let countDay = 1;
// let wallHeight = 5;
// let dayDistance = 3;
// let nightDistance = -2;
// let distance = 0;

// if (distance >= wallHeight) {
//     console.log(`Do not need to move`)
// } else {
//     if ((distance + dayDistance) >= wallHeight) {
//         console.log(countDay)
//     }
//     else {
//         distance = distance + dayDistance + nightDistance
//         ++countDay
//     }
//     if ((distance + dayDistance) >= wallHeight) {
//         console.log(countDay)
//     }
//     else {
//         distance = distance + dayDistance + nightDistance
//         ++countDay
//     }
//     if ((distance + dayDistance) >= wallHeight) {
//         console.log(countDay)
//     }
//     else {
//         distance = distance + dayDistance + nightDistance
//         ++countDay
//     }
// }



// С помощью краткой формулы решение
// let speed = 3 - 2
// let distance1 = 5

// (3 - 2) * (x - 1) + 3 = 9
// x - 1 + 3 = 9
// x = 7
// Дальше самому на основе этого решить



// Решение одного из студентов. Представил 2 варианта
// 1 вариант
// let totalDays = 1;
// let wallHeight = 5;
// let speed = 3;
// let nightSpeed = -2;
// let result = speed;

// console.log(
//   "Вар. 1 математика: Улитка доползла до вершины стены за",
//   (wallHeight - dayDistance) / (dayDistance + nightDistance) + 1,
//   "дня."
// );
// (wallHeight - dayDistance) - остаток высоты стены после подъема за первый день
// делим на (dayDistance + nightDistance) расстояние, на которое поднимается улитка за последующие сутки и прибваляем первый день

// 2 вариант
// if (result != wallHeight || result < wallHeight) {
//   result += nightSpeed + speed;
//   ++totalDays;
// }
// if (result != wallHeight || result < wallHeight) {
//   result += nightSpeed + speed;
//   ++totalDays;
// }
// if (result != wallHeight || result < wallHeight) {
//   result += nightSpeed + speed;
//   ++totalDays;
// }
// if (result != wallHeight || result < wallHeight) {
//   result += nightSpeed + speed;
//   ++totalDays;
// }
// if (result != wallHeight || result < wallHeight) {
//   result += nightSpeed + speed;
//   ++totalDays;
// } else
//   console.log(
//     "Вар. 2 ()id/else : Улитка доползла до вершины стены за",
//     totalDays,
//     "дня."
//   );
