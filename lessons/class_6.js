// 6. (03/28) String and array methods (Nalya Sh)
// https://www.youtube.com/watch?v=7wen-eBaFXw&list=PL6Gtav8N4O7iYmUm6wBjJd8EJ2KFXMPIH&index=31

/**
Array methods                                 String methods                             Array                 Object
1.  shift()                                   1. split()                                 Array.from()
2.  unshift()                                 2. join()                                  Array.of()
3.  pop()                                     3. slice(), substring(), substr()          Array.isArray()
4.  push()                                    4. length
5.  concat()                                  5. replace()
6.  spread operator                           6. charAt()
7.  delete                                    7. trim(), trimStart, trimEnd
8.  reverse()                                 8. toUpperCase(), toLowerCase()
9.  toString()                                9. concar()
10. splice()                                 10. padStart(), padEnd() 
11. indexOf(), lastIndexOf()                 11. charCodeAt()
12. includes()                               12. indexOf(), lastIndexOf()
13. find()                                   13. includes()
14. findIndex()                              14. repeat()
15. map()                                    15. search()
16. forEach()
17. reduce(), reduceRight(), reduceLeft()
18. sort()
19. some()
20. slice()
21. flat()


Нужны примеры по arrayMethods(9, 21)
Нужны примеры по stringMethods(7, 9, 11, 13, 14, 15)
**/

// лекции в которых говорилось о методах
// 1. https://www.youtube.com/watch?v=IiiswmPNqhw&list=PL6Gtav8N4O7iYmUm6wBjJd8EJ2KFXMPIH&index=33
// 2. https://www.youtube.com/watch?v=CK9NKGh4_is&list=PL6Gtav8N4O7iYmUm6wBjJd8EJ2KFXMPIH&index=38
// 3. https://youtu.be/j-cZ51EWQdg

// ============= Сравнение массивов
// const arr1 = [1, null, 3];
// const arr2 = [1, undefined, 3];
// const compareArrays =
//   (arr1,
//   (arr2) => {
//     return arr1.length === arr2.length && arr1.every((el, i) => el == arr2[i]);
//   });
//   console.log(compareArrays(arr1, arr2));

// ============= compare with strings

// can change
// let string = "abcde";
// console.log(string[2]);

// let array = ["a", "b", "c", "d", "e"];
// console.log(array[2]);
// console.log(array);

// string[2] = "l"; // cann't change the element
// console.log(string);

// array[2] = "M";
// console.log(array);

// //                                      =================== STRING METHODS ===================
// // ======== length

// // let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// // console.log(txt.length)

// //======== slice()
// Извлекает часть строки и возвращает новую строку без изменения оригинальной строки.

// //Slice out a portion of a string from position 7 to position 13(13 not included)

// let str = "Apple, .Banana, Kiwi";
// console.log(str.slice(0, 7));

//======== replace()
// Возвращает новую строку с некоторыми или всеми сопоставлениями с шаблоном, заменёнными на заменитель.

// let message = "Please 5 visit 5 Microsoft! Microsoft.";
// console.log(message)

// console.log(message.replace(/microsoft/gi, 'Apple')); //gi - regexp вариант обращения к string

//======== charAt()
//Get the first character in a string:

// let text = "HELLO WORLD";
// let letter = text.charAt(1);
// console.log(letter, text[1])

//======== repeat()
//Create copies of a text:
// let q = "Helo!"; //012
// console.log(q.slice(0, 3).repeat(4));

//======== trim()
//Remove spaces with trim():

// let text = "      . Hello World!   .";
// let result = text.trim()
// console.log(result);

//======== padStart(), padEnd()
// const str = `potato`;
// const str1 = `blueberries`;
// const str2 = `06`;
// console.log(str.concat(` `, str2, ` `, str1));

// padStart(length, otherStr)

// const str3 = str.padEnd(20, ` `);
// const str4 = str.padEnd(20, " ");
// console.log(str3, `2.00`);
// console.log(str4, `4.00`);

