// Closure functions
// This file contains various closure functions that demonstrate how closures work in JavaScript.
// A closure is a function that has access to its own scope, the outer function's scope, and the global scope.

// Example 1: Simple closure
function makeCounter() {
  let count = 0; // This variable is private to the closure
  return function () {
    count += 1; // Accessing the private variable
    return count; // Returning the updated count
  };
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter());

function outer() {
  let message = "Hello, World!";

  function inner() {
    console.log(message); // Accessing the outer function's variable
  }
  inner(); // This will log "Hello, World!"
}

outer().inner(); // This will throw an error because inner is not accessible outside outer

// Example 2: Closure with parameters

function createCounter() {
  let count = 0; // This variable is private to the closure

  function incementer() {
    count++;
    console.log(`Count increased to ${count}`); // Accessing the private variable
  }
  return { incementer };
}

const myCounter = createCounter();
console.log(myCounter.incementer()); // Count increased to 1
console.log(myCounter.incementer()); // Count increased to 2
// console.log(myCounter.count); // This will be undefined because count is private

// Example 3: Closure with a global variable
// This example demonstrates how closures can access and modify a global variable.
// Global variable
// Note: Using global variables is generally discouraged in modern JavaScript, but this example is for educational purposes.

let score = 0;

function incrementScore(points) {
  score += points;
  console.log(`+${score}pts`); // Accessing the global variable
}

function decrementScore(points) {
  score -= points;
  console.log(`+ ${score}pts`); // Accessing the global variable
}

function getScore() {
  return score; // Accessing the global variable
}

incrementScore(10); // +10pts
decrementScore(5); // +15pts
decrementScore(3);

// ...existing code...

// Example 3: Closure for data privacy
function secretHolder(secret) {
  return {
    getSecret: function () {
      return secret;
    },
    setSecret: function (newSecret) {
      secret = newSecret;
    },
  };
}
const mySecret = secretHolder("JavaScript");
console.log(mySecret.getSecret()); // JavaScript
mySecret.setSecret("Closures");
console.log(mySecret.getSecret()); // Closures

// Example 4: Closure for partial application
function multiply(a) {
  return function (b) {
    return a * b;
  };
}
const double = multiply(2);
console.log(double(5)); // 10

// Example 5: Closure in a loop (with let)
function buildFunctions() {
  let arr = [];
  for (let i = 0; i < 3; i++) {
    arr.push(function () {
      console.log(i);
    });
  }
  return arr;
}
const funcs = buildFunctions();
funcs[0](); // 0
funcs[1](); // 1
funcs[2](); // 2

// Example 6: Closure for memoization
function memoizeAdd() {
  let cache = {};
  return function (num) {
    if (cache[num]) {
      console.log("Fetching from cache");
      return cache[num];
    } else {
      console.log("Calculating result");
      let result = num + 10;
      cache[num] = result;
      return result;
    }
  };
}
const add = memoizeAdd();
console.log(add(5)); // Calculating result 15
console.log(add(5)); // Fetching from cache 15

// Example 7: Closure for event handler (browser only)
// function setupButton() {
//   let count = 0;
//   document.getElementById("myBtn").onclick = function() {
//     count++;
//     alert(`Clicked ${count} times!`);
//   };
// }
//
