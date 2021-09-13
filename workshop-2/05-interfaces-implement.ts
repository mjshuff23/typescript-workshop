// For review, interface is perfect for coming up with shapes that an object MUST conform to
// interface AnimalLike {
//   eat(food: string): void;
// }

// // When mixing interfaces with classes, you want to use the 'implements' keyword
// class Dog implements AnimalLike {
//   bark() {
//     return 'woof';
//   }

//   eat(food: string) {
//     return food + ' yum';
//   }
// }

// let myDog = new Dog();
// console.log(myDog.bark());
// console.log(myDog.eat('food'));

// // When mixing interfaces, we use 'extends'
// interface Animal {
//   isAlive(): boolean;
// }

// interface Mammal extends Animal {
//   getFurOrHairColor(): string;
// }

// interface Dog extends Mammal {
//   getBreed(): string;
// }

// function sayDogBreed(dog: Dog) {
//   console.log(dog.getBreed());
// }

// const myDoggo: Dog = {
//   isAlive: () => true,
//   getFurOrHairColor: () => 'black',
//   getBreed: () => 'german shepherd',
// };

// console.log(myDoggo.isAlive());
// console.log(myDoggo.getFurOrHairColor());
// console.log(myDoggo.getBreed());

// // Althought JS and TS do not support true multiple inheritance, we can emulate it by subscribing a class to multiple interfaces and extends
// class LivingOrganism {
//   isAlive = () => {
//     return true;
//   };
// }

// interface AnimalLike {
//   eat(food: string): void;
// }

// interface CanBark {
//   bark(): string;
// }

// class Dog extends LivingOrganism implements AnimalLike, CanBark {
//   eat = (food: string) => console.log(`Consumes ${food}`);
//   bark = () => `Woof Woof`;
// }

// Open Interfaces
// TypeScript interfaces are 'open', meaning that unlike in type aliases, you can have multiple declarations in the same scope.
interface AnimalLike {
  isAlive(): boolean;
}

interface AnimalLike {
  eat(food: string): void;
}

function feed(animal: AnimalLike): string {
  animal.eat('fooddss');
  return animal.isAlive().toString();
}

const myAnimal: AnimalLike = {
  isAlive: () => false,
  eat: (food: string) => console.log(`Eats ${food}`),
};

myAnimal.eat('Yeeet');

console.log(feed(myAnimal));

// // You may be asking yourself: where and how is this useful?
// // Imagine a situation where you want to add a global property to the window object
// window.document // existing property
// window.exampleProperty = 42;

// interface Window {
//   exampleProperty: number,
// }

// Choosing which to use
// In most situations, either one will suffice, BUT:
//   - If you need to define something other than an object type (e.g., use of the | union type operator), you must use a type alias
//   - If you need to define a type to use with the implements heritage term, it’s best to use an interface
//   - If you need to allow consumers of your types to augment them, you must use an interface.

// Recursion
// Recursive types, are self-referential, and are often used to describe infinitely nestable types.  For example, consider infinitely nestable arrays of numbers:
// [3, 4, [5, 6, [7], 59], 221]

// You may read or see things that indicate you must use a combination of interface and type for recursive types.
//   - As of TypeScript 3.7, this is much easier now, and works with either type aliases or interfaces
type NestedNumbers = number | NestedNumbers[];

const val: NestedNumbers = [3, 4, [5, 6, [7], 59], 221];
val.push(12);
console.log(val);
