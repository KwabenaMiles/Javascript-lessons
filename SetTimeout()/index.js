/* =====================
  setTimeout()  = function
  =====================
  This code demonstrates the use of setTimeout() to delay the execution of a function. 
  
  Funtion setTimeout() is used to execute a function after a specified number of milliseconds.

  setTimeout( callback, delay, );

  clearTimeout() can be used to cancel a timeout that has been set with setTimeout().
  =====================
*/

function greet() {
  console.log("Hello, World!");
}
setTimeout(greet, 5000); // Executes greet after 2 seconds

setTimeout(function () {
  window.alert("This is a delayed alert!");
}, 3000); // Executes after 3 seconds

setTimeout(() => {
  console.log("This is a delayed message using an arrow function!");
}, 5000); // Executes after 2 seconds

function startTimer() {
  setTimeout(() => {
    window.alert("Hello!");
  }, 5000); // Executes after 2 seconds
}

let timeoutId;

function endTimer() {
  endTimer = setTimeout(() => window.alert("Hello NY"), 3000); // Cancels the timer set by startTimer
  console.log("Timer started, will alert in 30 seconds");
}

function clearTimeout() {
  clearTimeout(timeoutId); // Cancels the timer set by startTimer
  console.log("Timer cleared, no alert will be shown");
}
