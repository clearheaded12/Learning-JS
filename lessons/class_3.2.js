// Решаем задачи на codewars

// 1. Task
// Instructions
// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.
// Considering these factors, write a function that tells you if it is possible to get to the pump or not.
// Function should return true if it is possible and false if not.

// solution
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   return distanceToPump <= mpg * fuelLeft;
// };

// Sample Tests
// const assert = require("chai").assert;

// describe("zeroFill", function () {
//   it("Sample Tests", function () {
//     assert.equal(zeroFuel(50, 25, 2), true);
//     assert.equal(zeroFuel(100, 50, 1), false);
//   });
// });

//------

// 2. Task
// Instructions
// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him
// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)
// - If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// - If he doesn't get 10 hoops, return the string "Keep at it until you get it".

// Sample Tests
// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(hoopCount(3),"Keep at it until you get it" )
// Test.assertEquals(hoopCount(11),"Great, now move on to tricks" )
//   });
// });

// solution
// function hoopCount (n) {
//     if (n >= 10) {
//       return "Great, now move on to tricks"
//     } else {
//       return "Keep at it until you get it"
//     }
//  }

//------

// 3. Task
// Instructions
// When provided with a number between 0-9, return it in words.
// Input :: 1
// Output :: "One".
// If your language supports it, try using a switch statement.

// Sample Tests
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic Tests",() =>{
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(switchItUp(1),"One");
//     assert.strictEqual(switchItUp(3),"Three");
//     assert.strictEqual(switchItUp(5),"Five");
//   });
// });

// solution
// function switchItUp(number){
// switch(number) {
//     case 0:
//       return "Zero";
//     case 1:
//       return "One";
//     case 2:
//       return "Two";
//     case 3:
//       return "Three";
//     case 4:
//       return "Four";
//     case 5:
//       return "Five";
//     case 6:
//       return "Six";
//     case 7:
//       return "Seven";
//     case 8:
//       return "Eight";
//     case 9:
//       return "Nine";
//     default:
//       return "Number is out of range";
//   }
// }

//------

// 4. Task
// Instructions
// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples
// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

// 'B' and 'g' returns 0

// '0' and '?' returns -1


// Sample Tests
// const {assert} = require("chai");
// function doTest(a, b, expected){
//   it(`Testing for "${a}" and "${b}"`, function() {
//     assert.strictEqual(sameCase(a,b), expected, `For sameCase("${a}","${b}")`);
//   });
// }
// describe("Solution", function() {
//   doTest('C', 'B', 1);
//   doTest('b', 'a', 1);
//   doTest('d', 'd', 1);
//   doTest('A', 's', 0);
//   doTest('c', 'B', 0);
//   doTest('b', 'Z', 0);
//   doTest('\t', 'Z', -1);
//   doTest('H', ':', -1);
// });

// solution
// function sameCase(a, b) {
//   if (
//     a.toUpperCase() === a.toLowerCase() ||
//     b.toUpperCase === b.toLowerCase()
//   ) {
//     return -1;
//   } else if (
//     (a === a.toLowerCase() && b === b.toLowerCase) ||
//     (a === a.toUpperCase() && b === b.toUpperCase)
//   ) {
//     return 1;
//   } else {
//     return 0;
//   }
// }
