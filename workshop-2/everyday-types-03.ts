// Type Assertions
/*
  Sometimes you will have information about the type of a value that TypeScript can’t know about.

  For example, if you’re using document.getElementById, TypeScript only knows that this will return some kind of HTMLElement, but you might know that your page will always have an HTMLCanvasElement with a given ID.

  In this situation, you can use a type assertion to specify a more specific type:
*/
// const myCanvas = document.getElementById("main-canvas") as HTMLCanvasElement;

/*
  Like a type annotation, type assertions are removed by the compiler and won’t affect the runtime behavior of your code.

  You can also use the angle-bracket syntax (except if the code is in a .tsx file), which is equivalent:

  Reminder: Because type assertions are removed at compile-time, there is no runtime checking associated with a type assertion. There won’t be an exception or null generated if the type assertion is wrong.
*/
// const myCanvasAlternate = <HTMLCanvasElement>document.getElementById("main-canvas");

// TypeScript only allows type assertions which convert to a more specific or less specific version of a type. This rule prevents “impossible” coercions like:
// const x = "hello" as number;

// Sometimes this rule can be too conservative and will disallow more complex coercions that might be valid. If this happens, you can use two assertions, first to any (or unknown, which we’ll introduce later), then to the desired type:
const a = ("hello" as any) as number;

// Literal Types
/*
  In addition to the general types string and number, we can refer to specific strings and numbers in type positions.

  One way to think about this is to consider how JavaScript comes with different ways to declare a variable. Both var and let allow for changing what is held inside the variable, and const does not. This is reflected in how TypeScript creates types for literals.
*/
let changingString = "Hello World!";
changingString = "Pikachu";

const constantString = "I will never change";

// By themselves, literal types aren’t very valuable:
let x: "Hello" = "Hello";
x = "Hello";
// x = "hello"

// But by combining literals into unions, you can express a much more useful concept - for example, functions that only accept a certain set of known values:
function printText(s: string, alignment: "left" | "right" | "center"): void {
  // ...
}
printText("Hey friends!", "left");
// printText("Hey friends!", "centre")

function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}
console.log(compare("john", "john"));
console.log(compare("john", "mike"));
console.log(compare("mike", "john"));

// Of course, you can combine these with non-literal types:
interface Options {
  width: number,
}
function configure(x: Options | "auto" = "auto") {
  // ...
}
configure({ width: 100 });
configure("auto");
// We can still use '=' to set default options
configure();

// Literal Interface
// // When you initialize a variable with an object, TypeScript assumes that the properties of that object might change values later. For example, if you wrote code like this:
// const object = { counter: 0 };
// if (object.counter === 0) object.counter++;

// const req = { url: "https://www.google.com", method: "GET" };

// function handleRequest(url: string, method: "GET" | "POST") {
//   console.log(url);
//   console.log(method);
// }
// handleRequest(req.url, req.method);

/*
  In the above example req.method is inferred to be string, not "GET". Because code can be evaluated between the creation of req and the call of handleRequest which could assign a new string like "GUESS" to req.method, TypeScript considers this code to have an error.

  There are two ways to work around this.
*/
// // 1. You can change the inference by adding a type assertion in either location:
// // Change 1
// const req = { url: "https://www.google.com", method: "GET" as "GET"}
// // Change 2
// handleRequest(req.url, req.method as "GET")
// // Change 1 means “I intend for req.method to always have the literal type "GET"”, preventing the possible assignment of "GUESS" to that field after. Change 2 means “I know for other reasons that req.method has the value "GET"“.

// // 2. You can use `as const` to convert the entire object to be type literals:
// const req = { url: "https://www.google.com", method: "GET"} as const;
// handleRequest(req.url, req.method)
// The as const suffix acts like const but for the type system, ensuring that all properties are assigned the literal type instead of a more general version like string or number.


// Tuples - A multi-element, ordered, data structure, where the position of each item has special meaning or convention

//          [Year,     Make,     Model]
// let myCar = [ 2002, "Toyota", "Corolla" ];
// How TypeScript handles inference: let myCar: (string | number)[]
// Be more explicit when creating a tuple
let myCar: [ number, string, string ] = [
  2002,
  'Toyota',
  'Corolla'
];

// destructured assignment is convenient here:
const [ year, make, model ] = myCar;
// How TypeScript handles inference: const model: string | number

// Limited Support for enforcing tuple length constraints
// const numPair: [number, number] = [4, 5, 6]
const numPair: [ number, number ] = [ 4, 5 ];
numPair.push(30);
console.log(numPair);
