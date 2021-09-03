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
// You can declare a variable of dynamic type in TypeScript with the `any` type
let myDynamicVariable = 'Yo';
myDynamicVariable = 12;
let myDynamicArray = ['I', 'should', 12, 'probably', null, 'avoid', 'this'];
// Can also be done
let anotherDynamicArray = ['Test', 12, true];
// Object declaration
let myObjectTwo = {
    "name": "Yo",
};
// // No can do:
// myObject.name = 12;
console.log(myObject);
module.exports = {
    myObject,
    myAge
};
