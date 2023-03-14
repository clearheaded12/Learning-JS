// // Имеется зашифрованное предложение
// // “Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr”
// // мы знаем, что оно означает “You are the best QA ever”.
// // Нам нужно придумать программу дешифратор.

// // Nalya solution

// // encrypted
// let text = `You are the best QA ever`;
// let newText = ``;
// let count = 0;

// for (let i = 0; i < text.length; i++) {
//   if (true) {
//     newText = newText + text[i] + `br`;
//   }
//   // count += 2
// }
// console.log(newText);

// console.log(`--------------`);

// // decrypted
// let decodedResult = ``;
// for (let i = 0; i < newText.length; i += 3) {
//   decodedResult += newText[i];
// }
// console.log(decodedResult);
