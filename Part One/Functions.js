// Function = A section of reusable code.
// You declare once, and use it whenever you want.
// Call the function to execute that code

function happyBirthDay(username, age){ // You need a matching set of parameters
  console.log("Happy birthday to you!");
  console.log("Happy birthday to you!");
  console.log(`"Happy birthday dear ${username}`);
  console.log(`You are ${age} years old`);
}

happyBirthDay("Miles", 29); // These are know as arguments
happyBirthDay("Gideon", 30);


function add(x, y){
  let result = x + y; 

  return result;
}

let answer = add(2, 8);
console.log(answer);
console.log(add(2, 8));

// Shortcut
function add(x, y){
  return x + y;
}
console.log(add(2, 8));

function subtract (x, y){
  return x - y;
}
console.log(subtract(2, 8));

function multiply(x, y){
  return x * y;
}
console.log(multiply(2, 8));

function divide (x, y){
  return x / y;
}
console.log(divide(2, 8));


// Function to see if number is EVEN
function isEven(number){
  if(number % 2 === 0){
    return true;
  }
  else {
    return false;
  }
}

console.log(isEven(40));



function isEven(number) {
  return number % 2 === 0 ? true : false; // Tenary shortcut
}
console.log(isEven(40));


// Function to see if email is valid

function isValidEmail (email){
  if(email.includes("@")){
    return true;
  }
  else{
    return false;
  }
}


console.log(isValidEmail("gideon_a70@aol.com"))

// Using the Tenary Operator

function isValidEmail(email){
  if(email.includes("@")){
    return email.includes("@") ? true : false;
  }
}


function fruitProcessor(apples, oranges){
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(5, 0);
console.log(appleOrangeJuice);
