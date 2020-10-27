checkSpeed(130); // Output: License Suspended!
checkSpeed(125); // Output: Points: 11
checkSpeed(120); // Output: Points: 12
checkSpeed(115); // Output: Points: 10
// ...
checkSpeed(80); // Output: Points: 2
checkSpeed(75); // Output: Points: 1
checkSpeed(70); // Output: OK!
// For all the values < 75, it will give the OK! flag

function checkSpeed(speed) {
    const speedLimit = 70;
    const speedPerPoint = 5;
    const points = Math.floor((speed - speedLimit) / speedPerPoint);

    if (points <= 0) return 'OK!';
    if (points >= 12) return 'License Suspended!';
    else return `Points: ${points}`
}
