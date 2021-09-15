"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getData = void 0;
const add = (a, b) => a + b;
const subtract = (x, y) => x - y;
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
const d = new myDateConstructor(1235321);
// Function body
function handleMainEvent(elem, handler) {
    //...
}
const myFrame = document.getElementsByTagName('iframe')[0];
const myForm = document.getElementsByTagName('form')[0];
handleMainEvent(myFrame, (val) => { });
handleMainEvent(myForm, (val) => { });
// handleMainEvent()
// ^^ Hover for Tooltip ^^
/* This looks like three function declarations, but it’s really two “heads” that define an argument list
    and a return type, followed by our original implementation.

   If you take a close look at tooltips and autocomplete feedback you get from the TypeScript language server,
    it’s clear that you are only able to call into the two “heads”, leaving the underlying “third head + implementation”
    inaccessible from the outside world.

   One last thing that’s important to note: “implementation” function signature must be general enough to include
     everything that’s possible through the exposed first and second function heads. (Must be compatible with two heads)
*/
/* This Type
    - Sometimes we have a free-standing function that has a strong opinion around what `this` will end up being, at the time it is invoked.
*/
// // For example, if we had a DOM event listener for a button:
// //    <button onClick="myClickHandler">Click Me!</button>
// // We could define myClickHandler as follows:
// function myClickHandler(event: Event) {
//   this.disabled = true; // hover to see needed type annotation
// }
// myClickHandler(new Event("click"))
// // Despite the fact that we know that this will be element that fired the event,
// //  the compiler doesn’t seem to be happy with us using it in this way.
// // To address the problem, we need to give this function a this type
// function myClickHandler(this: HTMLButtonElement, event: Event) {
//   this.disabled = true;
// }
// myClickHandler(new Event('click'));
// Now when we try to directly invoke myClickHandler on the last line of the code snippet above we get a new compiler error.
//  Effectively, we have failed to provide the this that this function states it wants.
function myClickHandler(event) {
    this.disabled = true;
}
// Supplying context to handler
const myButton = document.createElement('button');
const boundHandler = myClickHandler.bind(myButton);
boundHandler(new Event('click'));
myClickHandler.call(myButton, new Event('click'));
/* Function Type Best Practices
    TypeScript is capable of inferring function return types quite effectively, but this accommodating behavior can lead to unintentional ripple effects where types change throughout your codebase                     */
// Consider this example
async function getData(url) {
    const response = await fetch(url);
    // if (response.ok) {
    const data = (await response.json());
    return data;
    // }
}
exports.getData = getData;
async function loadData() {
    const myData = await getData('https://example.com');
    console.log(myData.properties.join(', '));
}
/* We’ll see some type-checking errors pop up, but at the invocation site, not the declaration site.
    Imagine if we were passing this value through several other functions before reaching the point where type checking alerted us to a problem! */
// If we use the same example, but define a return type explicitly, the error message is surfaced at the declaration site
async function getDataTwo(url) {
    const resp = await fetch(url);
    // if (resp.ok) {
    const data = (await resp.json());
    return data;
    // }
}
function loadDataTwo() {
    getDataTwo('https://example.com').then((result) => {
        console.log(result.properties.join(', '));
    });
}
