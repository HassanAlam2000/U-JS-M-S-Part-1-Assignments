calculateGrade([50, 80, 69]); // Output: D

// Returns grade when an array is given.
function calculateGrade(arr) {
    const average = calculateAverage(arr);
    if (average >= 90) return 'A';
    if (average >= 80) return 'B';
    if (average >= 70) return 'C';
    if (average >= 60) return 'D';
    return 'F';
}

// Returns average when an array is given.
function calculateAverage(arr) {
    let sum = 0;
    for (let element of arr) sum += element;
    return sum / arr.length;
}
