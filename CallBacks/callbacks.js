// Callback is a function that is passed as an argument 
//                to another function.
//              Used to handle asynchronous operations.
//               1. Reading a file
//               2. Network Requests
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


// 1. Basic callback
function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}
greet("Alice", function() {
  console.log("Greeting complete.");
});

// 2. Callback after calculation
function add(a, b, callback) {
  let sum = a + b;
  callback(sum);
}
add(3, 4, function(result) {
  console.log("Sum is:", result);
});

// 3. Array forEach with callback
[1, 2, 3].forEach(function(num) {
  console.log("Number:", num);
});

// 4. Simulate async with setTimeout
function delayed(callback) {
  setTimeout(function() {
    callback("Done waiting!");
  }, 1000);
}
delayed(function(msg) {
  console.log(msg);
});

// 5. Custom filter with callback
function customFilter(arr, callback) {
  let result = [];
  for (let item of arr) {
    if (callback(item)) result.push(item);
  }
  return result;
}
console.log(customFilter([1,2,3,4], n => n % 2 === 0)); // [2,4]

// 6. Passing callback to handle error
function divide(a, b, success, error) {
  if (b === 0) error("Cannot divide by zero");
  else success(a / b);
}
divide(10, 2, res => console.log(res), err => console.log(err));

// 7. Callback for sorting
let arr = [5, 2, 9, 1];
arr.sort(function(a, b) {
  return a - b;
});
console.log(arr);

// 8. Callback in event simulation
function onEvent(callback) {
  // Simulate event
  callback("Event triggered!");
}
onEvent(function(msg) {
  console.log(msg);
});

// 9. Callback for mapping
function customMap(arr, callback) {
  let result = [];
  for (let item of arr) {
    result.push(callback(item));
  }
  return result;
}
console.log(customMap([1,2,3], n => n * 2)); // [2,4,6]

// 10. Callback for finding an item
function find(arr, callback) {
  for (let item of arr) {
    if (callback(item)) return item;
  }
  return undefined;
}
console.log(find([1,2,3,4], n => n > 2)); // 3