// Arrays = A variable like structure that can hold
//        more than 1 value

let fruits = ["apple", "orange", "grapes", "blueberry"];

fruits.push("coconut"); // add element to the end of the array.

fruits.pop(); // Removes the last elements
fruits.unshift("mangoes"); // Adds elements to the beginning of the array.
fruits.shift(); // Removes elements from the beginning

fruits.sort(); // Sorting through an array.
fruits.sort().reverse(); // To sort them in reverse order

let numOfFruits = fruits.length;

let index = fruits.indexOf("orange"); // checks the index position of the element.

// If you want to loop through the array.

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Shortcut

for (let fruit of fruits) {
  console.log(fruit);
}
