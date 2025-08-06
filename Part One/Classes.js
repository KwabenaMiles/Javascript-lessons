// Clases = (ES6 feature) that provides a more structured and cleaner way to
// work with objects compared to traditional constructor functions
// ex. static keyword, encapsulation, inheritance.

// function Products (bame, price){
//   this.name = name;
//   this.price = price;

//   this.displayProduct = function(){
//     console.log(`Product: $${this.name}`);
//     console.log(`Price: $${this.price.toFixed(2)}`);

//   };

//   this.calculateTotal = function(salesTax){
//     return this.price + (this.price * salesTax);
//   }

  
// }

// const salesTax = 0.5;

// const product1 = new Product("Shirt", 19.99);
// const product2 = new Product("Pants", 22.50);
// const product3 = new Product("Underwear", 100.00);

// product1.displayProduct();
// const totalPrice = product1.calculateTotal(salesTax);

// console.log(`Total Price (with tax): $${totalPrice.toFixed(2)}`);


// To create a class you type classs then the name of the object: class Product{}
// To use a constructor we can use to constructor keyword within our class

class Product{
  constructor(name, price){
    this.name = name;
    this.price = price;
  }

  // Inside of a class you don't need to use the function keyword, just only the function name

  displayProduct(){
    console.log(`Product: ${this.name}`);
    console.log(`Price: $${this.price.toFixed(2)}`)
  }

  CalculateTotal(salesTax){
    return this.price + (this.price * salesTax);
  }
}

const salesTax = 0.05;

// Create some product objects 

const product1 = new Product("Shirt", 19.99); // To create a new object we have to use the "new" keyword
const product2 = new Product("Pants", 22.50);
const product3 = new Product("Underwear", 100.00 );

const total = product1.CalculateTotal(salesTax);
console.log(`Total price (with tax): $${total.toFixed(2)}`);