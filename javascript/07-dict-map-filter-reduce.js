"use strict";
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
// Array.prototype.map, but for Dict
function mapDict(inputDict, mapFunction) {
    const newDict = {};
    for (let key of Object.keys(inputDict)) {
        const currentValue = inputDict[key];
        newDict[key] = mapFunction(currentValue);
    }
    return newDict;
}
const fruitsWithKgMass = mapDict(fruits, (fruit) => ({
    ...fruit,
    kg: 0.001 * fruit.mass,
}));
console.log(fruitsWithKgMass);
// Array.prototype.filter, but for Dict
// Filter for Dict
// T - our input
function filterDict(inputDict, filterFunction) {
    const outDict = {};
    for (let k of Object.keys(inputDict)) {
        const thisVal = inputDict[k];
        if (filterFunction(thisVal))
            outDict[k] = thisVal;
    }
    return outDict;
}
const redFruit = filterDict(fruits, (fruit) => fruit.color === 'red');
console.log(redFruit);
// Array.prototype.reduce, but for Dict
// Reduce for Dict
// T - input
// V - value
function reduceDict(inputDict, reducerFunction, initialValue) {
    let value = initialValue;
    for (let k of Object.keys(inputDict)) {
        const thisVal = inputDict[k];
        value = reducerFunction(value, thisVal);
    }
    return value;
}
const oneOfEachFruitMass = reduceDict(fruits, (currentMass, fruit) => currentMass + fruit.mass, 1000);
console.log(oneOfEachFruitMass);
