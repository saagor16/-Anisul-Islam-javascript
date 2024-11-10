// ES6 modules and class

import { text, setText } from "./myModule";
console.log(text);
setText("goodbye")
console.log(setText)


import multiply, { add, subtract } from './myModule';

console.log(add(5, 3)); // Output: 8
console.log(subtract(10, 4)); // Output: 6
console.log(multiply(3, 4)); // Output: 12


class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }

    start() {
        return `${this.brand} engine started.`;
    }
}

//ES6 Classes
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    // Method to display car information
    displayInfo() {
        return `${this.brand} ${this.model} (${this.year})`;
    }

    // Static method to compare car ages
    static compare(car1, car2) {
        return car1.year - car2.year;
    }
}

// Creating objects from Car class
const car1 = new Car('Toyota', 'Corolla', 2015);
const car2 = new Car('Honda', 'Civic', 2020);

console.log(car1.displayInfo()); // Output: Toyota Corolla (2015)
console.log(car2.displayInfo()); // Output: Honda Civic (2020)

// Using static method
console.log(Car.compare(car1, car2)); // Output: -5 (indicating car1 is older)





//Class Inheritance
class Motorcycle extends Vehicle {
    constructor(brand, type) {
        super(brand); // Calling parent class constructor
        this.type = type;
    }

    displayType() {
        return `${this.brand} is a ${this.type} motorcycle.`;
    }
}

const bike = new Motorcycle('Harley-Davidson', 'cruiser');
console.log(bike.start()); // Output: Harley-Davidson engine started.
console.log(bike.displayType()); // Output: Harley-Davidson is a cruiser motorcycle.



