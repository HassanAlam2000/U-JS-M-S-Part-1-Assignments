series = {
    title: 'Ertugrul',
    seasons: 5,
    episodes: 150,
    director: 'Mehmat Bozdag'
}

showProperties(series);
// OUTPUT:
// title: "Ertugrul"
// director: "Mehmat Bozdag"

// Logs only string properties with their keys on the console.
function showProperties(object) {
    for (let key in object)

        if (typeof object[key] === 'string')
            console.log(`${key}: "${object[key]}"`);
}
