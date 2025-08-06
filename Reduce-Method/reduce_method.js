// .reduce() = reduces the element of an array to
//             to a single value.


const prices = [20, 10, 15, 50, 30, 100, 40];

const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`);


function sum(accumulator, element){
  return accumulator + element;
}


const grades = [60, 80, 96, 45, 74, 85, 40, 50, 76, 77, 80];

const maxGrade = grades.reduce(getMaxGrade);

console.log(maxGrade);


function getMaxGrade (accumulator, element){
  return Math.max(accumulator, element);
}


const minGrade = grades.reduce(getMinGrade);

console.log(minGrade);

function getMinGrade (accumulator, element){
  return Math.min(accumulator, element);
}