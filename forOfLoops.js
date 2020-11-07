// For of loops
// One should always use for of loops to iterate over arrays.
// Print the largest number in the array using for of loops

const numbers = [97, 56, 78, 89, 95];

let largest = 0;
for (let number of numbers)
    largest = number > largest ? number : largest;

console.log(largest);

// NOTE:
// Do not use for of loop for iterating over arrays
// But it can be use where do you need index also
// i.e.
// for (let index in numbers) console.log(numbers[index]);
