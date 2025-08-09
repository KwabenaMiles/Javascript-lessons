// Class = (ES6 feature) provides a more structured and cleaner way to
//        work with objects compared to traditional constructor functions
//         ex. static keyword, encapsulation, inheritance.

// ...existing code...

// Example 1: Basic class with constructor and method
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  display() {
    console.log(`${this.name} costs $${this.price}`);
  }
}
const prod1 = new Product("Laptop", 1200);
prod1.display(); // Laptop costs $1200

// Example 2: Class with static method
class MathHelper {
  static add(a, b) {
    return a + b;
  }
}
console.log(MathHelper.add(5, 3)); // 8

// Example 3: Class inheritance
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}
class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}
const dog = new Dog("Buddy");
dog.speak(); // Buddy barks.

// Example 4: Getter and setter in class
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  get area() {
    return this.width * this.height;
  }
  set area(value) {
    this.width = value / this.height;
  }
}
const rect = new Rectangle(4, 5);
console.log(rect.area); // 20
rect.area = 40;
console.log(rect.width); // 8

// Example 5: Private fields (ES2022+)
class Counter {
  #count = 0;
  increment() {
    this.#count++;
    console.log(this.#count);
  }
}
const counter = new Counter();
counter.increment(); // 1
counter.increment(); // 2

// ...existing