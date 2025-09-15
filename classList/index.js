/*
==========================
ClassList = Element property in JavaScript used to interact with
            an element's list of classes. (CSS classes)
            allows you to make resuable classes for many elements
            across your HTML document.

add()       - adds a class to an element
remove()    - removes a class from an element
toggle()    - toggles a class on or off
contains()  - checks if an element contains a specific class
==========================

*/

// const myButton = document.getElementById("myButton");
// // myButton.classList.add("enabled");

// myButton.addEventListener("mouseover", (e) => {
//   e.target.classList.add("hover");
// });

// myButton.addEventListener("mouseout", (e) => {
//   e.target.classList.remove("hover");
// });

// myButton.addEventListener("click", (e) => {
//   if (e.target.classList.contains("enabled")) {
//     e.target.classList.replace("enabled", "disabled");
//   } else {
//     e.target.classList.replace("disabled", "enabled");
//   }
//   myButton.target.classList.replace("enabled", "disabled");
//   // myButton.target.classList.toggle("enabled");
// });

let buttons = document.querySelectorAll("myButtons");
buttons.forEach(button => {
  button.classList.add("enabled");
 
});