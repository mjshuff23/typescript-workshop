/*
  One of TypeScript’s core principles is that type checking focuses on the shape that values have. This is sometimes called “duck typing” or “structural typing”.

  In a structural type system, if two objects have the same shape, they are considered to be of the same type.
*/

interface Point {
  x: number,
  y: number,
}

function logPoint(point: Point) {
  console.log(`${point.x}, ${point.y}`);
}

const point = { x: 12, y: 26, z: 100 };
logPoint(point);

// The point variable is never declared to be a Point type. However, TypeScript compares the shape of point to the shape of Point in the type-check. They have the same shape, so the code passes.

// The shape - matching only requires a subset of the object’s fields to match.
const point3 = { x: 12, y: 30, z: 3252 };
logPoint(point3);

const rect = { x: 35, y: 404, height: 10, width: 12 };
logPoint(rect);

// const color = { hex: '#FF0AC1' };
// logPoint(color);

// There is no difference between how classes and objects conform to shapes:
class VirtualPoint {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const newVirtualPoint = new VirtualPoint(15, 2000);
logPoint(newVirtualPoint);
