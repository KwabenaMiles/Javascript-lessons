// Spread Operator = ... allows an iterable such as an
//                      array or string to be expanded
//                      into sperate elements
//                      (unpacks the elements)

let numbers = [1, 2, 3, 4, 5];

let maximum = Math.max(...numbers);

let minimun = Math.max(...numbers);

let userName = "Gideon";
let letters = [...userName].join("-");
console.log(letters)

let fruits = ["apple", "Orange", "banana"];
let vegetables = ["carrots", "celery", "potatoes"];

let foods = [...fruits, ...vegetables, "eggs", "milk"]; // To combine two arrays

console.log(foods);
