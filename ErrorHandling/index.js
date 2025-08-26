// Error = An object that is created to represent a problem that occurs during the execution of a program.
// Error Handling = The process of responding to the occurrence of errors in a program, allowing the program to continue running or to fail gracefully.
// Occur often with the user input or establishing a connection to a server.
// Try {} = A block of code that is executed to attempt an operation that may fail.
// Catch{} = A block of code that is executed if an error occurs in the try block, allowing the program to handle the error gracefully.
// Finally{} = A block of code that is executed after the try and catch blocks, regardless of whether an error occurred or not.

try {
  console.log("This is a try block");
  // NETWORK REQUEST
  //PROMISE REJECTION
  //SECURITY ERRORS
}
catch (error) {
  console.error(error);
 
}

finally {
  //CLOSE FILES
  //CLOSE CONNECTIONS
  //RELEASE RESOURCES
  console.log("This is a finally block");
}

console.log("You have reached the end of the program");