// for of and for in loop

for (const key in object) {
  // Code to execute with each key
}


const person = { name: "Alice", age: 25, city: "Dhaka" };

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}
// Output:
// name: Alice
// age: 25
// city: Dhaka

const colors = ["red", "green", "blue"];

for (const index in colors) {
  console.log(`Index ${index}: ${colors[index]}`);
}
// Output:
// Index 0: red
// Index 1: green
// Index 2: blue



