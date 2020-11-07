// For in loops in JS
// The for in loops are mostly used to iterate over object.
// Do not use a for in loop to iterate over arrays because there is a good solution for them.

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    occupation: 'Programmer',
}

for (key in person)
    console.log(`${key}: ${person[key]}`);
