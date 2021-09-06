"use strict";
/*
TypeScript knows the JavaScript language and will generate types for you in many cases. For example in creating a variable and assigning it to a particular value, TypeScript will use the value as its type.
*/
// Hover over helloWorld, and notice how TypeScript has inferred it's type based on the data we supply the variable with.
let helloWorld = "Hello, world!";
// // Can't do, because TypeScript knows this is a variable meant to hold strings
// helloWorld = 12;
// Sometimes we don't have initial values for our variables, so we need to use Type Annotations:
let startTime = new Date();
// let endTime;   // Hover over endTime
// let endTime: Date;
// However, you can be very explicit with types if you wish, although it is often unnecessary:
// Syntax: `let/const/var variablename: type [= value]`
let myFirstName;
let myLastName = "Shuff";
let myAge = 34;
let isAdult = true;
let myNull = null;
let myUndefined = undefined;
// Arrays must be given an extra parameter specifying the type inside of the array
let myArrayOfNums = [1, 10, 20, 30];
// The above line can also be done like this:
let mySecondArrayOfNums = [5, 10, 15, 20];
// String array
let myArrayOfStrings = ['John', 'Doe'];
// Can also be done:
let anotherArrayOfStrings = ['Mike', 'Shuff'];
let myUser = {
    name: "Mike",
    age: 33
};
// Arrays
let myUsers = [myUser, myUser];
let myNums = [1, 6, 20];
let myWords = ['my', 'words'];
let myChecks = [true, false, false, false, true];
let myObjs = [new Date(), new Date(), new Date(), new Date(), new Date(), new Date(),];
let myNulls = [null, null];
let myUndefineds = [undefined, undefined, undefined];
let myArrayOfArrays = [[1, 4, 10], [10, 10, 30], [30]];
let myAnyArray = ['test', 12, true, 'me', null, 'out'];
// Arrays (alternative)
let myAltUsers = [myUser, myUser];
let myAltNums = [1, 5, 10];
let myAltWords = ['test', 'me', 'out'];
let myAltChecks = [true, true, false];
let myAltObjects = [new Date(), new Date()];
let myAltNulls = [null, null, null];
let myAltUndefined = [undefined, undefined, undefined];
let myAltAny = ['test', 12, true, null, undefined, 'me', ['1', '3']];
let myAltArrayOfArrays = [[1, 2, 3,], [4, 5, 6]];
// You can declare a variable of dynamic type in TypeScript with the `any` type
let myDynamicVariable = 'Yo';
myDynamicVariable = 12;
let myDynamicArray = ['I', 'should', 12, 'probably', null, 'avoid', 'this'];
// Can also be done
let anotherDynamicArray = ['Test', 12, true];
// Object declaration
let myObjectTwo = {
    "name": "Yo",
    "age": 33,
    "isAdult": true
};
// // No can do:
// myObject.name = 12;
console.log(myObject);
module.exports = {
    myObject,
    myAge
};
