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

// Nalya solution
// let dayDistance = 3;
// let nightDown = -2;
// let distance = 0;
// let days = 0;
// let wall = 5;

// while ((distance += dayDistance) <= wall) {
//   days++;
//   console.log(
//     `- Current distance at the end of the day for day ${days} is ${distance} meter(s)`
//   );
//   if (distance == wall) {
//     console.log(`Finish`);
//   } else {
//     console.log(`Go forward!`);
//     distance += nightDown;
//   }
// }

// Вот преимущество цикла над нижним решением
// let countDay = 0;
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
//         distance =  dayDistance + nightDistance
//         ++countDay
//     }
//     if ((distance + dayDistance) >= wallHeight) {
//         console.log(countDay)
//     }
//     else {
//         distance = dayDistance + nightDistance
//         ++countDay
//     }
//     if ((distance + dayDistance) >= wallHeight) {
//         console.log(countDay)
//     }
//     else {
//         distance = dayDistance + nightDistance
//         ++countDay
//     }
// }
// console.log(countDay)



// // ====== my wrong solution ======
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
