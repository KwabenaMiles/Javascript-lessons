// = assignment operator

// == comparision operator / doesn't care about data type only the value.

// === strict equality operator

// != not equal to or inequality operator

// !== strict inequality operator

//  == comparision operator doesn't care about data type only the value.
const PI = 3.14;

if (PI == "3.14") {
  console.log("That is PI.");
} else {
  console.log("That is not PI");
}

// === strict equality operator strictly cares about data type and the value.

const averaGrade = 90;

if (averaGrade === "90") {
  console.log("You passed!");
} else {
  console.log("Failed.");
}

// =! not equal to or inequality operator doesn't care about data type only the value.

const maxGrade = 85;

if (maxGrade != "85") {
  console.log("You didn't pass.");
} else {
  console.log("You passed.");
}

// ==! strict inequality operator strictly cares about data type and the value.

const capCity = "Accra";

if (capCity !== "Kumasi") {
  console.log("You named a different capital city.");
} else {
  console.log("Your capital city is Accra");
}
