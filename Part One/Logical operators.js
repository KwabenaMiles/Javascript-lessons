// Basic Boolean Logic: THE AND, OR & NOT OPERATORS
// Used to combine of manupulate boolean values ( TRUE OR FALSE)
// AND = &&
// OR = ||
// NOT = !

const temp = 200;

if(temp > 0 && temp <= 30 ){
  console.log("The weather is Good");
}
else {
  console.log("The weather is Bad")
}

const secTemp = -250;

if(temp <= 0 || temp > 30 ){
  console.log("The weather is Good");
}
else {
  console.log("The weather is Bad");
}

// We are checking if it's not sunny...
const isSunny = true;
if(!isSunny) {
  console.log("It's Sunny");
}
else {
  console.log("It's Cloudy");
}