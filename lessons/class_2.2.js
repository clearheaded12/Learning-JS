// 2.2 (03/03) Операторы сравнения, присваивания, логические операторы, if else (Tatiana Volk)

// Задача 1
// Напишите программу для бара-автомата. Клиент вводит имя Name и возраст и получает напиток. Если клиент моложе 21 года, то выводится строка "Возьмите стакан сока", если клиенту 21 и больше, выводиться строка "Могу предложить бокал вина", если больше 80-ти, выводиться строка "Может кефир?"

// let name
// let age
// let enterAge = prompt(`Enter your age please`)

// if (enterAge < 21) {
//     alert(`Take a glass of juice`)
// } else if (enterAge >= 21 && enterAge <= 80) {
//     alert(`I can offer a glass of wine`)
// } else if (enterAge > 80) {
//     alert(`Maybe kefir?`)
// }

// Задача 2
// Underweight(Below 18.5), Healthy weight(18.5 - 24.9), Overweight(25.0 - 29.9), Obesity(30 and Above)

// let bodyWeight = prompt(`Hello! What is your body weight?`);
// let bodyHeight = prompt(`What is your body height?`);
// const BMI = bodyWeight / bodyHeight ** 2;
// let bodyWeightQuest;

// if (BMI < 18.5) {
//   alert(`You are body weight defeciny`);
// } else if (BMI < 24.9) {
//   alert(`You are normal body weight`);
// } else if (BMI < 29.9) {
//   alert(`You are excess body weight`);
// } else {
//   alert(`You are obesity body weight`);
// }

// Задача 3
// Напишите программу для расчета стоимости билетов.
// Для пассажиров старше 18 лет - 100% полная цена
// для младенцев младше 2 лет - 10% стоимости
// для детей от 2-х до 17-ти лет - 50% стоимости
// для пенсионеров старше 65 лет - 60% стоимости

// let price = 100;
// let age = prompt(`How old are you?`);
// let totalTicket = prompt(`How many tickets do you need?`);
// let totalPriceChild = price * (totalTicket * 0.5);
// let totalPricePensioners = price * (totalTicket * 0.4);
// let totalPriceBabies = price * (totalTicket * 0.9);
// let totalPriceAdults = price * totalTicket;
// let finalAnswer = `Total price is `;

// if (age < 2) {
//   alert(finalAnswer + totalPriceBabies);
// } else if (age <= 17) {
//   alert(finalAnswer + totalPriceChild);
// } else if (age <= 64) {
//   alert(finalAnswer + totalPriceAdults);
// } else if (age >= 65) {
//   alert(finalAnswer + totalPricePensioners);
// }
