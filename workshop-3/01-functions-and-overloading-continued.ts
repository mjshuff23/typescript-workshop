// When dealing with context, we must consider the type of `this`

/*********************************** BAD ***********************************/
// For example, if we have a DOM event listener for a button:
//  <button onClick="myClickHandler">Click Me!</button>
// We would define `myClickHandler` as follows:
function myClickHandler(event: Event) {
  // 'this' implicitly has type 'any' because it does not have a type annotation
  this.disabled = true;
}

myClickHandler(new Event('click')); // Seems okay

// Despite the fact we know that `this` will be the element that fired the event,
//  the compiler wants us to address the type...

/*********************************** GOOD ***********************************/
function myClickHandlerAlternate(this: HTMLButtonElement, event: Event) {
  // 'this' implicitly has type 'any' because it does not have a type annotation
  this.disabled = true;
}

// The 'this' context of type 'void' is not assignable to method's 'this' of type 'HTMLButtonElement'
myClickHandlerAlternate(new Event('click')); // No longer okay

// Now when we try to directly invoke myClickHandler on the last line of the code snippet above we get a new compiler error.
//  We have failed to provide the 'this' that this function states it wants
const myButton = document.getElementsByTagName('button')[0];
const boundHandler = myClickHandlerAlternate.bind(myButton);

// Note TypeScript understands that .bind, .call or .apply will result in the proper this being passed to the function as part of its invocation.
boundHandler(new Event('click')); // bound: ok
myClickHandlerAlternate.call(myButton, new Event('click')); // also ok

/* Function Type Best Practices
     - Explicitly Define Return Types:
       a. TypeScript is capable of inferring function return types quite effectively, but this accommodating behavior
           can lead to unintentional ripple effects where types change throughout your codebase
*/

export async function getData(url: string) {
  const resp = await fetch(url);

  const data = (await resp.json()) as {
    properties: string[];
  };

  return data;
}

function loadData() {
  getData('https://example.com').then((result) => {
    console.log(result.properties.join(', '));
  });
}

// and if we made a seemingly innocent change:
export async function getDataAlternate(url: string) {
  const resp = await fetch(url);

  if (resp.ok) {
    const data = (await resp.json()) as {
      properties: string[];
    };

    return data;
  }
}

// We’ll see some type-checking errors pop up, but at the invocation site, not the declaration site.
// Imagine if we were passing this value through several other functions before reaching the point where type checking alerted us to a problem!

function loadDataAlternate() {
  getDataAlternate('https://example.com').then((result) => {
    // Object is possibly 'undefined'
    console.log(result.properties.join(', '));
  });
}

// If we use the same example, but define a return type explicitly, the error message is surfaced at the declaration site
async function getDataFinal(url: string): Promise<{ properties: string[] }> {
  const resp = await fetch(url);

  if (resp.ok) {
    const data = (await resp.json()) as {
      properties: string[];
    };

    return data;
  }
}

function loadDataFinal() {
  getDataFinal('https://example.com').then((result) => {
    // Object is possibly 'undefined'
    console.log(result.properties.join(', '));
  });
}
