// Type Aliases
/*
  We’ve been using object types and union types by writing them directly in type annotations. This is convenient, but it’s common to want to use the same type more than once and refer to it by a single name.

  A type alias is exactly that - a name for any type. The syntax for a type alias is:
*/

// You can use semi-colons (;) or commas (,) to separate properties on an type
// It is convention to use TitleCase for alias names and interface names
type PointType = {
  x: number;
  y: number;
};

let myPoint: PointType = {
  x: 150,
  y: 200,
};

function myCoords(pt: Point): void {
  console.log(`${pt.x}, ${pt.y}`);
}

myCoords(myPoint);
let testPoint = { x: 234, y: 3242, z: -5 };
myCoords({ x: 234, y: 3242 });

// You can actually use a type alias to give a name to any type at all, not just an object type. For example, a type alias can name a union type:
type ID = string | number;

// Note that aliases are only aliases - you cannot use type aliases to create different/distinct “versions” of the same type. When you use the alias, it’s exactly as if you had written the aliased type. In other words, this code might look illegal, but is OK according to TypeScript because both types are aliases for the same type:
type TrimmedString = string;

function trimInput(str: string): TrimmedString {
  return str.trimStart().trimEnd();
}

let userInput = trimInput('    Jonathan    ');
console.log(userInput);
userInput = 'January';

// Interfaces
// An interface declaration is another way to name an object type:
interface PointInterface {
  x: number;
  y: number;
}

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
