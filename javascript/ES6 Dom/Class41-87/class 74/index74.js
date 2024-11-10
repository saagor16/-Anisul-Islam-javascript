//Destructuring array and objects

//Array Destructuring
const [variable1, variable2] = array;

const numbers = [10, 20];
const [first, second, third = 30] = numbers;
console.log(first);  // Output: 10
console.log(second); // Output: 20
console.log(third);  // Output: 30 (default value)

//Object Destructuring
const { property1, property2 } = object;

const person = { name: "Alice" };
const { name, age = 30 } = person;
console.log(name); // Output: Alice
console.log(age);  // Output: 30 (default value)

//Nested Destructuring

const person1 = {
  name1: "Alice",
  address: {
    city: "Wonderland",
    zip: 12345
  }
};

const { name1, address: { city, zip } } = person1;

console.log(name1);  // Output: Alice
console.log(city);  // Output: Wonderland
console.log(zip);   // Output: 12345

//Function Parameters Destructuring

const printPerson = ({ name, age }) => {
  console.log(`Name: ${name}, Age: ${age}`);
};

const person2 = { name: "Alice", age: 25 };
printPerson(person2); // Output: Name: Alice, Age: 25









