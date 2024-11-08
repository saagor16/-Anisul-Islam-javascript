// object literals

const person = {
  name: "Alice",
  age: 30
};
console.log(person); // Output: { name: "Alice", age: 30 }

const prop = "status";
const obj = {
  [prop]: "active"
};
console.log(obj); // Output: { status: "active" }

const name = "Alice";
const age = 30;
const persons = { name, age };
console.log(persons); // Output: { name: "Alice", age: 30 }

const calculator = {
  add(x, y) {
    return x + y;
  }
};
console.log(calculator.add(5, 3)); // Output: 8

const person1 = {
  name: "Bob",
  age: 30,
  isActive: true
};
console.log(person1); // Output: { name: "Bob", age: 30, isActive: true }

const defaultSettings = { theme: "light", notifications: true };
const userSettings = { notifications: false };
const finalSettings = { ...defaultSettings, ...userSettings };
console.log(finalSettings); // Output: { theme: "light", notifications: false }

const student = {
  name: "Charlie",
  address: {
    city: "Dhaka",
    country: "Bangladesh"
  }
};
console.log(student); // Output: { name: "Charlie", address: { city: "Dhaka", country: "Bangladesh" } }

function createPerson(name, age) {
  return { name, age };
}
console.log(createPerson("David", 25)); // Output: { name: "David", age: 25 }

const person2 = { name: "Emma", age: 28, profession: "Developer" };
const { name2, ...rest } = person2;
console.log(name2); // Output: "Emma"
console.log(rest); // Output: { age: 28, profession: "Developer" }

const original = { color: "red" };
const updated = { ...original, size: "large" };
console.log(updated); // Output: { color: "red", size: "large" }



