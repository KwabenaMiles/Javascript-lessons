//  .map() = Accepts a callback and applies that functiion
//            to each of an array, then returns a new array.

const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map(square);

const cubes = numbers.map(cube);

console.log(cubes);

function square(element) {
  return Math.pow(element, 2);
}

function cube(element) {
  return Math.pow(element, 3);
}

const students = ["Miles", "Gideon", "Trey", "Paddiki"];

const studentsUpper = students.map(upperCase);
const studentsLower = students.map(lowerCase);
console.log(studentsLower);
console.log(studentsUpper);

function upperCase (element){
return element.toUpperCase();
}

function lowerCase(element){
  return element.toLowerCase();
}

const dates = ["2024-1-10-", "2024-4-30", "2025-05-07", "2025-10-12"];

const formattedDate = dates.map(formateDate);
console.log(formattedDate);

function formateDate(element) {
  const parts = element.split("-");
  return `${parts[1]}/${parts[2]}/${parts[0]}`;
}
