// With TypeScript, you can create complex types by combining simple ones. There are two popular ways to do so: with `Unions`, and with `Generics`.

/**************************************** Unions **************************************************/
// With a union, you can declare that a type could be one of many types. For example, you can describe a boolean type as being either true or false:

type MyBoolean = true | false;
// If you hover over MyBoolean above, you’ll see that it is classed as boolean. That’s a property of the Structural Type System. More on this below.

// A popular use-case for union types is to describe the set of string or number literals that a value is allowed to be:
type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

// Unions provide a way to handle different types too. For example, you may have a function that takes an array or a string:
function getLength(obj: string | string[]) {
  return `${typeof obj === 'string' ? 'string' : 'array'}: ${obj.length}`;
}

console.log(getLength('test'));
console.log(getLength([ 'test', 'array' ]));

/**************************************** Generics ************************************************/
// Generics provide variables to types. A common example is an array. An array without generics could contain anything. An array with generics can describe the values that the array contains.

type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectArray = Array<Object>;
type ObjectWithNameArray = Array<{ name: string; }>;

// You can declare your own types that use generics:
interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}

// This line is a shortcut to tell TypeScript there is a
// constant called `backpack`, and to not worry about where it came from.
declare const backpack: Backpack<string>;

// object is a string, because we declared it above as the variable part of Backpack.
// const object = backpack.get();

// Since the backpack variable is a string, you can't pass a number to the add function.
// backpack.add(12)
// backpack.add('Yo');

/*********************************** Explicit Types (cont'd) ************************************/
// More explicit types

function greetUser(user: string, date: Date) {
  console.log(`Hello ${user}, today is ${date.toDateString()}!`);
}
greetUser("Michael", new Date());

// What we did was add type annotations on person and date to describe what types of values greet can be called with. You can read that signature as ”greet takes a person of type string, and a date of type Date“.

/************************************* Erased Types ***********************************************/
