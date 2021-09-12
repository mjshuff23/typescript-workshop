"use strict";
const add = (a, b) => a + b;
const substract = (x, y) => x - y;
// Let’s pause for a minute to note:
//   - The return type for an interface is :number, and for the type alias it’s => number
//   - Because we provide types for the functions add and subtract, we don’t need to provide type annotations
//      for each individual function’s argument list or return type
/* void
     Sometimes functions don’t return anything, and we know from experience with JavaScript,
      what actually happens in the situation below is that x will be undefined:
*/
function printFormattedJSON(obj) {
    console.log(JSON.stringify(obj, null, ' '));
}
const myVar = printFormattedJSON(['hello', 'world']);
// void is a special type, that’s specifically used to describe function return values. It has the following meaning:
//   - The return value of a void function is intended to be ignored
// We could type functions as returning undefined, but there are some interesting differences that highlight the reason for void’s existence:
function invokeInFourSeconds(callback) {
    setTimeout(callback, 4000);
}
function invokeInFiveSeconds(callback) {
    setTimeout(callback, 5000);
}
const values = [];
// It happens that Array.prototype.push returns a number, and our invokeInFourSeconds function above is unhappy about this being returned from the callback.
// invokeInFourSeconds(() => values.push(4));
invokeInFiveSeconds(() => values.push(5));
let myDateConstructor = Date;
const d = new myDateConstructor();
function handleMainEvent(elem, handler) {
    //...
}
const myFrame = document.getElementsByTagName('iframe')[0];
const myForm = document.getElementsByTagName('form')[0];
handleMainEvent(myFrame, (val) => { });
handleMainEvent(myForm, (val) => { });
/* This looks like three function declarations, but it’s really two “heads” that define an argument list
    and a return type, followed by our original implementation.

   If you take a close look at tooltips and autocomplete feedback you get from the TypeScript language server,
    it’s clear that you are only able to call into the two “heads”, leaving the underlying “third head + implementation”
    inaccessible from the outside world.

   One last thing that’s important to note: “implementation” function signature must be general enough to include
     everything that’s possible through the exposed first and second function heads.
*/
