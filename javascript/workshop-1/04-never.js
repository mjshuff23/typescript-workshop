"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Never
// Because TypeScript supports code flow analysis, the language
// needs to be able to represent when code logically cannot
// happen. For example, this function cannot return:
const neverReturns = () => {
    // If it throws on the first line
    throw new Error('Always throws, never returns');
};
// If you hover on the type, you see it is a () => never
// which means it should never happen. These can still be
// passed around like other values:
// const myValue = neverReturns();
// Having a function never return can be useful when dealing
// with the unpredictability of the JavaScript runtime and
// API consumers that might not be using types:
const validateUser = (user) => {
    if (user) {
        return user.name !== "NaN";
    }
    // According to the type system, this code path can never
    // happen, which matches the return type of neverReturns.
    neverReturns();
};
const newUser = {
    name: "Johnathan",
    age: 55
};
console.log(validateUser(newUser));
// The type definitions state that a user has to be passed in,
// but there are enough escape valves in JavaScript whereby
// you can't guarantee that.
// Using a function which returns never allows you to add
// additional code in places which should not be possible.
// This is useful for presenting better error messages,
// or closing resources like files or loops.
// A very popular use for never, is to ensure that a
// switch is exhaustive. E.g., that every path is covered.
// Here's an enum and an exhaustive switch, try adding
// a new option to the enum (maybe Tulip?)
var Flower;
(function (Flower) {
    Flower[Flower["Rose"] = 0] = "Rose";
    Flower[Flower["Rhododendron"] = 1] = "Rhododendron";
    Flower[Flower["Violet"] = 2] = "Violet";
    Flower[Flower["Daisy"] = 3] = "Daisy";
    Flower[Flower["Tulip"] = 4] = "Tulip";
})(Flower || (Flower = {}));
const flowerLatinName = (flower) => {
    switch (flower) {
        case Flower.Rose:
            return "Rosa rubiginosa";
        case Flower.Rhododendron:
            return "Rhododendron ferrugineum";
        case Flower.Violet:
            return "Viola reichenbachiana";
        case Flower.Daisy:
            return "Bellis perennis";
        case Flower.Tulip:
            return 'blah';
        default:
            const _exhaustiveCheck = flower;
            return _exhaustiveCheck;
    }
};
// If you look at the type for NeverIsRemoved, you see that
// it is string | number. This is because it should never
// happen at runtime because you cannot assign to it.
