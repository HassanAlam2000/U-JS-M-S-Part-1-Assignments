let items = [0, null, undefined, NaN, '', false, 1, 2];
console.log(countTruthy(items)); // Output: 2
// Since there're only two truthy elements in array 'items'
// i.e. 1, 2
// All the other elements are falsy

// Returns number of truthy elements in an array.
function countTruthy(array) {
    let count = 0;
    for (let element of array)
        count += element ? 1 : 0;

    return count;
}
