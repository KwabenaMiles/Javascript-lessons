/* 
  =======================
  Nested Objects = Objects inside of other Objects.
  Allows you to represent more complex data structures
  Child Object is enclosed by a Parent Object

  Person{Address{}, ContactInfo{}}
  ShoppinCart{Keyboard{}, Mouse{}, Monitor{}}
  =======================

*/

const Person = {
  fullName: "Gideon Miles",
  isStudent: false,
  hobbies: ["video games", "Computers", "Cooking", "Walking"],
  address: {
    street: "Charles Junction",
    city: "Kumasi",
    country: "Ghana"
  }
}

//To loop through the Objects
for(const property in Person.hobbies ){
  console.log(Person.hobbies[property]);
}

console.log(Person.fullName);
console.log(Person.isStudent);
console.log(Person.address.country);
console.log(Person.hobbies[2]);