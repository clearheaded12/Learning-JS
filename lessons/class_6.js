// 6. (03/28) String and array methods (Nalya Sh)
// https://www.youtube.com/watch?v=7wen-eBaFXw&list=PL6Gtav8N4O7iYmUm6wBjJd8EJ2KFXMPIH&index=31

/**
Array methods                          String methods
1. shift()                             1. split()
2. unshift()                           2. join()
3. pop()                               3. slice(), substring(), substr()
4. push()                              4. length
5. concat()                            5. replace()
6. spread operator                     6. charAt()
7. delete                              7. trim(), trimStart, trimEnd
8. reverse                             8. toUpperCase(), toLowerCase()
9. toString()                          9. concar()
10. splice                            10. padStart(), padEnd() 
11. indexOf                           11. charCodeAt()
12. includes()
13. find()
14. findIndex()
15. map()
16.forEach()
17.reduce(), reduceRight(), reduceLeft


Нужны примеры по arrayMethods(8, 9, 11, 12, 13, 14, 15, 16, 17)
Нужны примеры по stringMethods(7, 9, 10, 11)
**/

// --- compare with strings

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

// //===================Array methods===========
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

// let array = ["a", "b", "c", 1, 2, 3];
// console.log(array);

// console.log(array.join(" "));

//let newStringFromArray = array.join("")
//console.log(newStringFromArray)

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

//              ------- объединение массивов
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
// console.log(concat);

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
// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// // arr.splice(start_index, how_much_elements, new_elements(s))

// arr.splice(-1, 1, 0)
// arr.splice(0, 3, [`zero`, `one`, `two`])
// answer = arr.splice(4, 3, ...[`four`, `five`, `six`])

// console.log(...arr);
// console.log(...answer);

// //                                      ===================STRING METHODS===========
// // ======== length

// // let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// // console.log(txt.length)

// // ======== slice()

// //Slice out a portion of a string from position 7 to position 13(13 not included)

// let str = "Apple, .Banana, Kiwi";
// console.log(str.slice(0, 7));

//=== replace()
//The replace() method replaces a specified value with another value in a string:

// let message = "Please 5 visit 5 Microsoft! Microsoft.";
// console.log(message)

// console.log(message.replace(/microsoft/gi, 'Apple')); //gi - regexp вариант обращения к string

// === charAt()
//Get the first character in a string:

// let text = "HELLO WORLD";
// let letter = text.charAt(1);
// console.log(letter, text[1])

//=== repeat()
//Create copies of a text:
// let q = "Helo!"; //012
// console.log(q.slice(0, 3).repeat(4));

//=== trim()
//Remove spaces with trim():

// let text = "      . Hello World!   .";
// let result = text.trim()
// console.log(result);


