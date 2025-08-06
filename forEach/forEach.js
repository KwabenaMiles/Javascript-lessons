/*
    ===========
    forEach = method used to iterate over the elements of an array and apply a
    specific function (callback) to each element
    
    array.forEach(callback)

    element, inde, array are provided.
    ===========
*/

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// numbers.forEach(square);
// numbers.forEach(tripple);
// numbers.forEach(double);
// numbers.forEach(display);

// function double (element, index, array){
//   array[index] = element * 2;
// }

// function tripple (element, index, array) {
//   array[index] = element * 3;
// }

// function square (element, index, array) {
//   array[index] = Math.pow(element, 2);
// }

// function display(elements) {
//   console.log(elements);
// }

let fruits = ["apple", "orange", "grapes", "banana", "blueberry"]; // Step one

fruits.forEach(lowerCase); // Step 3
fruits.forEach(upperCase);

fruits.forEach(display);

function upperCase(element, index, array) {
  array[index] = element.toUpperCase();
}

function lowerCase(element, index, array) {
  array[index] = element.toLowerCase();
} // Step 2

function capitalize(element, index, array) {
  array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

function display(element) {
  console.log(element);
}
