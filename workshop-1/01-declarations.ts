/*
TypeScript knows the JavaScript language and will generate types for you in many cases. For example in creating a variable and assigning it to a particular value, TypeScript will use the value as its type.
*/

// Hover over helloWorld, and notice how TypeScript has inferred it's type based on the data we supply the variable with.
let helloWorld = "Hello, world!";
// // Can't do, because TypeScript knows this is a variable meant to hold strings
// helloWorld = 12;

// However, you can be very explicit with types if you wish, although it is often unnecessary:
// Syntax: `let/const/var variablename: type [= value]`
let myFirstName: string;
let myLastName: string = "Shuff";
let myAge: number = 34;
let isAdult: boolean = true;
let myNull: null = null;
let myUndefined: undefined = undefined;

// Arrays must be given an extra parameter specifying the type inside of the array
let myArrayOfNums: Array<number> = [ 1, 10, 20, 30 ];
// The above line can also be done like this:
let mySecondArrayOfNums: number[] = [ 5, 10, 15, 20 ];
// String array
let myArrayOfStrings: Array<string> = [ 'John', 'Doe' ];
// Can also be done:
let anotherArrayOfStrings: string[] = [ 'Mike', 'Shuff' ];

// You can declare a variable of dynamic type in TypeScript with the `any` type
let myDynamicVariable: any = 'Yo';
myDynamicVariable = 12;
let myDynamicArray: Array<any> = [ 'I', 'should', 12, 'probably', null, 'avoid', 'this' ];
// Can also be done
let anotherDynamicArray: any[] = [ 'Test', 12, true ];

// Object declaration
let myObject: Object = {
  "name": "Yo"
};
// // No can do:
// myObject.name = 12;
console.log(myObject);


// There are a few additions types that TypeScript offers:
// `any` - Allow anything
// `unknown` - Ensure someone using this type declares what the type is
// `never` - It's not possible that this type can happen
// `void` - A function which returns `undefined` or has no return value

// You’ll see that there are two syntaxes for building types: Interfaces and Types. You should prefer `interface`. Use `type` when you need specific features.
