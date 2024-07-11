console.log("My console statement");

// Variable declaration using var and const
var score = 30;
var result = 50;
const PI = 3.14;

console.log(score);
console.log(result);
console.log(PI);

// Data Types
// 1. Number
// 2. String
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Object
// 7. Symbol (ES6)

// Example with let (modern preferred way for variables)
let score = 30;
let result = "10";

// Operations (BODMAS/BEDMAS rules apply in JavaScript)
let finalScore = score + result; // Concatenation due to result being a string
console.log(finalScore); // Output: "3010" (string concatenation)

let penalty = score - result; // Numeric subtraction
console.log(penalty); // Output: 20

console.log(typeof penalty); // Output: "number"

let totalGames = 5;
let avgScore = finalScore / totalGames; // Division
console.log(avgScore); // Output: 602 (JavaScript performs implicit type conversion)

console.log(typeof avgScore); // Output: "number"

// Complex expression
let value = ((finalScore ** 2) * 10 / (penalty + totalGames));
console.log(value); // Output: 22550

// Conditional statement
if (totalGames === 'five') {
    console.log(value);
}
