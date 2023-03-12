// Switch, arrays, for loop (Nalya)

// if, else можно писать вложено и не писать фигурные скобки если у них идет по одной операции.

// let login = true;
// let course1 = `js`;
// let course2 = `java`;
// let course = course2;
// let region = `KZ`;

// if (login == true) {
//   if (course == course1) {
//     console.log(`Welcome!`);

//     if (region != `USA`) console.log(`Wake up early!`);
//   } else console.log(`Go to java`);
// } else {
//   console.log(`Login is not correct`);
// }

// ====SWITCH====
// switch(exprression) {
//     case x:
//         code block
//         break;
//     case y:
//         code block
//         break;
//     default:
//         code block
// }

// let day = 3;
// switch (day) {
//   case 2:

//   case 3:
//     console.log(`Monday`);
//     console.log(`Ok`);
//     break;
//   case 4:
//     console.log(`Tuesday`);
//     break;
//   case 5:
//     console.log(`Wednesday`);
//     break;
//   default:
//     console, log(`Another day`);
// }

// ====STRING длина строки, индекс, буквы====
// let pharse = `Hello world!`; //1-12
// let space = ``;

// console.log(pharse.length);
// console.log(space.length);

// index
// pharse = `Hello world!` // 0-11

// console.log(pharse[11])
// console.log(space[0])
// console.log(pharse[7])
// console.log(pharse[0])

// // .toLowerCase .toUpperCase
// console.log(pharse.toLowerCase())
// console.log(pharse.toUpperCase())

// ====ARRAYS====
// массив - упорядочнная коллекция данных
// const arr = []

// let arr1 = [`ok`, "cool"]
// console.log(arr1)

// let diffTypes = [null, `One`, undefined, true]
// console.log(diffTypes)

// Обращение к массивам
// arr[index]
// arr.length
// arr[arr.length -1] // принимает ноль и положительные индексы
// arr.at(index) // принимает отрицательные индексы

// const letters = [`a`, `b`, `c`, `d`, `e`, `f`, `g`];
// // indexes:       0    1    2
// // or:                 ...           -3   -2  -1

// console.log(letters.length); // считаывает с 1
// console.log(letters[0]);
// console.log(letters[letters.length - 1]); // 7 -1 = 6
// console.log(letters.at(-2));

// console.log(letters[10]);
// console.log(letters.at(-10));

// ====loops (for, for in, for of, while, do...while)====
// ====FOR LOOP====
// for (initialization; condition; step(increment/decrement)) {
//     ...loop body...
// }
// for (начало, условие, шаг) {
//     ...тело цикла...
// }

// for (let i = 0; i < 3; i++) {
//   console.log(i);
// }

// for (let i = 0; i <= 3; i++) {
//   console.log(i);
// }

// начало let i = 0  Выполняется один раз при входе в цикл
// условие i < 3     Проверяется перед каждой итерацией цикла. Если оно вычислится в false, цикл остановится.
//                   Тело console.log(i) выполнятся будет снова и снова, пока условие вычисляется в true
// шаг i++           Выполняется после тела цикла на каждой терации перед проверкой условия.

// let i
// for (let i = 0; i < 7; i+1) {
//   let str1 = `+/ `;
//   let newStr = ``;
//   newStr = newStr + str1;
//   console.log(newStr)
// }

// find sum
// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//   // i = 1 sum = 1; i=2 sim = 3; sum = 6 i = 3; sum = 10 i = 4; sum =15 i =5;...
//   sum += i;
// }
// console.log(sum);

// exponentiate
// let num = 5;
// let result = 1;
// for (let i = 1; i <= 10; i+=3) {
//   result = result * num;
//   console.log(i);
//   console.log(result)
// }

// Привязка к чему-то. Например, к длине слова
// let str3 = `Hello!`
// let result3
// for (i = 1; i <= str3.length; i+=2) {
//   result3 = i
//   console.log(result3)
// }












// let fruits = [];
// fruits[126] = "Яблоко";
// fruits[127] = "Яблоко", `Banan`;

// console.log( fruits.length );

// let arr = [11, 33, 3, 4, 5];

// arr.length = 3; // укорачиваем до двух элементов
// console.log( arr );

// arr.length = 0
// console.log(arr[3]) // не восстановил прежние занчения


// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// console.log(matrix[2][2]);


// let arr = [1, 2, 3];
// console.log(String.arr)


// let styles = [`Джаз`, `Блюз`]
// console.log(styles.push(`Рок-н-ролл`))
// console.log(styles[1] = `Классика`)
// console.log(styles.shift())
// console.log(styles)
// console.log(styles.unshift(`Рэп`, `Регги`))
// console.log(styles)

let arr = ["a", "b"];

arr.push(function() {
  console.log( `this` );
})

arr[2](); 