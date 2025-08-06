for(let rep = 1; rep <= 10; rep++ ){
  console.log(`Lifting weights repetition ${rep}`);
}


let rep = 1;
while(rep <= 10){
    // console.log(`Lifting weights repetition ${rep}`);
    rep++;
}

let dice = Math.trunc( Math.random() * 6) + 1;

while ( dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc( Math.random() * 6) + 1;
  if(dice === 6) console.log('Loop is about to end...');
}

// while loop = repeat some code WHILE some Condition is true

let userName = "";

while(userName === ""  || userName === null) {
 userName = window.prompt(`Enter your name`);
}

console.log(`Hello ${userName}`);


let secUserName;

// While LOOP
do{
  secUserName = window.prompt(`Enter your name`);
}while(secUserName === ""  || secUserName === null);


let loggedIn = false;
let firstName;
let password;

while(!loggedIn){
  firstName = window.prompt(`Enter your username.`);
  password = window.prompt(`Enter your password.`)

  if(firstName === "GMiles" && password === "Mm544219679@#$") {
    loggedIn = true;
    console.log("Login Successful");
  }
  else{
    console.log("You typed the wrong details: Please try again in 5 minutes");
  }
}


// Do While Loop

let loggIn = false;
let secondName;
let pass;

do{
  firstName = window.prompt(`Enter your username.`);
  password = window.prompt(`Enter your password.`)

  if(secondName === "GMiles" && pass === "Mm544219679@#$") {
    loggIn = true;
    console.log("Login Successful");
  }
  else{
    console.log("You typed the wrong details: Please try again in 5 minutes");
  }
}while(!loggIn)
