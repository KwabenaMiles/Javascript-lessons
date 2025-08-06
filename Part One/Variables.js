let js = "amazing";
if (js === "amazin") {
  alert("JavaScript is fun");
}
let firstName = "Miles";
console.log(firstName);

let lastName = "Gideon";
let personFirstShooter = "Grinder";
let PI = 3.1315;
const grindLocation = "Tech";

let myFirsJob = "Salesman";
let mySecondJob = "Sell";
console.log(myFirsJob);

let firstName2 = "Miles";
let favoriteFood = "Rice";
let email = "lingomosaic@gmail.com";

console.log(`Your name is ${firstName2}`);

console.log(`You like ${favoriteFood}`);
console.log(`Your email is ${email}`);

let online = false;
console.log(`Miles is online: ${online}`);

let forSale = true;
console.log(`Is this car for sale: ${forSale}`);

let isStudent = true;

console.log(`Is he a student? ${isStudent}`);
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).

Your task is to write some code to help them:

Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

Log the value of BMIMark and BMIJohn to the console.

BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too

TEST DATA 1: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.



👋 OPTIONAL: You can watch my solution in video format in the next lecture



IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2).
*/

// BMI = mass / (height * height) (mass in kg and height in meters)

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);

let a = [1, 2, 3, 4, 5, 6];

var left = 0,
  right = 5;
var found = false;
var target = 5;
while (left <= right) {
  var mid = Math.floor((left + right) / 2);
  if (a[mid] == target) {
    found = true;
    break;
  } else if (a[mid] < target) {
    left = mid + 1;
  } else {
    right = mid - 1;
  }
  if (found) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
