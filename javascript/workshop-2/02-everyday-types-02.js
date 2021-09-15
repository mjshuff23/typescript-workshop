"use strict";
// Type Aliases
/*
  We’ve been using object types and union types by writing them directly in type annotations. This is convenient, but it’s common to want to use the same type more than once and refer to it by a single name.

  A type alias is exactly that - a name for any type. The syntax for a type alias is:
*/
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
// Type aliases and interfaces are very similar, and in many cases you can choose between them freely. Almost all features of an interface are available in type, the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.
// Interface Extension
// interface Animal {
//   name: string;
// }
// interface Bear extends Animal {
//   honey: boolean;
// }
// let myBear: Bear = {
//   honey: true,
//   name: 'Yogi',
// };
// // Type Extension
// type Animal = {
//   name: string;
// };
// type Bear = Animal & {
//   honey: boolean;
// };
// let myBear: Bear = {
//   name: 'BooBoo',
//   honey: true,
// };
// Adding new fields to type and interface
// Interface
// interface MyWindow {
//   title: string;
// }
// interface MyWindow {
//   size: { height: number; width: number };
// }
// interface Window {
//   myProperty: string,
// }
// interface HTMLCanvasElement {
//   myNum: number,
// }
// let myWindow: MyWindow = {
//   title: 'Mozilla Developer Network',
//   size: { height: 100, width: 100 },
// };
// // Type
// type MyWindow = {
//   title: string,
// }
// type MyWindow = {
//   size: { height: number, width: number}
// }
// // Error: Duplicate identifier 'Window'.
