"use strict";
// When dealing with context, we must consider the type of `this`
/*********************************** BAD ***********************************/
// For example, if we have a DOM event listener for a button:
//  <button onClick="myClickHandler">Click Me!</button>
// We would define `myClickHandler` as follows:
function myClickHandler(event) {
    // 'this' implicitly has type 'any' because it does not have a type annotation
    this.disabled = true;
}
myClickHandler(new Event('click')); // Seems okay
// Despite the fact we know that `this` will be the element that fired the event,
//  the compiler wants us to address the type...
/*********************************** GOOD ***********************************/
function myClickHandlerAlternate(event) {
    // 'this' implicitly has type 'any' because it does not have a type annotation
    this.disabled = true;
}
// The 'this' context of type 'void' is not assignable to method's 'this' of type 'HTMLButtonElement'
myClickHandlerAlternate(new Event('click')); // No longer okay
// Now when we try to directly invoke myClickHandler on the last line of the code snippet above we get a new compiler error.
//  We have failed to provide the 'this' that this function states it wants
const myButton = document.getElementsByTagName('button')[0];
const boundHandler = myClickHandlerAlternate.bind(myButton);
boundHandler(new Event('click')); // bound: ok
myClickHandlerAlternate.call(myButton, new Event('click')); // also ok
