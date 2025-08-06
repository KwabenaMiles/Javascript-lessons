// .filter() = create a new array by filtering 
//            out elements.


let numbers = [1, 2, 3, 4, 5, 6, 7,];

let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);


console.log(oddNums);

function isEven (element){
  return element % 2 === 0;
}


function isOdd (element){
  return element % 2 !== 0;
}

const ages = [16, 17, 18, 18, 20, 50, 80];

const adult = ages.filter(isAdult);

const children = ages.filter(isChild);

console.log(children);

console.log(adult);

function isAdult(element){
  return element >= 18;
}


function isChild(element) {
  return element < 18;
}

const words = ["apples", "orange", "banana", "kiwi", "pomegranate", "coconut", "blueberry"];

const shortWord = words.filter(getShortWords);

const longWords = words.filter(getLongWords);

console.log(longWords);

console.log(shortWord);

function getShortWords(element){
  return element.length <= 6;
}


function getLongWords(element){
  return element.length > 6;
}