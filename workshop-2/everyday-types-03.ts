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
// When you initialize a variable with an object, TypeScript assumes that the properties of that object might change values later. For example, if you wrote code like this:
const object = { counter: 0 };
if (object.counter === 0) object.counter++;
