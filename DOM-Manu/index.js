// DOM = Document Object Model
// Object{} that represents the page you see in the browser
// and provides you with an API to manipulate it
// Web Browswer constructs the DOM when it loads and HTML Document
// and structures all the elements into a tree of objects representing the elements
// JavaScript can access the DOM to Dynamically change the content, structure and styles of a web page.

document.title = "DOM MANIPULATION";

const userName = "Miles";
const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent += userName === "" ? "Guest" : userName;
