// do while loops in JS

// do {
//     Body of the loop that will be executed at least once
// } while (condition);

// It's very rare to use this loop in JS programming.

let num = 0;
do {
    if (num % 2 === 0) console.log(num);
    ++num;
} while (num <= 20);
