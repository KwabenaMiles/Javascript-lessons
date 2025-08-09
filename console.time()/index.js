/*
  =========================
  Console.time() = tool that allows you to measure the time it takes for a section of 
  code to process or execute.

  Great for identifying performance "bottlenecks" in your code.

  console.time("label"); - Starts a timer with the specified label.
  console.timeEnd("label"); - Stops the timer with the specified label and logs the elapsed time.
  If you call console.timeEnd() without a matching console.time(), it will throw an error.
  =========================

*/

function loadData() {
  // Simulate a delay to mimic data loading
  console.time("loadData");
  for (let i = 0; i < 1000000000; i++) {
    // This loop is just a placeholder for a time-consuming operation
  }

  console.timeEnd("loadData");
}


function processData() {
   // Simulate a delay to mimic data processing
  console.time("processData");
  for (let i = 0; i < 500000000; i++) {
    // This loop is just a placeholder for a time-consuming operation
  }

  console.timeEnd("processData");
}
 
processData();
loadData();


function run() {
  console.time("run");
  loadData();
  processData();
  console.timeEnd("run");
}

run();

// Note: The above functions simulate time-consuming operations using loops.
// In a real-world scenario, you would replace these with actual data loading and processing logic.

// If you want to see the time taken for each individual function, you can call them separately as shown above.
// The total time for the run function will include the time taken by both loadData and processData.   

// example 4

function example4() {
  console.time("example4"); 
  for (let i = 0; i < 1000000000; i++) {
    // Simulating some work
  } 

  console.timeEnd("example4");
}

example4(); // This will log the time taken for the example4 function

