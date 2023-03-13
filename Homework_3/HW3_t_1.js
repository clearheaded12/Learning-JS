// Напишите программу калькулятора со switch, обработайте возможные ошибки ввода

let num1 = 3;
let num2 = 1;
let operator = `/`;
switch (operator) {
  case `+`:
    console.log(num1 + num2);
    break;
  case `-`:
    console.log(num1 - num2);
    break;
  case `*`:
    console.log(num1 * num2);
    break;
  case `/`:
    if (num2 != 0) {
      console.log(num1 / num2);
    } else console.log(`You can't divide by zero!`)
    break;
  default:
    console.log(`Please, enter correct number.`);
}
