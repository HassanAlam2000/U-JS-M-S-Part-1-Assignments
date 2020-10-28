console.log(multipleSum(5));  // Output:  8
console.log(multipleSum(10)); // Output: 33
console.log(multipleSum(15)); // Output: 60

// Returns sum of all multiples of 3 and 5 with in a given limit
function multipleSum(limit) {
    let sum = 0;
    for (let num = 0; num <= limit; ++num)
        if (num % 3 === 0 || num % 5 === 0) sum += num;

    return sum;
}
