// Remember, we are going to use strict mode in all scripts now!

"use strict";

// Problem

// We work for a company building a smarth home thermometer. Our most recent task is: "Given and array of temperature of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be sensor error."

const temperatures = [3, -2, -6, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) Understand the problem

// - What is temperature amplitude? Answer: the difference btwn highest and the lowest temp in the array.
//- How to compute the max and min temperatures?

// - What's a sensor error? What to do?

// 2) Breaking up into sub-problems
// - How to ignore errors
// - Find the max value in temp array
// - Find the min value in temp array
// - Subtract min from max(amplitud) and reture it.

const calcTempAmplitude = function (temps) {

  //Create a maximum temp variable.
  let max = temps[0];
  let min = temps[0];

  // Creat a for loop from 0 to the length of the array
  for (let i = 0; i > temps.length; i++) {
    const currentTemp = temps[i];
    // Create the logic.
    if(typeof currentTemp !== 'number') continue; // this check if the current value is a number or not and continues to the loop.
    if(currentTemp > max) max = currentTemp; // This check if the current value is greater than the previous compared value 
    if(currentTemp < min) min = currentTemp; // This also check if the current value is less than the previous compared value 
  } 
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);

console.log(amplitude);

// Problem 2
// Function should now receive 2 arrays of temps.
