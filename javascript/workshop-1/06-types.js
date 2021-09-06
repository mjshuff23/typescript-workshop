"use strict";
// With TypeScript, you can create complex types by combining simple ones. There are two popular ways to do so: with `Unions`, and with `Generics`.
// Unions provide a way to handle different types too. For example, you may have a function that takes an array or a string:
function getLength(obj) {
    return `${typeof obj === 'string' ? 'string' : 'array'}: ${obj.length}`;
}
console.log(getLength('test'));
console.log(getLength(['test', 'array']));
// // This line is a shortcut to tell TypeScript there is a
// // constant called `backpack`, and to not worry about where it came from.
let backpack;
// // object is a string, because we declared it above as the variable part of Backpack.
// // const object = backpack.get();
// // Since the backpack variable is a string, you can't pass a number to the add function.
// backpack.add(12)
// backpack.add('Yo');
// /*********************************** Explicit Types (cont'd) ************************************/
// // More explicit types
function greetUser(user, date) {
    console.log(`Hello ${user}, today is ${date.toDateString()}!`);
}
greetUser("Michael", new Date());
// // What we did was add type annotations on person and date to describe what types of values greet can be called with. You can read that signature as ”greet takes a person of type string, and a date of type Date“.
// /************************************* Erased Types ***********************************************/
