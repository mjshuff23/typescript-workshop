"use strict";
// Type-checking can be thought of as a task that attempts to evaluate the question of compatibility or type equivalence
// function foo(x) {
//   // ...
// }
// TYPE CHECKING
// -------------
// Is `value` type-equivalent to what `foo` wants to receive?
// foo(value);
// Static Type Systems is code that are type systems that have type-checking before compile/runtime
// TypeScript, Java, C#, C++, Scala, Haskell are all static typed
// Dynamic Type Systems perform their type-checking at runtime
// JavaScript, Python, Ruby, Perl, PHP are dynamically typed
// Nominal vs. Structural
// // Nominal Type Systems are all about NAMES.  Here's a Java example:
// public class Car {
//   String make;
//   String model;
//   int make;
// }
// public class CarChecker {
//   // Takes a `Car` argument, returns a `String`
//   public static String printCar(Car car) {}
// }
// Car myCar = new Car();
// // TYPE CHECKING
// // -------------
// // Is `myCar` type-equivalent to what checkCar wants as an argument?
// CarChecker.checkCar(myCar)
// Structural Type Systems are all about STRUCTURE and SHAPE.  Here's a TypeScript example
class Car {
    constructor(make, model, year, isElectric) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.isElectric = isElectric;
    }
}
class Truck {
    constructor(make, model, year, towingCapacity) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.towingCapacity = towingCapacity;
    }
}
const vehicle = {
    make: 'Honda',
    model: 'Accord',
    year: 2017
};
function printCar(car) {
    console.log(`${car.make}, ${car.model}, ${car.year}`);
}
printCar(new Car('Honda', 'Accord', 2000, false)); // Fine
printCar(new Truck('Ford', 'F150', 1999, 32423));
printCar(vehicle);
