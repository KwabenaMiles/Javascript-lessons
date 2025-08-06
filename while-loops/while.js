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
