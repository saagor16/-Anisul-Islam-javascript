// map and filter array function

const newArray = array.map((element, index, array) => {
  // Operation to perform on each element
});

const number = [1, 2, 3, 4];
const squares = number.map(number => number * number);
console.log(squares); // Output: [1, 4, 9, 16]

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 28 }
];
const names = users.map(user => user.name);
console.log(names); // Output: ["Alice", "Bob", "Charlie"]


const newArray1 = array.filter((element, index, array) => {
  // Condition to check for each element
});

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6]

const users1 = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 28 }
];
const youngUsers = users1.filter(user => user.age < 30);
console.log(youngUsers); 
// Output: [{ name: "Alice", age: 25 }, { name: "Charlie", age: 28 }]
