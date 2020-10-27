fizzBuzz('3');   // Output: NaN
fizzBuzz(false); // Output: NaN
fizzBuzz(2);     // Output: 2 (returns the same number)
fizzBuzz(3);     // Output: Fizz
fizzBuzz(5);     // Output: Buzz
fizzBuzz(15);    // Output: FizzBuzz

// A very popular interview question...
function fizzBuzz(number) {
    if (typeof number !== 'number') return NaN;
    if (number % 3 != 0 && number % 5 != 0) return number;

    let output = '';
    output += (number % 3 === 0) ? 'Fizz' : '';
    output += (number % 5 === 0) ? 'Buzz' : '';
    return output;
}
