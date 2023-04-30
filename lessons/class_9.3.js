// 9.3 (04/22) Асинхронный JavaScript: промисы, цепочки промисов и работа с ними (Stan P.)

// https://www.youtube.com/watch?v=vJLTh_etJPo&list=PL6Gtav8N4O7iYmUm6wBjJd8EJ2KFXMPIH&index=49

// resolve. Обработчик позит. исхода
// reject. Обработчик негатив. исхода. Он поднимается обычно через 4 сек. после отсутствия ответа
// isPending. В примере ниже isPending будет, когда willPassExam получит результат из isNothingHappend

import fetch from "node-fetch";

let isNothingHappened = true; //true || false

// создаем промис
let willPassExam = new Promise(function (resolve, reject) {
  if (isNothingHappened) {
    let message = `I got a diploma`;
    resolve(message);
  } else {
    let reason = new Error(`Opps, something happened`);
    reject(reason);
  }
});

let getNewJob = function (diploma) {
  return new Promise(function (resolve) {
    let message = `I got a new job because ${diploma}`;
    resolve(message);
  });
};

let checkEvents = function () {
  console.log(`Before`);
  willPassExam
    .then(getNewJob)
    .then(function (noEvents) {
      console.log(noEvents);
    })
    .catch(function (error) {
      console.log(error.message);
    });
  console.log(`After`);
};

// checkEvents();

////////////////////////////

const url = `https://openweathermap.org/data/2.5/onecall?lat=51.5085&lon=-0.1257&units=metric&appid=439d4b804bc8187953eb36d2a8c26a02`;

// создаем promise через fetch(команда позволяет делать сетевые запросы и получать ответы)
// const fetch = require('node-fetch');

// тут линейная логика. Promise is pending. Его нужно привести к асинхронному коду.
// let promise = fetch(url)
// console.log(promise);

///////////////////////////

// асинхронный режим работы функции
async function getCallToUrl() {
  let promise = await fetch(url); // await позволяет дождаться ответа от fetch
  console.log(promise);
  if (promise.status == 200) {
    let result = await promise.json();
    console.log(result);
  } else {
    console.log(`Network error`);
  }
}

getCallToUrl(); // в ответе мы видим результат выполнения promise
