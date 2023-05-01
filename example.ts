type Point = {
  x: number
  y: number
}

function addPoints(p1: Point, p2: Point): Point {
  return {
    x: p1.x + p2.x,
    y: p1.y + p2.y,
  }
}

const point1: Point = { x: 10, y: 20 }
const point2: Point = { x: 30, y: 40 }
const sumOfPoints: Point = addPoints(point1, point2)

console.log(sumOfPoints) // { x: 40, y: 60 }
