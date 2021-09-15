"use strict";
function feed(animal) {
    animal.eat('fooddss');
    return animal.isAlive().toString();
}
const myAnimal = {
    isAlive: () => false,
    eat: (food) => console.log(`Eats ${food}`),
};
myAnimal.eat('Yeeet');
console.log(feed(myAnimal));
// // You may be asking yourself: where and how is this useful?
// // Imagine a situation where you want to add a global property to the window object
window.document; // existing property
window.exampleProperty = 42;
const val = [3, 4, [5, 6, [7, [10, 20]], 59], 221];
val.push(12);
console.log(val);
