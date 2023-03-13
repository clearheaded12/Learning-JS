// При помощи цикла for выведите чётные числа от 2 до 10

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    console.log(arr[i] + ` - it is even number`);
  } else if (arr[i] != 0) {
    console.log(arr[i] + ` - it is an odd number`)
  }
}
