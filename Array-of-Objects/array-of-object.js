// Array of Objects in JS
const fruits = [
  { name: "apple", color: "red", colories: "100" },
  { name: "orange", color: "orange", colories: "50" },
  { name: "banana", color: "yello", colories: "120" },
  { name: "coconut", color: "white", colories: "160" },
  { name: "pineapple", color: "yellow", colories: "40" },
  { name: "blueberry", color: "grey", colories: "80" }
]


// ------------------- ForEach() ----------------

fruits.forEach(fruit => console.log(fruit)); // This prints all the fruits


fruits.forEach(fruit => console.log(fruit.colories)); 



// ------------------- Map() ----------------

const fruitNames = fruits.map(fruit => fruit.name);
const fruitColors = fruits.map(fruit => fruit.color)
const fruitColories = fruits.map(fruit => fruit.colories);

console.log(fruitNames);
console.log(fruitColors);
console.log(fruitColories);


// ------------------- Filter() ----------------

const yellowFruit = fruits.filter(fruit => fruit.color === "yellow");
const lowCalFruit = fruits.filter(fruit => fruit.colories < 100);
const highCalFruit = fruits.filter(fruit => fruit.colories >= 100);

console.log(highCalFruit);

// ------------------- Reduce() ----------------

const maxFruit = fruits.reduce((max, fruit ) => fruit.colories > max.colories ? fruit : max);
const minFruit = fruits.reduce((min, fruit ) => fruits.colories < min.colories ? fruit : min );

console.log(minFruit.colories);