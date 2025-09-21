// Constructor = special method for defining the 
//              properties and methods of an objects



// Constructor Function 
//In JavaScript, you use the new keyword to create a new instance of an object from a constructor function or a class 

function Car (make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.drive = function(){console.log(`Your model is ${this.model} and the year is ${this.year}`)}
}

// Our Car Constructor is reusable method where we can define the properties
// and methods of objects we create.
// To use the constructor create an instance of an object with the NEW keyword and add the name of the constructor

const car1 = new Car ("Toyota", "Yaris", 2007, "blueblack");
const car2 = new Car ("Ford", "GT40", 1986, "blue" )

car1.drive();

car2.drive();