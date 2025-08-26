// Synchronous = execute line by line consecutively in a subsequent manner
//               Code that waits for the previous line to finish before executing the next one


// Asynchronous = Allows munltiple operations to run concurrently without waiting
//               doesn't block the execution flow and allows the program to continue running
//               (input/Output operations, network requests, fetching data.)
//               Handled with: Callbacks, Promise, Async/Await



// Example of Synchronous code
function func1 (callback){
  setTimeout(() => {console.log("Task 1"); callback()}, 3000) 

}
 



function func2(){
console.log("Task 1");
console.log("Task 2");
console.log("Task 3");
console.log("Task 4");
 
}


func1(func2);

