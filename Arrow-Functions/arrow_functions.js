// Arrow functions = a concise way to write function expressions
//                    good for simple functions that you use only once
//                    (parameter) => some code.

// function hello(){
//   console.log("Hello");
// }

// hello();

// const hello = function(){
//   console.log("Hello");
// };

// More concise with arrow function
const hello = (name) => {
  console.log("Hello" + `${name}`);
};

hello(" Miles");

// Within your code, if you need to include more than one statement, you can wrap the statements in curly braces { } and use a return statement to return a value:

// const hello2 = (name, age) => {
//   console.log(`Hello + ${name}`)
//   console.log(`Your age is  + ${age} years old`);
// };

// hello2(" Miles", 30);

setTimeout(hello, 3000);

function hello() {
  console.log("Hello World");
} // This function accepts a callback function that will run after 2 seconds (2000 milliseconds)

// We can also write the above function as an arrow function
setTimeout(() => {
  console.log("Hello World");
}, 4000);

// Use Arrow Functions with Map() Filter() Reduce()

// Map = takes an array and modifies each item in the array
//       returns a new array of the same length

const numbers = [1, 2, 3, 4, 5, 6];
const square = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 3));
const evenNumbers = numbers.filter((element) => element % 2 === 0);
const oddNumbers = numbers.filter((element) => element % 2 !== 0);
const sum = numbers.reduce((accumulator, element) => accumulator + element);

console.log(sum);
