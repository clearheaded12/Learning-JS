// 4. Усовершенствуйте решение задачи про улитку с помощью  наиболее подходящего цикла.

// let countDay = 0;
// const wallHeight = 5;
// let dayDistance = 3;
// let nightDistance = -2;
// let totalDistance = 0;

// right solution
// while (totalDistance < wallHeight) {
//   totalDistance += dayDistance;
//   console.log(`Пройден ${++countDay} день и дистанция ${totalDistance} метра.`);
//   if (totalDistance >= wallHeight) {
//     console.log(
//       `Достигнута заданная дистанция ${wallHeight} метров за ${countDay} дней.`
//     );
//     break;
//   }
//   totalDistance += nightDistance;
// }

// // my wrong solution
// // for (countDay = 0; totalDistance <= wallHeight; countDay++) {
// //   if (totalDistance >= wallHeight) {
// //     console.log(`Do not need to move`);
// //   } else {
// //     if (totalDistance + dayDistance >= wallHeight) {
// //       console.log(countDay);
// //     } else {
// //       totalDistance = dayDistance + nightDistance;
// //         // countDay++;
// //     }
// //   }
// // }
