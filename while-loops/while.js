// While loop = repeat some code WHILE some CONDITION IS TRUE
// While loop = literally keeps the code running until the condition is met.

// let userName = " ";

// while (userName === " " || userName === null) {
//   userName = window.prompt("Enter your username.");
// }

// console.log(`Hello ${userName}`);

let loggedIn = false;

let profileName;

let password;

while (!loggedIn) {
  profileName = window.prompt("Enter your username.");
  password = window.prompt("Enter your password.");

  if (profileName === "profileName" && password === "mypassword") {
    loggedIn = true;
    console.log("You are logged in!");
  } else {
    console.log("Invalid credentials! Please try again.");
  }
}


// Example 1: Counting from 1 to 5
let i = 1;
while (i <= 5) {
  console.log(`Count: ${i}`);
  i++;
}

// Example 2: Sum numbers until user enters 0
let sum = 0;
let num = parseInt(window.prompt("Enter a number (0 to stop):"));
while (num !== 0) {
  sum += num;
  num = parseInt(window.prompt("Enter a number (0 to stop):"));
}
console.log(`Total sum: ${sum}`);

// Example 3: Guess the secret number
const secret = 7;
let guess = parseInt(window.prompt("Guess the secret number (1-10):"));
while (guess !== secret) {
  guess = parseInt(window.prompt("Wrong! Try again:"));
}
console.log("Correct!");

// Example 4: Print even numbers less than 10
let even = 0;
while (even < 10) {
  if (even % 2 === 0) {
    console.log(`Even: ${even}`);
  }
  even++;
}

// Example 5: Countdown from 5 to 1
let countdown = 5;
while (countdown > 0) {
  console.log(`Countdown: ${countdown}`);
  countdown--;
}
console.log("Blast off!");