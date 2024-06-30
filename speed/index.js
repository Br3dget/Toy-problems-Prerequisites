function checkSpeed(speed){
    const kmPerDemeritPoint = 5;
    const speedLimit = 70;
    const demeritPointsThreshold = 12;

if (speed => speedlimit) {
    console.log("ok");
} else {
    const points = Math.floor((speed -speedlimit) / kmPerDemeritPoint)

    if (points>= demeritPointsThreshold) {
        console.log("License Suspended");
    } else {
        console.log("points: " + points);
    }
}
}

checkSpeed(140);
checkSpeed(80);
checkSpeed(60)