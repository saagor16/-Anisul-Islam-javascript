//Arrow function (part-2) | arrow with map,filter

function Person() {
  this.age = 25;
  setTimeout(function() {
    this.age++;
    console.log(this.age); // Undefined বা Window Object এ রেফার করে
  }, 1000);
}
const person = new Person();


function Person1() {
  this.age1 = 25;
  setTimeout(() => {
    this.age1++;
    console.log(this.age1); // Properly refers to the Person instance
  }, 1000);
}
const person1 = new Person();

const number = [1, 2, 3, 4];
const doubled = number.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8]

const numbers = [1, 2, 3, 4, 5, 6];
const oddSquares = numbers
  .filter(num => num % 2 !== 0)  // Filter odd numbers
  .map(num => num * num);        // Square the filtered numbers
console.log(oddSquares); // Output: [1, 9, 25]

const number1 = [1, 2, 3, 4, 5, 6];
const result = number1
  .filter(num => num % 2 === 0)   // Filter even numbers
  .map(num => num * 2)             // Double each even number
  .reduce((acc, curr) => acc + curr, 0);  // Sum them up
console.log(result); // Output: 24

const number2 = [1, 2, 3, 4];
const sum = number2.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 10

