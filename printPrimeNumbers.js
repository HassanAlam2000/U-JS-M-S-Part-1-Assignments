printPrime(6);
// OUTPUT:
// 2
// 3
// 5

// Prints prime numbers with in a given limit.
function printPrime(limit) {
    for (let number = 2; number <= limit; ++number)
        if (isPrime(number)) console.log(number);
}

// Returns true if a number is prime.
function isPrime(number) {
    for (let i = 2; i < number; ++i)
        if (number % i === 0) return false;
    return true;
}
