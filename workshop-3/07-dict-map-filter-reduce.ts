// Let’s put our newfound knowledge around Generics to the test by building out
//  some higher-order functions that operate on dictionaries:
const fruits = {
  apple: { color: 'red', mass: 100 },
  grape: { color: 'red', mass: 5 },
  banana: { color: 'yellow', mass: 183 },
  lemon: { color: 'yellow', mass: 80 },
  pear: { color: 'green', mass: 178 },
  orange: { color: 'orange', mass: 262 },
  raspberry: { color: 'red', mass: 4 },
  cherry: { color: 'red', mass: 5 },
};

interface Dict<T> {
  [k: string]: T;
}

// Array.prototype.map, but for Dict
function mapDict(...args: any[]): any {}
// Array.prototype.filter, but for Dict
function filterDict(...args: any[]): any {}
// Array.prototype.reduce, but for Dict
function reduceDict(...args: any[]): any {}
