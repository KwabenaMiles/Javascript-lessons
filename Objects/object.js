/*
  ====================================
  Object = A collection of related properties and / or methods
          Can represent world objects (people, products, places)
          object = {key:value,
                    function()}
  ====================================

*/

// OBJECTS

const person1 = {
  firstName: "Miles",
  lastName: "Gideon",
  age: 29,
  homeTown: "Kumasi",
  heLikes: "computers",
  isEmployed: false,
  sayHello: function () {
    console.log(
      `My name is ${this.firstName} ${this.lastName} a ${this.age} year old programmer. I come from ${this.homeTown} and ${this.heLikes} is what I like the most.`
    );
  },
};

person1.sayHello();

const person2 = {
  fName: "Abigail",
  lName: "Adomako",
  year: 28,
  isEmployed: false,
  Introduce: () => console.log(`Hey welcome to my house!`),
  eat: () => console.log("Please sit and eat something."),
};

person2.Introduce();
person2.eat();

const firstUser = {
  firstName: "Gideon",
  lastName: "Miles",
  age: 29,
  location: "New York",
  workType: "Front-End Developer",
  isTall: true,
  sayFavQuote: () => console.log("Fave Quote of all time."),
  eat: () => console.log("I'm eating my fav dish"),

  
};
