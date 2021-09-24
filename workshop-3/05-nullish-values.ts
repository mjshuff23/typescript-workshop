//////////////////////////////// Null ////////////////////////////////
// null means: there is a value, and that value is nothing.
const userInfo = {
  name: 'Mike',
  email: 'mike@example.com',
  secondaryEmail: null, // user has no secondary email
};

////////////////////////////// Undefined //////////////////////////////
// undefined means the value is not available (yet)
const formInProgress = {
  createdAt: new Date(),
  data: new FormData(),
  completedAt: undefined, //
};
function submitForm() {
  formInProgress.completedAt = new Date();
}

//////////////////////////////// Void ////////////////////////////////
// void should be exclusively used to describe that a function's return
//  value should be ignored
console.log(`console.log returns nothing.`);

///////////////////// Non-Null Assertion Operator /////////////////////
// The non-null assertion operator (!.) is used to cast away the possibility
//  that a value might be null or undefined
// Keep in mind that the value can still be null/undefined, this operator
//  tells TypeScript to ignore that possibility
type GroceryCart = {
  fruits?: { name: string; qty: number }[];
  vegetable?: { name: string; qty: number }[];
};

const cart: GroceryCart = {};

// cart.fruits.push({ name: 'kumquat', qty: 1 });
cart.fruits!.push({ name: 'kumquat', qty: 1 });

///////////////////// Definite Assignment Operator /////////////////////
// The definite assignment operator (!:) is used to suppress TypeScript's
//  objections about a class field being used, when it can't be proven that
//  it was initialized

class AsyncStuff {
  setupPromise: Promise<any>; // ignore 'any' for now
  isSetup: boolean;

  constructor() {
    this.setupPromise = new Promise((resolve) => {
      this.isSetup = false;
      return this.doSetup();
    }).then(() => (this.isSetup = true));
  }

  private async doSetup() {
    // async stuff
  }
}

// TypeScript is warning me that someone could create an instance of this class
//  and immediately attempt to access .isSetup before it gets a boolean value
let myThing = new AsyncStuff();
myThing.isSetup; // what if this isn't assigned yet?
