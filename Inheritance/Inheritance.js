// Inheritance == allows a new class to inherit properties and methods
//                from an exiting class (parent -> child)
//                helps with code reusability.

// Inheritance == allows a new class to inherit properties and methods
//                from an exiting class (parent -> child)
//                helps with code reusability.

// 1. Basic Inheritance
class Animal {
  speak() {
    console.log("Animal speaks");
  }
}
class Dog extends Animal {}
const dog = new Dog();
dog.speak(); // Animal speaks

// 2. Inheriting and Overriding Methods
class Bird extends Animal {
  speak() {
    console.log("Bird chirps");
  }
}
const bird = new Bird();
bird.speak(); // Bird chirps

// 3. Using super() in Child Constructor
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
}
class Student extends Person {
  constructor(name, grade) {
    super(name);
    this.grade = grade;
  }
  showGrade() {
    console.log(`${this.name} is in grade ${this.grade}`);
  }
}
const student = new Student("Alice", 10);
student.greet(); // Hello, I'm Alice
student.showGrade(); // Alice is in grade 10

// 4. Adding New Methods in Child
class Vehicle {
  drive() {
    console.log("Driving...");
  }
}
class Car extends Vehicle {
  honk() {
    console.log("Beep beep!");
  }
}
const car = new Car();
car.drive(); // Driving...
car.honk(); // Beep beep!

// 5. Inheriting Properties
class Shape {
  constructor(color) {
    this.color = color;
  }
}
class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }
}
const circle = new Circle("red", 5);
console.log(circle.color, circle.radius); // red 5

// 6. Multi-level Inheritance
class LivingThing {}
class Mammal extends LivingThing {}
class Human extends Mammal {
  speak() {
    console.log("Hello from Human!");
  }
}
const human = new Human();
human.speak(); // Hello from Human!

// 7. Static Methods and Inheritance
class MathBase {
  static add(a, b) {
    return a + b;
  }
}
class AdvancedMath extends MathBase {}
console.log(AdvancedMath.add(2, 3)); // 5

// 8. Calling Parent Methods with super
class Parent {
  sayHi() {
    console.log("Hi from Parent");
  }
}
class Child extends Parent {
  sayHi() {
    super.sayHi();
    console.log("Hi from Child");
  }
}
const child = new Child();
child.sayHi(); // Hi from Parent \n Hi from Child

// 9. Inheriting Getters and Setters
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  get area() {
    return this.width * this.height;
  }
}
class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }
}
const square = new Square(4);
console.log(square.area); // 16

// 10. Instanceof with Inheritance
console.log(square instanceof Square); // true
console.log(square instanceof Rectangle); // true
console.log(square instanceof Object); // true

