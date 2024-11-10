//callback and higher order function

function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Alice", sayGoodbye);

//Higher-Order Function

function calculate(num1, num2, operation) {
    return operation(num1, num2);
}

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

console.log(calculate(5, 10, add));       // Output: 15
console.log(calculate(5, 10, multiply));  // Output: 50


//Callback Function in Asynchronous Programming Example
console.log("Start");

function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched from server");
        callback();
    }, 2000);
}

fetchData(() => {
    console.log("Processing fetched data");
});

console.log("End");

//Array Methods as Higher-Order Functions
const numbers = [1, 2, 3, 4, 5];

// Using map with a callback
const squares = numbers.map(num => num * num);
console.log(squares); // Output: [1, 4, 9, 16, 25]

// Using filter with a callback
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// Using reduce with a callback
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 15





