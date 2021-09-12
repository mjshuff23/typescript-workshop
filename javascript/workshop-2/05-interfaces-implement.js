"use strict";
// For review, interface is perfect for coming up with shapes that an object MUST conform to
// interface AnimalLike {
//   eat(food: string): void;
// }
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
const val = [3, 4, [5, 6, [7], 59], 221];
val.push(12);
console.log(val);
