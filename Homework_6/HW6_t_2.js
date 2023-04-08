// 2. Если вы решали задачку со скобками без методов, то сейчас решите с методами.
// Задание пока не сделано

// Усложненный вариант C:\Users\hp\Desktop\Learning-JS\Homework_4\HW4_t_6.js

// У вас есть массив с тремя видами скобок, предположим
// [ '{', ')', '(', ')', ')', '}, '[', ']', ')'] . Количество элементов и последовательность может быть разной.
// Нужно выяснить, все ли скобки являются парными  в правильной последовательности (открывающая и затем закрывающая). Также, скобки могут быть вложенными, но тем не менее, если последовательность соблюдена, то они считаются парными.
// Пример:
// [ ')', '{', '(', '(', ')', ')', '}, '[', ']', '(' ] - у двух нет пары (нарушена последовательность)
// [ '{', '(', '(', ')', ')', '}, '[', ']' ] - у всех есть пара
// [ '{', '(', '(', ')', ')', '}', '[', '[', ')' ] - у трех нет пары

// let countOpen = 0;
// let countClose = 0;
// let result = 0;

// Вариант с одним видом скобочек
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

let result = 0;
let result2 = 0;
let result3 = 0;

let myArr = ["{", "(", "(", ")", ")", "}", "[", "]", ")"];
for (let i in myArr) {
  if (myArr[i] == `(`) {
    result++;
  } else if (myArr[i] == `)`) {
    result--;
  }
  if (result < 0) {
    console.log(`Wrong sequence of '()'`);
    break;
  }
  if (myArr[i] == `{`) {
    result2++;
  } else if (myArr[i] == `}`) {
    result2--;
  }
  if (result2 < 0) {
    console.log(`Wrong sequence of '{}'`);
    break;
  }
  if (myArr[i] == `[`) {
    result3++;
  } else if (myArr[i] == `]`) {
    result3--;
  }
  if (result3 < 0) {
    console.log(`Worng sequence of '[]'`);
    break;
  }
  console.log(result, result2, result3);


  if (result < 0 || result2 < 0 || result3 < 0) {
    console.log(`Wrong sequence`);
    break;
  }
}

if (result == 0 && result2 == 0 && result3 == 0) {
  console.log(`All Equal`);
} else if (result == 0 || result2 == 0 || result3 == 0) {
  console.log(`Not equal`);
}


// ----------------------------------------------------------------------

// попроще вариант HW3_t_3.js

// У вас есть массив со скобками, предположим [ ‘(‘, ‘)’, ‘(‘, ‘)’, ‘)’] .
// Количество элементов и последовательность может быть разной.
// Нужно выяснить, у каждой ли скобки есть соответствующая пара (открывающая и закрывающая).

// Nalya solution

// let sum1 = 0;
// let sum2 = 0;

// let arr = ["(", ")", "(", ")", ")", "("];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == "(") {
//     sum1 += 1;
//   } else if (arr[i] == ")") {
//     sum2 += 1;
//   }
// }
// console.log("oppening = " + sum1 + ", closing = " + sum2);

// if (sum1 == sum2) {
//   console.log("equal");
// } else {
//   console.log(`not equal`);
// }