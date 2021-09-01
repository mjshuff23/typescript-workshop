// TypeScript will automatically infer a type if possible
let myName = "Michael Shuff";

// Type Annotations
let myString: string = 'Hello world';
let myNumber: number = 25;
let myBool: boolean = true;
let numArray: number[] = [ 1, 5, 10 ];  // OR Array<number>
let stringArray: string[] = [ 'Hello', 'World' ];  // OR Array<string>
let booleanArray: boolean[] = [ true, false, false, true ]; // OR Array<number>
let anyArray: any[] = [ "don't", "do", true, "this" ]; // OR Array<any>

// When a value is of type any, you can access any properties of it (which will in turn be of type any), call it like a function, assign it to (or from) a value of any type, or pretty much anything else that’s syntactically legal:
// let myObj: any = { x: 0 };

// myObj.foo();
// myObj();
// myObj.bar = 100;
// myObj = 'hello world';
// const n: number = myObj;

// The any type is useful when you don’t want to write out a long type just to convince TypeScript that a particular line of code is okay.
// When you don’t specify a type, and TypeScript can’t infer it from context, the compiler will typically default to any.  You usually want to avoid this, though, because any isn’t type - checked.  Use the compiler flag noImplicitAny to flag any implicit any as an error.


// While you don't need to use type annotations for the most part due to TypeScript being able to infer the type you're creating, it is useful to add annotations to either the parameter or return type of a function
// person must be a string
function sayHi(person: string) {
  console.log(`Hi, ${person}!`);
}
sayHi('John');

// It is not extremely necessary to specify the return type in an annotation, as it can usually be inferred by looking at what you return
// function must return a number
function getRandomNumber(): number {
  return Math.random() * 100;
  // return 'hi'
}
