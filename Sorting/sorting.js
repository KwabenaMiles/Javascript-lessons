// Sort() = Method used element of an array in place.
//          Sort elements as strings in lexicographic order, not alphabetical
//          Lexicographical = (alphabet + numbers + symbols ) as strings


// let numbers = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6,];

// numbers.sort((a, b) => a - b);

// console.log(numbers);


const people = [
  {name: "Miles", age: 29, gpa: 3.6},
  {name: "Gideon", age: 33, pga: 4.1},
  {name: "Gideon", age: 30, pga: 4.0},
  {name: "Paddiki", age: 27, gpa: 3.8},
  {name: "Migos", age: 25, gpa: 3.3}
]

people.sort((a, b) => a.name.localeCompare(b.age));

console.log(people);