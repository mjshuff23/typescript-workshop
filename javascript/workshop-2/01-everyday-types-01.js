"use strict";
// TypeScript will automatically infer a type if possible
let myName = 'Michael Shuff';
// Type Annotations
let myString = 'Hello world';
let myStringOrNumber = 15;
myStringOrNumber = 'Yo';
let myNumber = 25;
let myBool = true;
let numArray = [1, 5, 10]; // OR Array<number>
let mySecondNumArray = [3, 6, 7];
let stringArray = ['Hello', 'World']; // OR Array<string>
let booleanArray = [true, false, false, true]; // OR Array<boolean>
let anyArray = ["don't", 'do', true, 'this']; // OR Array<any>
let stringOrNumArray = [1, 'yo'];
// When a value is of type any, you can access any properties of it (which will in turn be of type any), call it like a function, assign it to (or from) a value of any type, or pretty much anything else that’s syntactically legal:
// let myObj: any = { x: 0 };
// myObj.foo();
// myObj();
// myObj.bar = 100;
// myObj = 'hello world';
// const n: number = myObj;
// The any type is useful when you don’t want to write out a long type just to convince TypeScript that a particular line of code is okay.
// When you don’t specify a type, and TypeScript can’t infer it from context, the compiler will typically default to any.  You usually want to avoid this, though, because any isn’t type - checked.  Use the compiler flag noImplicitAny to flag any implicit any as an error.
// While you don't need to use type annotations for the most part due to TypeScript being able to infer the type you're creating, it is useful to add annotations to either the parameter or return type of a function
// person must be a string
function sayHi(person) {
    console.log(`Hi, ${person}!`);
}
sayHi('John');
// function addTwo(a: string, b: string) {
//   return a + b;
// }
// It is not extremely necessary to specify the return type in an annotation, as it can usually be inferred by looking at what you return
// function must return a number
// Type Driven Development -  The idea of creating a function with an explicit return type and adding it to your code before implementing the actual functionality
function getRandomNumber() {
    return Math.random() * 100;
    // return 'hi'
}
// Anonymous Functions
// Anonymous functions are a little bit different from function declarations. When a function appears in a place where TypeScript can determine how it’s going to be called, the parameters of that function are automatically given types.
const names = ['Mike', 'Mark', 'Allie'];
// // Contextual Typing
// names.forEach(function (name) {
//   console.log(name.toUppercase());
// })
// Contextual Typing also works for arrow functions
// names.forEach((name) => {
//   console.log(name.toUppercase());
// })
// Object Types
/*
  Apart from primitives, the most common sort of type you’ll encounter is an object type. This refers to any JavaScript value with properties, which is almost all of them! To define an object type, we simply list its properties and their types.

  For example, here’s a function that takes a point-like object:
*/
// export function printCoordinates(pt: { x: number, y: number; }): void {
//   console.log(`x: ${pt.x}, y: ${pt.y}`);
// }
// printCoordinates({ x: 12, y: 15 });
// // You can also separate properties with a semicolon(;)
// function printCoordinates(pt: { x: number; y: number; }): void {
//   console.log(`x: ${pt.x}, y: ${pt.y}`);
// }
// Optional Properties
// Object types can also specify that some or all of their properties are optional. To do this, add a ? after the property name:
function printName(obj) {
    // Note how you HAVE to check if the optional property was defined or not.
    console.log(`${obj.last ? `${obj.first} ${obj.last}` : `${obj.first}`}`);
}
printName({ first: 'Michael', last: 'Shuff' });
printName({ first: 'Michael' });
// Union Types
// The first way to combine types you might see is a union type. A union type is a type formed from two or more other types, representing values that may be any one of those types. We refer to each of these types as the union’s members.
function printID(id) {
    console.log(`Your ID: ${id}`);
}
printID(100);
printID('100');
// Using typeof with union types
// You often need to use typeof to determine what course of action to follow when using union types
function welcomePeople(x) {
    Array.isArray(x)
        ? console.log(`Hello, ${x.join(' and ')}`)
        : console.log(`Welcome, ${x}`);
}
welcomePeople(['John', 'Mike', 'Warren', 'Cole']);
welcomePeople('John and Joe');
// Sometimes you’ll have a union where all the members have something in common. For example, both arrays and strings have a slice method. If every member in a union has a property in common, you can use that property without narrowing:
function getFirstThree(x) {
    return x.slice(0, 3);
}
console.log(getFirstThree([1, 5, 10, 20, 30]));
console.log(getFirstThree('Joseph'));
