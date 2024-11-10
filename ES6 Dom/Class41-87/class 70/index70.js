// forEach | for vs forEach

// Syntax
for (let i = 0; i < array.length; i++) {
  // Code to execute
}

const number = [1, 2, 3, 4];
for (let i = 0; i < number.length; i++) {
  console.log(number[i]); // Output: 1, 2, 3, 4
}

// Syntax
array.forEach(function(item, index, array) {
  // Code to execute
});

const numbers = [1, 2, 3, 4];
numbers.forEach(function(number) {
  console.log(number); // Output: 1, 2, 3, 4
});

const numbers1 = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers1.length; i++) {
  if (numbers1[i] === 3) continue;  // Skip 3
  if (numbers1[i] === 5) break;     // Stop loop at 5
  console.log(numbers1[i]);          // Output: 1, 2, 4
}

const numbers2 = [1, 2, 3, 4, 5];
numbers2.forEach(number2 => {
  if (number2 === 3 || number2 === 5) return; // Doesn't actually skip or break
  console.log(number2); // Output: 1, 2, 4
});


