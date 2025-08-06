// Tenary operator = a shortcut to if{} and else{} statements
//                  helps to assign a variable based on a condition
//                  condition ? codeIfTrue: codeIfFalse;

/*
let age = 17;

let message = age >= 17 ? "You are an adult." : "You not old enough";

console.log(message);

// It is the same as writing something like this

let newAge = 21;

let result; // Const variables can never be empty like const result;

if (newAge >= 21) {
  result = "You are old enough.";
} else {
  (" You are a minor.");
}
  
*/

// let time = 16;

// let greeting = time < 12 ? "Good morning!" : "Good afternoon!";

// console.log(greeting);

// let isStudent = true;

// let message = isStudent
//   ? "You qualify for 6 months of premium."
//   : "Kindly subscribe with your paymemt method.";
// console.log(message);

let purchaseAmount = 150;

let discount = purchaseAmount >= 130 ? 10 : 0;
console.log(
  `Your total $${purchaseAmount - purchaseAmount * (discount / 100)}  `
);
