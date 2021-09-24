/* Now that we have covered the basic use of Generics, let’s layer on two more concepts:
    - how scoping work with type params
    - how we can describe type params that have more specific requirement than any.

   Generic Constraints
    - Generic constraints allow us to describe the minimum requirement for a type param,
       such that we can achieve a high degree of flexibility, while still being able
       to safely assume some minimal structure or behavior
*/
// function listToDict<T>(
//   list: T[], // array as input
//   idGen: (arg: T) => string // fn for obtaining item's id
// ): { [k: string]: T } {
//   // create dict to fill
//   const dict: { [k: string]: T } = {};

//   for (let item of list) {
//     // for each item
//     dict[idGen(item)] = item; // make a key store in dict
//   }

//   return dict; // result
// }

// Let’s strip away some noise and just study the function signature:

// function listToDict<T>(
//   list: T[],
//   idGen: (arg: T) => string
// ): { [k: string]: T } {
//   return {};
// }

// In this situation, we ask the caller of listToDict to provide us with a means of obtaining an id,
//  but let’s imagine that every type we wish to use this with has an id: string property, and we should
//  just use that as a key.

// interface HasId {
//   id: string;
// }

// interface Dict<T> {
//   [k: string]: T;
// }

// function listToDict(list: HasId[]): Dict<HasId> {
//   const dict: Dict<HasId> = {};

//   list.forEach((item) => {
//     dict[item.id] = item;
//   });

//   return dict;
// }

// Great, now let’s implement this with generics:
// function listToDict<T>(list: T[]): Dict<T> {
//   const dict: Dict<T> = {};

//   list.forEach((item) => {
//     dict[item.id] = item;
//   });

//   return dict;
// }

// The way we define constraints on generics is by using the extends keyword.
// function listToDict<T extends HasId>(list: T[]): Dict<T> {
//   const dict: Dict<T> = {};

//   list.forEach((item) => {
//     dict[item.id] = item;
//   });

//   return dict;
// }

// When a class extends from a base class, it’s guaranteed to at least align with the base class structure.
// In the same way, T extends HasId guarantees that “T is at least a HasId”.

//////////////////////////////// Scopes and TypeParams ////////////////////////////////
// When working with function parameters, we know that “inner scopes” have the ability
//  to access “outer scopes” but not vice versa:
// function receiveFruitBasket(bowl) {
//   console.log('Thanks for the fruit basket!');
//   // only `bowl` can be accessed here
//   eatApple(bowl, (apple) => {
//     // both `bowl` and `apple` can be accessed here
//   });
// }

// Type params work a similar way:
// outer function:
function tupleCreator<T>(first: T) {
  // inner function
  return function finish<S>(last: S): [T, S] {
    return [first, last];
  };
}

const finishTuple = tupleCreator(3);
const t1 = finishTuple(null);
console.log(t1);
const t2 = finishTuple([5, 10, 15, 20]);
console.log(t2);
