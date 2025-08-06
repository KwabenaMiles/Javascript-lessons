// Callback is a function that is passed as an argument 
//                to another function.
//              Used to handle asynchronous operations.
//               1. Reading a file
//               2. Netword Requests
//               3. Intereacting with databases


// hello(wait);


function hello(callback){
  console.log("Hello");
  callback();
}

function wait(){
  console.log(wait);
}

function leave() {
  console.log(leave);
}

function goodbye(){
  console.log("Good bye");
}

sum(displayConsole, 1, 2)

function sum(callback, x, y){
  let result = x + y;
  callback(result);
}

function displayConsole(result){
  console.log(result)
}