// toLocalString() = returns a string with a language-sensitive representation of a  number
// Intl.NumberFormat()
// number.toLocaleString( "locale", {options})
// locale = specifies the language to use, such as "en-US" or "fr-FR"
// options = an object with options for formatting, such as style, currency, minimumFractionDigits, etc.


let number = 1234567.89;

number = number.toLocaleString("en-US");

console.log(number); // "1,234,567.89"

let number2 = 1234567.89;

number2 = number2.toLocaleString("fr-FR");
console.log(number2); // "1 234 567,89"

let number3 = 1234567.89;
number3 = number3.toLocaleString("hi-IN");
console.log(number3); // "1.234.567,89"

let number4 = 1234567.89;
number4 = number4.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
console.log(number4); // "1.234.567,89 €"

let number5 = 1234567.89;
number5 = number5.toLocaleString(undefined);
console.log(number5); // "Undefined"

let number6 = 1234567.89;
number6 = number6.toLocaleString("en-US", { style: "currency", currency: "USD" });
console.log(number6); // "$1,234,567.89"