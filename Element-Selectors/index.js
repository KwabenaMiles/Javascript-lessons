/*
================================
Element Selectors = Methods used to target and manipulate HTML elements in the DOM.
                    They allow you to select one or more HTML elements
                    from the DOM(Document Object Model) based on various criteria
                    such as tag name, class name, ID, attributes, or their position
================================

1. document.getElementById(): Selects a single element by its unique ID.
2. document.getElementsByClassName(): Selects all elements with a specific class name.
3. document.getElementsByTagName(): Selects all elements with a specific tag name.
4. document.querySelector(): Selects the first element that matches a specified CSS selector.
5. document.querySelectorAll(): Selects all elements that match a specified CSS selector.

*/

const myHeading = document.getElementById("my-heading");

myHeading.textContent = "Hello World!";
myHeading.style.backgroundColor = "blue";
myHeading.style.textAlign = "center";

const fruits = document.getElementsByClassName("fruits");
fruits[0].style.color = "yellow";
fruits[1].textContent = "Grapes";
fruits[1].style.fontSize = "18px";
fruits[1].style.fontWeight = "bold";

for (let fruit of fruits) {
  fruit.style.backgroundColor = "lightgray";
}

Array.from(fruits).forEach((fruit) => {
  fruit.style.backgroundColor = "lightgray";
});