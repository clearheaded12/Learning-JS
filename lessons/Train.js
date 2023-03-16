// let varUser = prompt(`Who is there?`)
// const varUserPass = prompt(`Password?`)
// if (varUser == `Admin`) {
//     alert(varUserPass)
// }
//     else if (varUserPass == `I AM FOREGN`) {
//         alert(`Hello`)
//     }
//     else if (varUserPass != `I AM FOREGN`) {
//         alert(`incorrect password`)
//     }
//     else if {
//     alert(`canceled`)
// } else if (varUser != `Admin`) {
//     alert(`I do not know you`)
// }
//  else if (varUser === `` || varUser === null){
//     alert(`canceled`)
// }

// let varUser = prompt(`Who is there?`);

// if (varUser === `Admin`) {

//   let varUserPass = prompt(`Password?`);

//   if (varUserPass === `I am charge`) {
//     alert(`Hello!`);
//   }
//   else if (varUserPass === `` || varUserPass === null) {
//     alert(`Canceled`);
//   }
//   else {
//     alert(`Incorrect password`);
//   }
// }
// else if (varUser === `` || varUser === null){
//   alert(`Canceled`);
// }
// else {
//   alert(`I do not know you`);
// }

// let k = 0;
// do {
//   console.log(k);
//   k++;
// } while (k < 3);

let hello;
const numbers = [43, 45, hello, ` true`];

// let txt = ``;
// for (let el in numbers) {
//    txt += numbers[el];
// }
// console.log(el);

// for (let el = 0; el < numbers.length; el++) {
//   txt += numbers[el];
// }
// console.log(txt);

let txt = ``;
for (let el of numbers) {
  //    txt += el;
  console.log(el);
}
