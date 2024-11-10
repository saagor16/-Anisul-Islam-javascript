//array methods | find() | findIndex()

//find() Method
array.find(callback(element, index, array), thisArg);

const number = [5, 12, 8, 130, 44];
const foundNumber = number.find((num) => num > 10);

console.log(foundNumber); // Output: 12


//findIndex() Method
array.findIndex(callback(element, index, array), thisArg);

const numbers = [5, 12, 8, 130, 44];
const foundIndex = numbers.findIndex((num) => num > 10);

console.log(foundIndex); // Output: 1

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];

// Using find() to get the user object
const user = users.find((user) => user.id === 2);
console.log(user); // Output: { id: 2, name: 'Bob' }

// Using findIndex() to get the user's index
const userIndex = users.findIndex((user) => user.id === 2);
console.log(userIndex); // Output: 1



const numbers1 = [1, 3, 5, 7];

// Using find() with no match
const notFound = numbers1.find((num) => num > 10);
console.log(notFound); // Output: undefined

// Using findIndex() with no match
const notFoundIndex = numbers1.findIndex((num) => num > 10);
console.log(notFoundIndex); // Output: -1
