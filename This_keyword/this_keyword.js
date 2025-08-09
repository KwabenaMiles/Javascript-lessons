// This = reference to the object where THIS is used
//       (the object depends on the immediate context)
//        person.name = this.name.

// THIS keyword doesn't work with Arrow function () => {}


const person1 = {
  fName: "Miles",
  lName: "Gideon",
  favFood: "fufuo",
  sayHello: function (){
    console.log(`Hello my name is ${this.fName} ${this.lName}. `)},
    eat: function(){console.log(`My favorite food is ${this.favFood}.`)}
}

person1.sayHello();
person1.eat();


const person2 = {
  fName: "Trey",
  lName: "Krek",
  favFood: "pizza",
  sayHello: function (){
    console.log(`Hello my name is ${this.fName} ${this.lName}. `)},
    eat: function(){console.log(`My favorite food is ${this.favFood}.`)}
}


person2.sayHello();
person2.eat();


// ...existing code...

// Example 1: Using this in a method
const car = {
  brand: "Toyota",
  model: "Corolla",
  showInfo: function() {
    console.log(`Car: ${this.brand} ${this.model}`);
  }
};
car.showInfo();

// Example 2: Using this in a constructor function
function Animal(type, sound) {
  this.type = type;
  this.sound = sound;
  this.speak = function() {
    console.log(`The ${this.type} says ${this.sound}`);
  };
}
const dog = new Animal("dog", "woof");
dog.speak();

// Example 3: Using this in an event handler (browser only)
const button = {
  label: "Click Me",
  click: function() {
    console.log(`Button label is: ${this.label}`);
  }
};
button.click();

// Example 4: Using this with call()
function greet() {
  console.log(`Hello, ${this.name}`);
}
const user = { name: "Alice" };
greet.call(user);

// Example 5: Using this in a nested object
const company = {
  name: "TechCorp",
  employee: {
    name: "Bob",
    introduce: function() {
      console.log(`Hi, I'm ${this.name} from ${company.name}`);
    }
  }
};
company.employee.introduce();