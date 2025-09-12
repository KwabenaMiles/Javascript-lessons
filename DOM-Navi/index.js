// Dom Navigation = The process of navigating through the structure of an 
// HTML documnet using JavaScript.


// .firstElementChild
// .lastElementChild
// .nextElementChild
// .previousElementSibling
// .parentElement
// .children


//------------- .firstElementChild -------------------
const element = document.getElementById("fruits");
const firstChild = element.firstElementChild;
firstChild.style.color = "black";
firstChild.textContent = "Grapes"


// -------------- .querySelectorAll----------------
const ulElement = document.querySelectorAll("ul");
ulElement.forEach(ulElement => {
    const firstChild = ulElement.firstElementChild;
    firstChild.style.backgroundColor = "yellow"
  
});


// ----------------- .lastElementChild ------------------

const ulLastElement = document.querySelectorAll("ul");
ulLastElement.forEach(ulLastElement => {
  const lastElementChild =  ulLastElement.lastElementChild;
  lastElementChild.style.backgroundColor = "pink";
  lastElementChild.textContent = "waakye"
});


// -------------------- .children --------------

const childElement = document.getElementById("desserts");
const children = childElement.children;

// HTML COLLECTION DON'T HAVE BUILT IN forEach METHOD
// You've have to type cast is as an array[]

Array.from(children).forEach(child => {
  child.style.backgroundColor = "green"
});


// ADD/CHANGE HTML

// ---------------- Example 1 --------------

// STEP 1 CREATE THE ELEMENT

const newH1 = document.createElement("h1");
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

// STEP 2 ADD ATTRIBUTES/PROPERTIES

newH1.textContent = "Welcome to the new World";

// STEP 3 APPEND ELEMENT TO DOM
// document.body.append(newH1);
document.body.prepend(newH1);
document.getElementById("box1").append(newH1);
// REMOVE HTML ELEMENT