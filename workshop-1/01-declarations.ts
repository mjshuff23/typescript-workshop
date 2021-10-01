/*
TypeScript knows the JavaScript language and will generate types for you in many cases.
 For example in creating a variable and assigning it to a particular value, TypeScript
 will use the value as its type.
*/

// Hover over helloWorld, and notice how TypeScript has inferred it's type based on the data we supply the variable with.
let helloWorld = 'Hello, world!';
// // Can't do, because TypeScript knows this is a variable meant to hold strings
// helloWorld = 12;

// Sometimes we don't have initial values for our variables, so we need to use Type Annotations:
let startTime = new Date();
// let endTime;   // Hover over endTime
// let endTime: Date;

// However, you can be very explicit with types if you wish, although it is often unnecessary:
// Syntax: `let/const/var <<variable name>>: <<type>> [= value]` (Square brackets are optional, meaning we don't have to give it a value immediately unless using const)
let myFirstName: string;
let myLastName: string = 'Shuff';
let myAge: number = 34;
let isAdult: boolean = true;
let myNull: null = null;
let myUndefined: undefined = undefined;

// Arrays must be given an extra parameter specifying the type inside of the array
let myArrayOfNums: Array<number> = [1, 10, 20, 30];
// The above line can also be done like this:
let mySecondArrayOfNums: number[] = [5, 10, 15, 20];
// String array
let myArrayOfStrings: Array<string> = ['John', 'Doe'];
// Can also be done:
let anotherArrayOfStrings: string[] = ['Mike', 'Shuff'];

interface MyUserObject {
  name: string;
  age: number;
}

let myUser: MyUserObject = {
  name: 'Mike',
  age: 33,
};

// Arrays
let myUsers: MyUserObject[] = [myUser, myUser];
let myNums: number[] = [1, 6, 20];
let myWords: string[] = ['my', 'words'];
let myChecks: boolean[] = [true, false, false, false, true];
let myObjs: object[] = [
  new Date(),
  new Date(),
  new Date(),
  new Date(),
  new Date(),
  new Date(),
  {},
];
let myNulls: null[] = [null, null];
let myUndefineds: undefined[] = [undefined, undefined, undefined];
let myArrayOfArrays: number[][] = [[1, 4, 10], [10, 10, 30], [30]];
let myAnyArray: any[] = ['test', 12, true, 'me', null, 'out'];
let myDateArray: Date[] = [new Date()];

// Arrays (alternative)
let myAltUsers: Array<MyUserObject> = [myUser, myUser];
let myAltNums: Array<number> = [1, 5, 10];
let myAltWords: Array<string> = ['test', 'me', 'out'];
let myAltChecks: Array<boolean> = [true, true, false];
let myAltObjects: Array<object> = [new Date(), new Date()];
let myAltNulls: Array<null> = [null, null, null];
let myAltUndefined: Array<undefined> = [undefined, undefined, undefined];
let myAltAny: Array<any> = [
  'test',
  12,
  true,
  null,
  undefined,
  'me',
  ['1', '3'],
];
let myAltArrayOfArrays: Array<Array<number>> = [
  [1, 2, 3],
  [4, 5, 6],
];

// You can declare a variable of dynamic type in TypeScript with the `any` type
let myDynamicVariable: any = 'Yo';
myDynamicVariable = 12;
let myDynamicArray: Array<any> = [
  'I',
  'should',
  12,
  'probably',
  null,
  'avoid',
  'this',
];
// Can also be done
let anotherDynamicArray: any[] = ['Test', 12, true];

// Object declaration
let myObject: Object = {
  name: 'Yo',
  age: 33,
  isAdult: true,
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

// Exporting
export = {
  myObject,
  myAge,
};
