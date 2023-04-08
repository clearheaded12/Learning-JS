// 1. Задача про Палиндром.
// Палиндром — слово, предложение или последовательность символов, которая абсолютно одинаково читается как в привычном направлении, так и в обратном. К примеру, “Anna” — это палиндром, а “table” и “John” — нет.
// Дана строка; нужно написать функцию, которая позволяет вернуть значение true, если строка является палиндромом, и false — если нет. При этом нужно учитывать пробелы и знаки препинания.

// let palindrome = `aannaA`;
// let neww = palindrome.split(``).join(``);

// function checkPalindrome(palindrome) {
//   newStr = palindrome.toLowerCase();
//   check = palindrome.toLowerCase().split(``).reverse().join(``);
//   if (check == newStr) return true;
//   else return false;
// }
// console.log(checkPalindrome(palindrome));

// ------------------------------------------------------------------

// 1. Another solution

// function pal(str){
//     str=str.toLowerCase().split(/\W*/);
//     return str.join('')==str.reverse().join('');
// }

// let myString="A man, a plan, a canal: Panama";
// console.log(pal(myString))// -->true

// ------------------------------------------------------------------

// 2. Another solution

// function verifyPalindrome(str) {
//   str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
//   let reversedStr = str.split('').reverse().join('');
//   return str === reversedStr
// }
// console.log(`Alla`);
// console.log(`A man, a plan, a canal: Panama`);

// ------------------------------------------------------------------

// 3. Another solution

// function isPallindrom (phrase) {
//   phrase = phrase.split(`:`,`,`,`-`).join(``).toLowerCase().replace(/\s/g, ``) // удаление всех пробелов
//   let arr1 = phrase.split('')
//   arr1.reverse()

//   console.log(phrase);
//   return arr1.join() === arr1.reverse().join()
// }
// console.log(isPallindrom(`A man, a plan, a canal: Panama`));