//======== indexOf(), lastIndexOf()
// Возвращает индекс первого вхождения подстроки в строке. Возвращает -1, если значение не найдено.
// const str = `Fakhraddin`
// console.log(str.lastIndexOf(`d`));
// console.log(str.lastIndexOf(`d`));


// //                                      =================== ARRAYS METHODS ===================
//                                                    Все методы используют строгое сравнение
// ========== String method: split() & Array method join() ==========  Разные методы для удобства объяснения
//split(); делит строку по указанному разделителю, возвращает массив
// split('') возвращает символов

// let string = 'Hello-World'
// console.log(string);

// console.log(string.split('o'));
// let stringNew = string.split("o")  // each word
// console.log(stringNew);

// === join(); конвертирует массив в строку, по умолчанию
// разделяет символы запятой, но не меняет исходник

// let array = ["a", "b", "c", 1, 2, 3, `a`, `x`, `a`];
// console.log(array);

// console.log(array.join(" "));

// let newStringFromArray = array.join("")
// console.log(newStringFromArray)
// newStringFromArray = array.join('a')
// console.log(newStringFromArray);

// Методы pop/push, shift/unshift

//              push  ->  добавляет элемент(ы) в конец.
//              pop ->  удаляет последний элемент (и возвращает этот элемент!)

// let letters = ['a', 'b', 'c', 'd', 'e'];
// console.log(letters);
// console.log(letters.push(`h`));  //return quantity of elements
// let c = letters.push('g');
//  console.log(letters.length);
//  console.log(c);

// let a2 = letters.pop() // returns deleted element // внутрь pop() ничего не передаем, он не работает так
// console.log(a2);
// console.log(letters);
// let t = []
// t.push(a2)
// console.log(t);

//////////// удаление вложенного элемента массива в массиве
// const arr = [2, 6, 3, 8, 9, [49, 57]];
// console.log(arr[5].pop());

//              unshift -> Добавляет элемент(ы) в начало массива
//              shift удаляет элемент в начале, сдвигая очередь, так
//              что второй элемент становится первым (и возвращает этот элемент!)

// const bigLetters = ["A", "B", "C", "D", "E"];

// console.log(bigLetters.unshift(`Z`));
// let d = bigLetters.unshift([1, 2, 3], "Y", "88", "KH"); //return quantity of elements
// console.log(bigLetters);
// console.log(d);

// console.log(bigLetters.shift());
// z = bigLetters.shift()
// console.log(z);

// --------------------- объединение массивов
// concatenation - не используется!
// use .concat() method or..

// letters = ['a', 'b', 'c', 'd', 'e'];
// const bigLetters = ['A', 'B', 'C', 'D', 'E'];
// let v = letters + " " + bigLetters
// console.log(letters + " " + bigLetters);   // строка!!!
// console.log(typeof v)

// // ======= concat()
// let girls = ["Cecilie", "Lone"];
// let boys = ["Emil", "Tobias", "Linus"];
// let freinds = ["Olya", 'Oleg']

// let concats = girls.concat(boys, freinds)
// console.log(concats);

//============ push() + spread operator ...

//arr1.push(...arr2);   // (...arr2) ==> ('a', 'b', 'c')
// spread operator позволяет нам расскрыть массив, будто бы его нет. Но он показывает промежуточное состояние.
// Отрыбатывает похожим образом как concat()
// let arr1 = [5, 6, 7];
// let arr2 = ["A", "B"];
// console.log(...arr1); // нельзя узнать его typeof
// let arr3 = [...arr1, ...arr2];
// console.log(arr3);
// let arr4 = [arr1, ...arr2];
// console.log(arr4);
// --- пример как в массив пушить spread массив
// let array1 = [5, 6, 7];
// let array2 = ["A", "B"];
// let array3 = []
// console.log(array1);
// console.log(array3.push(...array2));
// console.log(array3);

// ======== spread operator (...)

// const numbers = [4, 8, 99, 9, 7, 777, 54];
// console.log(numbers);
// console.log(...numbers);

// console.log(Math.max(numbers));  // NaN потому что он не может работать с массивом
// console.log(Math.max(...numbers)); // А через spread можно

// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.toString()); // String(fruits) Тоже не меняет fruits
// console.log(fruits.join(",")); // чем-то схож с .toString()

// console.log(String(7));
// let num = String(7)
// let num1 = 5
// console.log(num + num1);

// delete Удаление элмента массива
// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// delete fruits[1];
// console.log(typeof fruits[1])

// // ======== splice()
// Начиная с индекса start удаляет определенное количество элементов deleteCount, и вставляет items. Возвращает измененный исходный массив.
// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// // array.splice(start, deleteCount, items)

// console.log(arr.splice(-1, 1, 0, ));
// console.log(arr);
// arr.splice(0, 3, [`zero`, `one`, `two`])
// answer = arr.splice(4, 3, ...[`four`, `five`, `six`])

// console.log(...arr);
// console.log(...answer);

// // ======== slice()
// Возвращает новый массив, который содержит элементы исходного, начиная со start по end (не включая).

// const arr1 = [`t`, `e`, `s`, `t`];
// const arrNew = arr1;
// // у них ссылка на одну и ту же ячейку памяти, где находиться массив.
// // Если не хотим этого, то создаем копию через arr.splice()
// console.log(arrNew);

// arr1[0] = `T`;
// console.log(arr1);
// console.log(arrNew);
// console.log(arrNew.slice(-3,-2));

// //======== reverse()

// arr = [`zero`, `one`, `two`]
// console.log(arr.reverse()); // обратная последовательность

// //======== indexOf()
// Возвращает индекс первого подходящего элемента, равного (строгое
// равенство) искомому элементу. В противном случае вернет -1. Если указан параметр fromIndex, то поиск начинается с него.
// arr.indexOf(search_element, start_index)
// const arr = `Hello World`.split(``);

// console.log(arr.indexOf(`l`)); // считает индекс слева
// console.log(arr.lastIndexOf(`l`)); // считает индекс справа. Если элемент не найден возвращается -1

//////////// Пример как можно вытащить все буквы l
// let idx = arr.indexOf(`l`);
// while (idx != -1) {
//   console.log(idx);
//   idx = arr.indexOf(`l`, idx + 1);
// }

///////////// Проверка на уникальность

// if (arr.indexOf(`H`) === arr.lastIndexOf(`H`)) {
//   console.log(`Unique`);
// }

//////////// Проверку на уникальность с NaN вернет -1. Он сам себе не равен. Методы используют строгое сравнение

// //======== includes()
// Возвращает true или false, в зависимости от того, содержится ли искомый элемент в массиве или нет. Элементы проверяются через строгое равенство ===. NaN === NaN

// const arr = [`1`, NaN, 2, false]
// let idx = arr.includes(3);
// console.log(idx);

// //======== find()
// Возвращает первое найденное значение, которое удовлетворяет
// условию, в противном же случае, метод вернет

// const arr = [2, 3, 2, 29, 39, 45]

// const isOdd = (element) => {
//     return element % 2 == 1
// }

// console.log(arr.find(isOdd));      //3 возвращает первое число проходящее поиск через callback функцию

// //======== findIndex()
// Возвращает индекс первого элемента в массиве, который удовлетворяет условию. Если условие не выполнено, вернется -1.

// const arr = [2, 3, 2, 29, 39, 45]

// const isOdd = (element) => {
//     return element % 2 == 1
// }

// console.log(arr.findIndex(isOdd));  //1 возвращает первый индекс элемента проходящий поиск через callback функцию. -1 если не найден индекс

// //======== filter()
// Возвращает новый массив, который состоит из тех элементов, которые удовлетворяют заданному условию.

// const arr = [2, 3, 2, 29, 39, 45];

// const isOdd = (el) => {
//   return el % 2 == 1;
// };

// console.log(arr.filter(isOdd)); // [ 3, 29, 39, 45 ] возращает массив, проходящий фильтр через callback функцию

// //// в filter как и вдургих помимо value можем передать и индекс

// const arrNew = [2, 6, 3, 28, 9, 49];

// console.log(arrNew.filter((el, i) => el % 2 === 1 && i % 2 === 1)); //[49] элемент нечетный и индекс нечетный. Тут передали в фильтр сразу callback функцию, а не через function expression

