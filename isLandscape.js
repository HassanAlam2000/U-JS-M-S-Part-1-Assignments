isLandscape(1024, 1280); // Output: false
isLandscape(1024, 1024); // Output: false
isLandscape(1280, 1024); // Output: true

// Checks if it's landscape or not...
function isLandscape(width, height) { return width > height; }
