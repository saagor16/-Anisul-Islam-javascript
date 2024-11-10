// String methods | startsWith, endsWith, includes

//startsWith() Method
string.startsWith(searchString, position);

const message = "Hello, world!";
console.log(message.startsWith("Hello")); // Output: true
console.log(message.startsWith("world")); // Output: false
console.log(message.startsWith("world", 7)); // Output: true

//endsWith() Method
string.endsWith(searchString, length);

const message1 = "Hello, world!";
console.log(message1.endsWith("world!")); // Output: true
console.log(message1.endsWith("Hello")); // Output: false
console.log(message1.endsWith("Hello", 5)); // Output: true

//includes() Method
string.includes(searchString, position);

const message2 = "Hello, world!";

console.log(message2.includes("world")); // Output: true
console.log(message2.includes("hello")); // Output: false
console.log(message2.includes("world", 8)); // Output: true
console.log(message2.includes("world", 9)); // Output: false




