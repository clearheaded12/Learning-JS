// Задача с интервью
// У вас есть массив со скобками, предположим [ ‘(‘, ‘)’, ‘(‘, ‘)’, ‘)’] .
// Количество элементов и последовательность может быть разной.
// Нужно выяснить, у каждой ли скобки есть соответствующая пара (открывающая и закрывающая).

// Nalya solution

let sum1 = 0;
let sum2 = 0;

let arr = ["(", ")", "(", ")", ")", "("];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] == "(") {
    sum1 += 1;
  } else if (arr[i] == ")") {
    sum2 += 1;
  }
}
console.log("oppening = " + sum1 + ", closing = " + sum2);

if (sum1 == sum2) {
  console.log("equal");
} else {
  console.log(`not equal`);
}
