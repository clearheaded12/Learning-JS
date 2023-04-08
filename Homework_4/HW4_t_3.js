// // 3. Нарисуйте треугольник

// // 1
// // 2 6
// // 3 7 10
// // 4 8 11 13
// // 5 9 12 14 15

// console.log(`Challenge- 3) ============`);
//                                       // 1 loop                    2 loop                              3 loop
// let str = ``;                         // 
// x = 5;                                // 
// space = ` `;                          //
// for (let i = 1; i <= x; i++) {        // i = 1                     i = 2                               i = 3
//   let num = i;                        // num = 1                   num = 2                             num = 3
//   for (let j = 1; j <= i; j++) {      // j = 1                     j = 1, 2                            j = 1, 2, 3
//     str += num + space;               // str += num(1) + space;    str += (2 + space)                  str += (3 + space) 
//     num += (x - j);                   // num = 1 + (5 - 1)         num 2 + (5 - 1)                     num 3 + (5 - 1)
//                                       //                           str += (2 + space) + (6 + space)    str += (3 + space) + (7 + space)
//                                       //                                                               num 7 + (5 - 2)
//                                       //                                                               str += (3 + space) + (7 + space) + (10 + space)
//   } 
//   str += `\n`;
// }
// console.log(str);
