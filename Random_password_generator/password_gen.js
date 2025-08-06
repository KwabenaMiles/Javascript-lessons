"use strict";

// RANDOM PASSWORD GENERATOR

/*
    ===================
    STEP TWO: Create The Function to Generate Password and Pass In All The Constants & Password Length as Argument
    ===================
*/
function generatePassword(
  length,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols
) {
  /*
    ===================
    STEP Five: Create the Create list of all of the keyboard keys and save in a contants lowerCase, upperCase, numbers and symbols.
    ===================
*/
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "123456789";
  const symbolsChars = "!@#$%^&*_+{}[]";

  /*
    ===================
    STEP Six: Create a variable for Allowed Characters and password all equal empty string.
    ===================
*/
  let allowedChars = "";
  let password = "";

  /*
    ===================
    STEP Seven: If some of these consts are true, take that corresponding set of Characters and concatenate it to the allowed strings. Use the tenary operator (?) to check if includeLowerCase is (True/Flase)
    ==================
*/
  allowedChars += includeLowercase ? lowercaseChars : "";
  allowedChars += includeUppercase ? upperCaseChars : "";
  allowedChars += includeNumbers ? numberChars : "";
  allowedChars += includeSymbols ? symbolsChars : "";

  /*
    ===================
    STEP Eight: Check to see if the password length is zero or less than zero.
    ===================
*/
  if (length <= 0) {
    return `(Password length must be at least 1)`;
  }

  if (allowedChars.length === 0) {
    return `At least 1 set of character needs to be selected`;
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

  /*
    ===================
    STEP Three: Write the Keyword Return, to return the password
    ===================
*/

  return password;
}

/*
    ===================
    STEP ONE: Create The Length of The Password And Boolean Valus To Include Upper, Numbers and lower case Characters and Symbols.
    ===================
*/
const passwordLength = 20;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

/*
    ===================
    STEP Four: Call or Invoke the function, pass in all the consts and save in a variable
    ===================
*/
const password = generatePassword(
  passwordLength,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols
);

console.log(password);
