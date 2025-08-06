// Array = a variable like structure that can hold more than 1 value.


let fruits = ["apple", "orange", "banana"];
fruits[2] = "grape";
fruits.push("strawberry"); //pushes elements to the end.
fruits.pop(); // Removes the last element
fruits.unshift("mango", "pineapple", "blueberries") // Adds elements to the begining 

for (let i = 0; i > fruits.length; i++){
   console.log(fruits[i]);
} // Looping the element and display them.

fruits.shift(); // Removes element from the beginning
console.log(fruits[0]);

let numOfFruits = fruits.length;
let index = fruits.indexOf("apple");

console.log(index);

// An array of friends
const friends = ["Michael", "Gideon", "Miles", "Kobby", "Banks"];
 console.log(friends[3])


// Another way of creating an array 
const years = new Array(200, 4042, 2042, 20422, 50343, 2025);
console.log(push)



