"use strict";
// Type Aliases
/*
  We’ve been using object types and union types by writing them directly in type annotations. This is convenient, but it’s common to want to use the same type more than once and refer to it by a single name.

  A type alias is exactly that - a name for any type. The syntax for a type alias is:
*/
// interface PointType {
//   x: number;
//   y: number;
// }
let myPoint = {
    x: 150,
    y: 200,
};
function myCoords(pt) {
    console.log(`${pt.x}, ${pt.y}`);
}
myCoords(myPoint);
let testPoint = { x: 234, y: 3242, z: -5 };
myCoords({ x: 234, y: 3242 });
function trimInput(str) {
    return str.trimStart().trimEnd();
}
let userInput = trimInput('    Jonathan    ');
console.log(userInput);
userInput = 'January';
