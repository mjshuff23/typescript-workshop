////////////////////////////////// Generics //////////////////////////////////
// Generics allow us to parameterize types, which unlocks great opportunity to
//  reuse types broadly across a TypeScript project

// Previously, we looked at a case of index signatures...
const phones: {
  [k: string]: {
    customerId: string;
    areaCode: string;
    num: string;
  };
} = {};

phones.home;
phones.work;
phones.fax;
phones.mobile;

// It would be nice to have some kind of utility that would allow us to convert a
//  “list of things into” a “dictionary of things”.  This is our starting point:
const phoneList = [
  { customerId: '0001', areaCode: '321', num: '123-4566' },
  { customerId: '0002', areaCode: '174', num: '142-3626' },
  { customerId: '0003', areaCode: '192', num: '012-7190' },
  { customerId: '0005', areaCode: '402', num: '652-5782' },
  { customerId: '0004', areaCode: '301', num: '184-8501' },
];

// This is what we aim to get:
const phoneDict = {
  '0001': {
    customerId: '0001',
    areaCode: '321',
    num: '123-4566',
  },
  '0002': {
    customerId: '0002',
    areaCode: '174',
    num: '142-3626',
  },
  // ...
};

// We will need one thing first — a way to produce the “key” for each object we encounter in the phoneList array.
//  To remain flexible, we will design our function such that whoever is asking for the list-to-dictionary conversion
//  should also provide a function that we can use to obtain a “key” from each item in the list.

interface PhoneInfo {
  customerId: string;
  areaCode: string;
  num: string;
}

// function listToDict(
//   list: PhoneInfo[], // Takes the list as an argument
//   idGen: (arg: PhoneInfo) => string // Callback to get ids
// ): { [k: string]: PhoneInfo } {
//   // create empty dictionary
//   const dict: { [k: string]: PhoneInfo } = {};

//   // Loop through array
//   list.forEach((phoneElement) => {
//     const dictKey = idGen(phoneElement);
//     dict[dictKey] = phoneElement; // store element in key
//   });

//   // return dict
//   return dict;
// }

// console.log(listToDict(phoneList, (item) => item.customerId));

// Now, let’s attempt to generalize this, and make it so that it works for lists and dictionaries of our
//  PhoneInfo type, but lots of other types as well. How about if we replace every PhoneInfo type with any…
// function listToDict(
//   list: any[],
//   idGen: (arg: any) => string
// ): { [k: string]: any } {
//   // ^^^ focus here ^^^

//   // Same as above
//   const dict: { [k: string]: any } = {};

//   list.forEach((element) => {
//     const dictKey = idGen(element);
//     dict[dictKey] = element;
//   });

//   return dict;
// }

// const dict = listToDict(
//   [{ name: 'Mike' }, { name: 'Mark' }],
//   (item) => item.name
// );
// console.log(dict);
// dict.Mike.I.should.not.be.able.to.do.this.NOOOOOOO;

/*
  Ok, this works at runtime if we test it in the TypeScript playground, but every item in our dictionary is an any.
  In becoming more flexible and seeking to handle a variety of different items, we essentially lose all of our helpful type information.
  What we need here is some mechanism of defining a relationship between the type of the thing we’re passed, and the type of the
   thing we’ll return. This is what Generics are all about


  Defining a type parameter
   - Type parameters can be thought of as “function arguments, but for types”.
   - Functions may return different values, depending on the arguments you pass them.
   - Generics may change their type, depending on the type parameters you use with them.
*/

// Our function signature is going to now include a type parameter `T`
// function listToDict<T>(
//   list: T[],
//   idGen: (arg: T) => string
// ): { [k: string]: T } {
//   const dict: { [k: string]: T } = {};
//   return dict;
// }

/* The TypeParam, and usage to provide an argument type
    - <T> to the right of listToDict means that the type of this function is now parameterized in terms of a
       type parameter T (which may change on a per-usage basis)
    - list: T[] as a first argument means we accept a list of T's
      - TypeScript will infer what T is, on a per-usage basis, depending on what kind of array we pass in
      - If we use a string[], T will be string, if we use a number[], T will be number
*/

// Much simpler (and more pointless) example:
function wrapInArray<T>(arg: T): [T] {
  return [arg];
}

// Note how, in the three wrapInArray examples below, the <T> we see in the tooltip above is replaced by
//  “the type of the thing we pass as an argument” - number, Date, and RegExp:
console.log(wrapInArray(3));
console.log(wrapInArray(new Date()));
console.log(wrapInArray(new RegExp('/s/')));

// Previous Example
// - idGen: (arg: T) => string is a callback that also uses T as an argument, which means:
//   - We will get the benefits of type-checking within idGen
//   - We will get some type-checking alignment between the array and idGen

function listToDict<T>(
  list: T[],
  idGen: (arg: T) => string
): { [k: string]: T } {
  const dict: { [k: string]: T } = {};

  list.forEach((element) => {
    const dictKey = idGen(element);
    dict[dictKey] = element;
  });

  return dict;
}

console.log(
  listToDict(
    [
      new Date('10-01-2021'),
      new Date('03-14-2021'),
      new Date('06-03-2021'),
      new Date('09-30-2021'),
      new Date('02-17-2021'),
      new Date('05-21-2021'),
    ],
    (arg) => arg.toISOString()
  )
);

const dict1 = listToDict(
  [{ name: 'Mike' }, { name: 'Mark' }],
  (item) => item.name
);
console.log(dict1);
dict1.Mike;

const dict2 = listToDict(phoneList, (p) => p.customerId);
dict2.fax;
console.log(dict2);
