// 6.2 (04/01) Функции в JS: рекурсия, замыкание. Методы массивов (Stan P.)
// https://www.youtube.com/watch?v=IiiswmPNqhw&list=PL6Gtav8N4O7iYmUm6wBjJd8EJ2KFXMPIH&index=33

//////////////////////////////////////////////////// РЕКУРСИЯ
// Это вызов функции в самой себе. Она зациклена
// Ее импользуют при поиске факториала, чисел фибоначчи, создание анимации.
// let count = 0;
// function recursion() {
//   count++;
//   console.log(count);
//   recursion()
// }
// recursion();

// Ее можно завершить задав ей условие, чтобы не было бесконечности. Это также можно делать через циклы
// let count = 0;
// function recursion() {
//   count++;
//   console.log(count);
//   if (count > 50) return; // return здесь как break
//   recursion();
// }

// recursion();

// Факториал

// function factorial_1(n) {
//   let p = 1;
//   for (let i = 1; i <= n; i++) {
//     p *= i;
//   }
//   console.log(p);
// }
// factorial_1(5);

// Факториал с рекурсией

// let result = 1;
// function factorial_2(n) {
//   if (n == 0) return;
//   result *= n;
//   factorial_2(n - 1);
// }
// factorial_2(5);
// console.log(result); // здесь минус в том, что мы работаем с глобабальной перменной

// ///////////////
// function factorial_3(n) {
//   return n == 1 ? 1 : n * factorial_3(n - 1);
// }
// console.log(factorial_3(4));

//////////////////////////////////////////////////// ЧИСЛА ФИБОНАЧЧИ

// 0, 1 все последующие числа получаются сложением всех предыдущих двух чисел
// 0, 1, 1, 2, 3, 5, 8, 13, 21...  // числа в последовательности Фибоначчи
// 0, 1, 2, 3, 4, 5, 6,  7, 8

// function fibonacci(n) {
//   if (n == 0) return 0;
//   if (n == 1) return 1;
//   return fibonacci(n - 1) + fibonacci(n - 2); // это нужно запонмнить. Следующее число образуется сложеним предыдущих 2 чисел.
// }

// console.log(fibonacci(1));

// Stack:
/*
                             fib(4)
                    fib(3)     +     fib(2)
            fib(2) + fib(1)    +   fib(1) + fib(0)
      fib(1) + fib(0)
*/                     

// Задача на числа Фибоначчи

// 0, 1, 1, 2, 3, 5, 8, 13, 21
// 1, 2, 3, 4, 5, 6,  7, 8, 9

// function fibonacci(n) {
//   n--;
//   if (n == 0) return 0;
//   if (n == 1) return 1;
//   let arr = [0, 1];
//   let sumArr = 0;
//   for (let i = 2; i <= n; i++) {
//     sumArr = arr.at(-1) + arr.at(-2);
//     arr.push(sumArr);
//   }
//   return arr[n];
// }

// console.log(fibonacci(1));
// console.log(fibonacci(8));

//////////////////////////////////////////////////// ЗАМЫКАНИЕ

// let count = 0
// // Плохо когда функция работает с перменной с глобальной зоной видимости. Кто-то может ее изменить
// // От этого мы избавляемся. Принцип построен на этом. Мы должны замкнуть нашу переменную.
// // Чтобы замкнуть перменную перенесем ее внутрь функции.

// function createCount(){
//     count++
//     console.log(count);
// }

// createCount()

//////////////// Поэтому перемнную ставим внутрь

// function counter() {
//   let count = 0;

//   return function createCount() {
//     count++;
//     console.log(count);
//   };
// }

// // console.log(counter()); // clg(counter()()) первые скобочки вызвали всю общую функцию, () вторые выполнили вызов возращенной функции
// let counter_1 = counter()
// counter_1()
// counter_1()
// counter_1()
// тут как раз начинается магия count увеличивается +1
// получается мы замкнули одну функцию в другой вместе с переменной. И потом мы можем пользоваться этой возможностью.
// Это не только счетчик. Это можно использовать для подсчета элементов в многомерном массиве.

//////////////// как произвести мгновенный вызов функции

// (function hello() {
//   console.log(`hello`);
// })();

//////////////// задача с интервью
// function generate(seed) {
//   let private = seed;
//   return function (param) {    // безымянная функция. Так можно. В стрелочной ф. например также.
//     private += seed;
//     return private + param;
//   };
// }

// let a = generate(1); // в () значение для seed. В a содержится переменная private, мы не имеем к ней доступа.
// let b = generate(2);
// В этом и заключается прелесть замыкания. Снаружи мы получаем красивый результат, но на перемнную мы воздейстовать не можем.

// console.log(a(1) + a(2) + b(3) + b(4)); // в () как раз таки указывается значение для param
// console.log(b(3) + b(4));

// для лучшего понимания
// let a = generate(1)
// console.log(a);
// console.log(a(1));
// console.log(a(3));

