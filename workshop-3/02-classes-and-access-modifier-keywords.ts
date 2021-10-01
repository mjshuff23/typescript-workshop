////////////////////////////////// JavaScript //////////////////////////////////
// class Car {
//   constructor(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }

//   activateTurnSignal(direction) {
//     console.log(`Activating ${direction} turn signal`);
//   }
// }

////////////////////////////////// TypeScript //////////////////////////////////
// class Car {
//   make: string;
//   model: string;
//   year: number;

//   constructor(make: string, model: string, year: number) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }

//   activateTurnSignal(direction: string): void {
//     console.log(`Activating ${direction} turn signal`);
//   }
// }

// let sedan = new Car('Honda', 'Accord', 1999);
// sedan.activateTurnSignal('left');
// new Car(1997, 'Honda', 'Accord');

/////////////////////////// Access Modifier Keywords ///////////////////////////
// TypeScript provides three access modifier keywords, which can be used with
//  class fields and methods, to describe who should be able to see and use them:
//   - public: Everyone can access (default)
//   - protected: The instance itself along with subclasses
//   - private: Only the instance itself
// class Car {
//   public make: string;
//   public model: string;
//   public year: number;
//   protected vinNumber: generateVinNumber();
//   private doorLockCode: generateDoorLockCode();

//   constructor(make: string, model: string, year: number) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }

//   protected unlockAllDoors() {
//     unlockCar(this, this.doorLockCode)
//   }
// }

// class Sedan extends Car {
//   constructor(make: string, model: string, year: number) {
//     super(make, model, year);
//     this.vinNumber;
//     this.doorLockCode;  // Property 'doorLockCode' is private and only accessible within class 'Car'.
//   }

//   public unlock() {
//     console.log(`Unlocking at ${new Date().toISOString()}`);
//     this.unlockAllDoors();
//   }
// }

// let s = new Sedan("Honda", "Accord", 1999);
// s.make;
// s.vinNumber; // Property 'vinNumber' is protected and only accessible within class 'Car' and its subclasses.
// s.doorLockCode; // Property 'doorLockCode' is private and only accessible within class 'Car'.
// s.unlock();

/*
  A couple of things to note in the example above:
    - The top-level scope doesn’t seem to have access to vinNumber or doorLockCode
    - Sedan doesn’t have direct access to the doorLockCode, but it can access vinNumber and unlockAllDoors()
    - We see two examples of “limited exposure”
      - Car can expose private functionality through defining its own protected functionality
      - Sedan can expose protected functionality through defining its own public functionality

  It is important to understand that, just like any other aspect of type information, access modifier keywords are
   only validated at compile time, with no real privacy or security benefits at runtime
*/

/////////////////////////////// JS Private #fields ///////////////////////////////
// As of TypeScript 3.8, TypeScript supports use of ECMAScript private class fields.
// If you have trouble getting this to work in your codebase, make sure to double-check
//  your Babel settings
// class Car {
//   public make: string;
//   public model: string;
//   #year: number;

//   constructor(make: string, model: string, year: number) {
//     this.make = make;
//     this.model = model;
//     this.#year = year;
//   }

//   sayInfo = () => {
//     console.log(`I am a ${this.#year} ${this.make} ${this.model}`);
//   };
// }

// const c = new Car('Honda', 'Accord', 1997);
// c.sayInfo();
// c.#year; // Property '#year' is not accessible outside class 'Car' because it has a private identifier.

///////////////////////////////// readonly Keyword /////////////////////////////////
// While not strictly an access modifier keyword (because it has nothing to do with visibility),
//  TypeScript provides a readonly keyword that can be used with class fields.
// class Car {
//   public make: string;
//   public model: string;
//   public readonly year: number;

//   constructor(make: string, model: string, year: number) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }

//   updateYear() {
//     this.year++;   // Cannot assign to 'year' because it is a read-only property.
//   }
// }

///////////////////////////////// Param Properties /////////////////////////////////
// Ok, let’s pop a stack frame. Now that we know about access modifier keywords, let’s
//  return to an earlier code snippet from our discussion around class fields:
// class Car {
//   make: string
//   model: string
//   year: number
//   constructor(make: string, model: string, year: number) {
//     this.make = make
//     this.model = model
//     this.year = year
//   }
// }

// TypeScript provides a more concise syntax for code like this, through the use of param properties:
// class Car {
//   constructor(public make: string, public model: string, public year: number) {}
// }

// const myCar = new Car("Honda", "Accord", 1999);
// myCar

// The first argument passed to the constructor should be a string, and should be available within the scope
//  of the constructor as make. This also creates a public class field on Car called make and pass it the value
//  that was given to the constructor

// It is important to understand the order in which “constructor-stuff” runs.
////////////////////////////////// TypeScript //////////////////////////////////
// class Base {}

// class Car extends Base {
//   foo = console.log('class field initializer'); // 3
//   constructor(public make: string) { // 2
//     super(); // 1
//     console.log('custom constructor stuff'); // 4
//   }
// }

// const c = new Car('honda');

////////////////////////////////// JavaScript //////////////////////////////////
// 'use strict';
// class Base {}
// class Car extends Base {
//   constructor(make) {
//     super(); // MUST be called first
//     this.make = make;
//     this.foo = console.log('class field initializer');
//     console.log('custom constructor stuff');
//   }
// }
// const c = new Car('honda');

/* Note the following order of what ends up in the class constructor:
    - super()
    - param property initialization
    - other class field initialization
    - anything else that was in your constructor after super()
*/
