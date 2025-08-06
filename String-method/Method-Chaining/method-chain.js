// Method Chaining = Calling one method after another
//          in one continous line of code

const { useReducer } = require("react");

let userName = window.prompt("Enter your username.");

// ------ No Method Chaining---

userName = userName.trim();
let letter = userName.charAt(0);

letter = letter.toUpperCase();

let extraChars = userName.slice(1);
extraChars = extraChars.toLocaleLowerCase();
userName = letter + extraChars;

console.log(userName);

// ------ METHOD CHAINING-----

userName =
  userName.trim().charAt(0).toUpperCase() +
  userName.trim().slice(1).toLocaleLowerCase();

console.log(userName);