// //// можно также сразу массив передать не через переменную

// console.log(
//   "2,6,3,28,9,49".split(`,`).filter((el, i) => el % 2 === 1 && i % 2 === 1)
// ); //[`49`]

// //======== every()
// Возвращает true, если все элементы массива удовлетворяют заданному
// условию. Проверяет все элементы массива и останавливается, как только какой-либо элемент вернет false.

// const arr = [2, 6, 3, 28, 9];

// console.log(arr.every((el, i) => i % 2 == 0 ? el > 0 : el > 5));

// //======== some()
// Возвращает true, если хотя бы один элемент удовлетворяет условию.
// Проверяет все элементы массива и останавливается, как только какой либо элемент вернет true.

// const arr = [2, 6, 3, 28, 9];

// console.log(arr.some(el => el > 27));
// можно через конструкцию обратиться к массиву
// let num = 100;
// console.log(
//   Array.of(2, 6, 3, 28, 9).map((item, i, arr) =>
//     i % 2 == 0 ? arr.reduce((sum, el) => sum + el, num) - item : ``
//   )
// );

// //======== forEach()
// Выполняет определенное действие с каждым элементом массива.

// const arr = [2, 6, 3, 28, 9];
// const newArr = []

// // console.log(arr.forEach(el => el > 3 ? newArr.push(el) : ``)); // undefined т.к forEach ничего не возвращает
// // поэтому сразу смотрим на новый массив
// arr.forEach(el => el > 3 ? newArr.push(el) : ``)
// console.log(newArr);

// //======== sort()  UPDATE ARRAY
// Сортирует элементы массива и возвращает его
// const arr = [2, 6, 3, 28, 9, 56, 10, 1, 111, 3940];
// const arr = [
//   [1, 2],
//   [2, 2],
//   [2, 3],
//   [3, 4],
//   [1, 0],
// ];
// arr.sort(([a, b], [c, d]) => a - c).sort()

// console.log(arr);

// //======== map()
// Возвращает новый массив, в котором к каждому элементу будет применен результат определенных действий.

// const arr = [2, 6, 3, 27, 9, 49];

// let arrNew = arr.map((el, i) =>
//   i % 3 == 0 ? (el % 3 == 0 ? el / 3 : el) : el
// );
// console.log(arrNew);

// const squire = (n) => n * n; // эту функцию мы можем передать прямо в map если она мальенкая, чтобы не загрезнять документ

// console.log(arr.map(squire));

/////////// можем использовать через параметры map()

// console.log(arr.map((el, i, arr) => (i % 2 == 1 ? el * el : el)));

/////////// Отличие от forEach

// forEach дает просто набор чисел через цикл и поэтому дает undefined, а map возвращает массив
// arr.forEach((el, i, arr) => console.log(i % 2 == 1 ? el * el : el));

// //======== reduce()
// Обрабатывает каждый элемент массива и вычисляет единое значение. Один результат на основании вашего вычисления.

// const arr = [2, 6, 3, 8, 9, 40];
// const arr1 = [`Amir`, `JS`, `06`];

// console.log(arr.reduce((acc, el, i, arr)=>acc + el, 10)); // 10 значение по умалчанию. С него оно начнет считать, умножать etc.

// console.log(
//   arr.reduce((acc, el, i, arr) => (acc + (i % 2) === 1 ? el : -el), 0)
// );

// console.log(
//   arr1.reduce((acc, el, i) => (i == 0 ? acc + el : acc + ` ` + el), ``)
// );

// //======== Array.from()
// Создаёт новый массив из массивоподобного или итерируемого объекта.

// const arr = Array.from(`Python`, el => `*` + el + `*`)
// console.log(arr);

// //======== Array.of()
// Создаёт новый массив из произвольного числа аргументов, вне зависимости от числа или типа аргумента

// const arr = Array.of(1, `str`, NaN, true, undefined)
// console.log(arr);

// //======== Array.isArray()
// Возвращает true, если объект является массивом и false, если он массивом не является.

// let num = []
// console.log(Array.isArray(num));
