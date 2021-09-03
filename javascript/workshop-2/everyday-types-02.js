"use strict";
// Type Aliases
/*
  We’ve been using object types and union types by writing them directly in type annotations. This is convenient, but it’s common to want to use the same type more than once and refer to it by a single name.

  A type alias is exactly that - a name for any type. The syntax for a type alias is:
*/
let myPoint = {
    x: 150,
    y: 200
};
function myCoords(pt) {
    console.log(`${pt.x}, ${pt.y}`);
}
myCoords(myPoint);
function trimInput(str) {
    return str.trimStart().trimEnd();
}
let userInput = trimInput("    Jonathan    ");
console.log(userInput);
userInput = "January";
let myBear = {
    honey: true,
    name: "Yogi"
};
let myWindow = {
    title: "Mozilla Developer Network",
    size: { height: 100, width: 100 }
};
// // Type
// type MyWindow = {
//   title: string,
// }
// type MyWindow = {
//   size: { height: number, width: number}
// }
// // Error: Duplicate identifier 'Window'.
