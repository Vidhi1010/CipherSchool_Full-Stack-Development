// Strings 
console.log(typeof "Hello"); // Output: "string"
let word = 'raining';  // String.Prototype
// console.log(word.toUpperCase()); //RAINING

// let let = "hi"  - INCORRECT 

console.log("Hello and good evening".length); // Output: 22
console.log("Hello".charAt(4)); // Output: "o"

// boolean (true-1,false-0)
// True value --> any value
// False value --> 0, false, '', NaN, undefined
console.log(typeof true); // Output: "boolean"
console.log(typeof false); // Output: "boolean"
console.log(typeof isNaN('five')); // Output: "boolean"

/* if(1){
  console.log("Very True ! ")
} else{
  console.log("Very Wrong ! ")
} */

if ("hello") {
  console.log("very true"); // Output: "very true"
} else {
  console.log("very wrong"); // This branch will not execute
}

console.log("hello".includes('e')); // Output: true

// Null and Undefined
let score1;
let result1 = null;

// console.log(typeof(score1));
// console.log(typeof(result1));

if (result1) {
  console.log("very true"); // This branch will not execute
} else {
  console.log("very wrong"); // Output: "very wrong"
}

// OBJECT FILE

let obj = { name: "Cipher" };
//console.log(obj);

let person = {
  name: "John",
  email: "john@wick.com",
  age: 25,
  status: true,
  children: {
    name: "Jay"
  },
  hobbies: ['Reading', 'Writing', true, 100, null]
};

let clickName = 'name';

// console.log(person.status);  //true  
// console.log(['age']); //[ 'age' ]
// console.log(person['children']);  //{ name: 'Jay' }

// console.log(person[clickName])  //John

console.log(person);
person.country = "India";
// console.log(person);
/* {
  name: 'John',
  email: 'john@wick.com',
  age: 25,
  status: true,
  children: { name: 'Jay' },
  country: 'India'
} 
*/

console.log(typeof person.hobbies);   // Output: "object"
console.log(typeof null);  // Output: "object"

/*  
Primitive Data Types: Number, String, Boolean, Undefined
Reference Data Types: Object
*/
