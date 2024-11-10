// spread operator

const numbers = [1, 2, 3];
const newNumbers = [...numbers];
console.log(newNumbers); // Output: [1, 2, 3]

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArray = [...arr1, ...arr2];
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]


const person = { name: "John", age: 25 };
const copiedPerson = { ...person };
console.log(copiedPerson); // Output: { name: "John", age: 25 }

const persons = { name: "John", age: 25 };
const job = { title: "Developer" };
const mergedPerson = { ...persons, ...job };
console.log(mergedPerson); // Output: { name: "John", age: 25, title: "Developer" }

function add(x, y, z) {
    return x + y + z;
  }
  const number = [1, 2, 3];
  console.log(add(...number)); // Output: 6
  