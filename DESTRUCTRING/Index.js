/*
  ================================
  Destructuring is the extract values from arrays and objects,
  then assign them to variables in a convenient way
  [] = to perform array destructions 
  {} = to perform object destruction
 =================================
*/

// -------------- Example 1 ---------
//Destructuring can be used to Swap the Values of Two Variables

let a = 1;
let b = 2;

[a, b] = [b, a]; // On the left side is destructuring, the right is creating an array



// -------------- Example 2 ---------
//We Can Swap Two Element in an Array

const colors = ["red", "green", "black", "yellow", "purple", "grey"];

[colors[0], colors[3]] = [colors[3], colors[0]];

console.log(colors);



// -------------- Example 3 ---------
//We Can Assign Array Element to Variables
// You combine Array Destructuring with Rest Parameters

const [firstColor, secondColor, thirdColor, ...extraColors]  = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);


// -------------- Example 4 ---------
//EXTRACT VALUES FROM OBJECTS

const person1 = {
  firstName: "Miles",
  lastName: "Gideon",
  age: 29,
  job: "Bolt Driving",
// 
}


const person2 = {
    firstName: "Koddy",
  lastName: "Banks",
  age: 30,
}

const {firstName, lastName, age, job = "unemployed"} = person2;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);



// -------------- Example 4 ---------
//DESTRUCTURE IN FUNCTION PARAMETERS

function displayPerson ({firstName, lastName, age, job = "Unemployed"}){
  console.log(`name: ${firstName} ${lastName}`);
  console.log(`name: ${age}`);
  console.log(`name: ${job}`);
}


displayPerson(person1);