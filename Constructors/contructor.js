// Constructor = special method for defining the 
//              properties and methods of an objects



// Constructor Function 

function Car (make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.drive = function(){console.log(`Your model is ${this.model} and the year is ${this.year}`)}
}



const car1 = new Car ("Toyota", "Yaris", 2007, "blueblack");
const car2 = new Car ("Ford", "GT40", 1986, "blue" )

car1.drive();

car2.drive();