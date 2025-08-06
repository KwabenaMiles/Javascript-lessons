/*

Logical Operators = used to combine or manupulate boolean values (True / False Values)
AND = && Check if both sides of the condition are true
OR = || Checks if one side of the condition is true
NOT = !  This changes true to be false and false to be true.



*/

// AND && OPERATOR
const temp = 25;

if (temp > 0 && temp <= 30) {
  // To join two conditions you use && and it check if both sizes are true to run the code.
  console.log("The weather is pretty great.");
} else {
  console.log("The weather is BAD.");
}

// || OPERATOR
const temperature = 100;

if (temperature <= 0 || temperature > 50) {
  console.log("Nice weather.");
} else {
  console.log("It's pretty hot here.");
}

// NOT!

const isSunny = true;

if (!isSunny) {
  console.log("Nice weather.");
} else {
  console.log("The weather is way too hot.");
}
