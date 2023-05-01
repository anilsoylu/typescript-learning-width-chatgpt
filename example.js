function addPoints(p1, p2) {
    return {
        x: p1.x + p2.x,
        y: p1.y + p2.y,
    };
}
var point1 = { x: 10, y: 20 };
var point2 = { x: 30, y: 40 };
var sumOfPoints = addPoints(point1, point2);
console.log(sumOfPoints); // { x: 40, y: 60 }
