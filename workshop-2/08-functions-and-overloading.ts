/*  Callable Types
      - Both type aliases and and interfaces offer the capability to describe call signatures:
*/
interface TwoNumberCalculation {
  (x: number, y: number): number;
}

type TwoNumberCalc = (x: number, y: number) => number;

const add: TwoNumberCalculation = (a, b) => a + b;
const substract: TwoNumberCalc = (x, y) => x - y;

// Let’s pause for a minute to note:
//   - The return type for an interface is :number, and for the type alias it’s => number
//   - Because we provide types for the functions add and subtract, we don’t need to provide type annotations
//      for each individual function’s argument list or return type

/* void
     Sometimes functions don’t return anything, and we know from experience with JavaScript,
      what actually happens in the situation below is that x will be undefined:
*/
function printFormattedJSON(obj: string[]) {
  console.log(JSON.stringify(obj, null, ' '));
}
const myVar = printFormattedJSON(['hello', 'world']);

// void is a special type, that’s specifically used to describe function return values. It has the following meaning:
//   - The return value of a void function is intended to be ignored
// We could type functions as returning undefined, but there are some interesting differences that highlight the reason for void’s existence:
function invokeInFourSeconds(callback: () => undefined) {
  setTimeout(callback, 4000);
}

function invokeInFiveSeconds(callback: () => void) {
  setTimeout(callback, 5000);
}

const values: number[] = [];

// It happens that Array.prototype.push returns a number, and our invokeInFourSeconds function above is unhappy about this being returned from the callback.
// invokeInFourSeconds(() => values.push(4));
invokeInFiveSeconds(() => values.push(5));

/* Construct Signatures
     - Construct signatures are similar to call signatures, except they describe what should happen with the new keyword.
     - These are rare, but if you ever happen to come across them - you now know what they are.
*/
interface DateConstructor {
  new (value: number): Date;
}

let myDateConstructor: DateConstructor = Date;

const d = new myDateConstructor();

/* Function Overloads

  - Imagine the following situation:
    <iframe src="https://example.com" />
    <!-- // -->
    <form>
      <input type="text" name="name" />
      <input type="text" name="email" />
      <input type="password" name="password" />
      <input type="submit" value="Login" />
    </form>

  - What if we had to create a function that allowed us to register a “main event listener”?
    - If we are passed a form element, we should allow registration of a “submit callback”
    - If we are passed an iframe element, we should allow registration of a ”postMessage callback”
    - Let’s give it a shot:
*/

type FormSubmitHandler = (data: FormData) => void;
type MessageHandler = (event: MessageEvent) => void;

// function handleMainEvent(
//   ele: HTMLFormElement | HTMLIFrameElement,
//   handler: FormSubmitHandler | MessageHandler
// ) {}

// const myFrame = document.getElementsByTagName('iframe')[0]

// handleMainEvent(myFrame, (val) => {})

/*
  This is not good — we are allowing too many possibilities here, including things we don’t aim to support
   (e.g., using a HTMLIFrameElement with FormSubmitHandler, which doesn’t make much sense).

  We can solve this using function overloads, where we define multiple function heads
   that serve as entry points to a single implementation:
*/

// Head 1 of function
function handleMainEvent(
  elem: HTMLFormElement,
  handler: FormSubmitHandler
): void;

// Head 2 of function
function handleMainEvent(
  elem: HTMLIFrameElement,
  handler: MessageHandler
): void;

// Function body
function handleMainEvent(
  elem: HTMLFormElement | HTMLIFrameElement,
  handler: FormSubmitHandler | MessageHandler
) {
  //...
}

const myFrame = document.getElementsByTagName('iframe')[0];
const myForm = document.getElementsByTagName('form')[0];

handleMainEvent(myFrame, (val) => {});
handleMainEvent(myForm, (val) => {});

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
function myClickHandler(this: HTMLButtonElement, event: Event) {
  this.disabled = true;
}

// Supplying context to handler
const myButton = document.createElement('button');
const boundHandler = myClickHandler.bind(myButton);
boundHandler(new Event('click'));
myClickHandler.call(myButton, new Event('click'));

/* Function Type Best Practices
    TypeScript is capable of inferring function return types quite effectively, but this accommodating behavior can lead to unintentional ripple effects where types change throughout your codebase
*/
// Consider this example
export async function getData(url: string) {
  const response = await fetch(url);
  if (response.ok) {
    const data = (await response.json()) as { properties: string[] };
    return data;
  }
}

async function loadData() {
  const myData = await getData('https://example.com');
  console.log(myData.properties.join(', '));
}
