// Strings
console.log(typeof "Hello"); // Output: "string"
let word = 'raining';
console.log(word.toUpperCase()); // Output: "RAINING"

// Reserved Keywords
// Attempting to use a reserved keyword like "let" as a variable name is incorrect
// let let = "hi"; // SyntaxError: Unexpected token 'let'

// String Operations
console.log("Hello and good evening".length); // Output: 22
console.log("Hello".charAt(4)); // Output: "o" (index starts from 0)

// Boolean
// True value: any value (non-zero, true-like values)
// False value: 0, false, '', NaN, undefined
console.log(typeof true); // Output: "boolean"
console.log(typeof false); // Output: "boolean"
console.log(typeof isNaN('five')); // Output: "boolean"

if (1) {
    console.log("Very True!"); // Output: "Very True!"
} else {
    console.log("Very Wrong!"); // This branch will not execute
}

if ("hello") {
    console.log("Very True"); // Output: "Very True"
} else {
    console.log("Very Wrong"); // This branch will not execute
}

console.log("hello".includes('e')); // Output: true

// Null and Undefined
let score1;
let result1 = null;

console.log(typeof(score1)); // Output: "undefined"
console.log(typeof(result1)); // Output: "object" (null is an object in JavaScript)

if (result1) {
    console.log("Very True"); // This branch will not execute
} else {
    console.log("Very Wrong"); // Output: "Very Wrong"
}
