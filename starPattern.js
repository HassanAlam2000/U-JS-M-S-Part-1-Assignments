showStars(5);
// OUTPUT:
// * 
// * * 
// * * * 
// * * * * 
// * * * * * 

showStars(3);
// OUTPUT:
// * 
// * * 
// * * *

// A popular star pattern function.
function showStars(rows) {
    for (let i = 0; i < rows; ++i) {
        let pattern = '';
        for (let j = 0; j <= i; ++j) pattern += '* ';
        console.log(pattern);
    }
}
