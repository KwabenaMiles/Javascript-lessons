// function declaration = define a reusable block of code 
//                        that perform a specific task
//          

function getMaxNumber(){} // Function Declaration


// function expressions = a way to define functions as
//                       values or variables.


const getMinNumber = function (){} // Function Expression

const numbers = [1, 2, 3, 4, 5, 6, 7,];

const squares = numbers.map(square);

console.log(squares);


function square(element){
return Math.pow(element, 2);

}

//The above code can also be written as

const newNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];


const newSquare = newNumbers.map(function(element){
  return Math.pow(element, 3);
});


console.log(newSquare);


const firstNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const newCubes = firstNumbers.map(function(element){
  return Math.pow(element, 3)
}
);

console.log(newCubes);



const evenNums =  [1, 2, 3, 4, 5, 6, 7, 8, 9];

const isEven = evenNums.filter(function(element){
  return element % 2 === 0;
}
) 
 console.log(isEven);


const isOdd = evenNums.filter(function(element){
  return element % 2 !== 0
});

  console.log(isOdd);

  const total = evenNums.reduce(function(accumulator, element){
  return accumulator + element
});

  console.log(total);