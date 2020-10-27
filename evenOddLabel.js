showNumbers(3);
// * OUTPUT *
// 0 "Even"
// 1 "Odd"
// 2 "Even"
// 3 "Odd"

function showNumbers(limit) {
    for (let number = 0; number <= limit; ++number) {
        const label = number % 2 === 0 ? 'Even' : 'Odd';
        console.log(number, label);
    }
}
