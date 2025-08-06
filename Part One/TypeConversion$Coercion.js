// Type conversion is ability to change the datatype of a value to another.
// (strings, numbers, booleans)

let age = window.prompt("How old are you?");

console.log(typeof age);
age = Number(age);
age += 1; // This will concatenate the prompt to the string

console.log("Happy Birthday! You are", age, "years old");


let x;
let y;
let z;

x = Number("3.14");
y = String(3.14);
z = Boolean("brocolli");

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);