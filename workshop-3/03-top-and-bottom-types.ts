// Types can be thought of as sets if anyone is familiar with set theory
// Here are some basic examples
let x: boolean; // {true, false}
let y: number; // in set builder notation, {y | y is a number}
let a: 5 | 6 | 7; // {5, 6, 7}
let b: null; // {null}
let d: {
  favoriteFruit?: 'pineapple'; // {"pineapple", undefined}
};

///////////////////////////////////// Top Types /////////////////////////////////////
// A top type (symbol: ⊤) is a type that describes any possible value allowed by the system.
// To use our set theory mental model, we could describe this as {x | x could be anything }
// TypeScript provides two top types: `any` and `unknown`

///////////////////////////////////// any /////////////////////////////////////
// We are probably familiar by now with the fact that any is basically plain JS
//  and can represent any type.  By using `any`, we are basically saying don't
//  use TypeScript's safety features
let flexible: any = 4;
flexible = 'Download some more ram';
flexible = window.document;
flexible = setTimeout;
// flexible.cheese.sayCheese();         // NO protection

// It’s important to understand that any is not necessarily a problem — sometimes it’s exactly the
//  right type to use for a particular situation. For example, console.log:
console.log(window, Promise, setTimeout, 'foo'); // (method) Console.log(...data: any[]): void
// We can see here that any is not always a “bug” or a “problem” — it just indicates maximal flexibility
//  and the absence of type checking validation.

/////////////////////////////////// unknown ///////////////////////////////////
// Like any, unknown can accept any value:
let unknownValue: unknown = 4;
unknownValue = 'Download some more ram';
unknownValue = window.document;
unknownValue = setTimeout;
// However, unknown is different from any in a very important way:
// Values with an unknown type cannot be used without first applying a type guard
// unknownValue.toString(); // Object is of type 'unknown'.

if (typeof unknownValue === 'string') {
  console.log(unknownValue.toUpperCase()); // Works now
}

///////////////////////////////// Practical Use of Top Types /////////////////////////////////
/*
  You will run into places where top types come in handy very often. In particular, if you ever
   convert a project from JavaScript to TypeScript, it’s very convenient to be able to incrementally
   add increasingly strong types. A lot of things will be any until you get a chance to give them some attention.

  unknown is great for values received at runtime (e.g., your data layer). By obligating consumers of these
   values to perform some light validation before using them, errors are caught earlier, and can often be surfaced
   with more context.
*/

///////////////////////////////////// Bottom Type: Never /////////////////////////////////////
/*
  A bottom type (symbol: ⊥) is a type that describes no possible value allowed by the system.
   To use our set theory mental model, we could describe this as “any value from the following
   set: { } (intentionally empty)”

  TypeScript provides one bottom type: never.

  At first glance, this may appear to be an extremely abstract and pointless concept, but there’s
   one use case that should convince you otherwise, exhaustive conditionals (workshop-1)
*/

// class Car {
//   drive() {
//     console.log("vroom")
//   }
// }
// class Truck {
//   tow() {
//     console.log("dragging something")
//   }
// }
// type Vehicle = Truck | Car

// let myVehicle: Vehicle = obtainRandomVehicle()

// // The exhaustive conditional
// if (myVehicle instanceof Truck) {
//   myVehicle.tow() // Truck
// } else if (myVehicle instanceof Car) {
//   myVehicle.drive() // Car
// } else {
//   // NEITHER!
//   const neverValue: never = myVehicle
// }

// if we add a boat:
class Car {
  drive() {
    console.log('vroom');
  }
}
class Truck {
  tow() {
    console.log('dragging something');
  }
}

class Boat {
  isFloating() {
    return true;
  }
}
type Vehicle = Truck | Car | Boat;

let myVehicle: Vehicle = obtainRandomVehicle();

// // The exhaustive conditional
// if (myVehicle instanceof Truck) {
//   myVehicle.tow(); // Truck
// } else if (myVehicle instanceof Car) {
//   myVehicle.drive(); // Car
// } else {
//   // NEITHER!
//   const neverValue: never = myVehicle;
// }

// It is recommended to handle this with an error
class UnreachableError extends Error {
  constructor(_nvr: never, message: string) {
    super(message);
  }
}

// The exhaustive conditional
if (myVehicle instanceof Truck) {
  myVehicle.tow(); // Truck
} else if (myVehicle instanceof Car) {
  myVehicle.drive(); // Car
} else {
  // NEITHER!
  throw new UnreachableError(
    myVehicle, // Argument of type 'Boat' is not assignable to parameter of type 'never'.
    `Unexpected vehicle type: ${myVehicle}`
  );
}
