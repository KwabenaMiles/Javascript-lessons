/*
========== Date Objects ==========
Date objects in JavaScript are used to work with dates and times. They can be created using the `Date` constructor, which can take various parameters to specify the date and time.
You can create a date object for the current date and time, or specify a particular date and time using different formats.
You can also manipulate date objects, such as getting the current date, setting a specific date, or formatting dates in various ways.
========== Date Objects ==========
*/

// Create a new Date object for the current date and time
const currentDate = new Date();

console.log(currentDate);

// Create a new Date object for a specific date
const specificDate = new Date(2025, 0, 1); // January 1, 2025 (months are zero-indexed)
console.log(specificDate);

// Create a Date object from a date string
const dateFromString = new Date("2025-01-01T00:00:00Z");
console.log(dateFromString);

// Get the current date and time
const now = new Date();
console.log("Current Date and Time:", now);

// Get individual components of the date
console.log("Year:", now.getFullYear());
console.log("Month:", now.getMonth() + 1);

console.log("Date:", now.getDate());
console.log("Hours:", now.getHours());
console.log("Minutes:", now.getMinutes());
console.log("Seconds:", now.getSeconds());

// Set a specific date and time
const customDate = new Date();
customDate.setFullYear(2025);
customDate.setMonth(11);
customDate.setDate(25);
customDate.setHours(10);
customDate.setMinutes(30);
customDate.setSeconds(0);
console.log("Custom Date:", customDate);

// Format the date as a string
const formattedDate = customDate.toISOString();
console.log("Formatted Date:", formattedDate);

// Compare two dates
const date1 = new Date(2023, 0, 1);
const date2 = new Date(2023, 11, 31); 
console.log("Date 1 is before Date 2:", date1 < date2);

// Calculate the difference between two dates in milliseconds
const difference = date2 - date1;
console.log("Difference in milliseconds:", difference);

// Convert milliseconds to days
const daysDifference = difference / (1000 * 60 * 60 * 24);
console.log("Difference in days:", daysDifference); 

// Fisher-Yates algorithm to shuffle an array
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
}
  
    return array;
  }

const shuffledCards = shuffleArray(cards.slice());
console.log("Shuffled Cards:", shuffledCards);

