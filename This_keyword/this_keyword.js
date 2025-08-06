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