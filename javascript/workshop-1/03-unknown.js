"use strict";
/**************************************** UNKNOWN  *******************************************/
// Unknown is one of those types that once it clicks, you
// can find quite a lot of uses for it. It acts like a sibling
// to the `any` type. Where `any` allows for ambiguity - `unknown`
// requires specifics.
// A good example would be in wrapping a JSON parser. JSON
// data can come in many different forms and the creator
// of the json parsing function won't know the shape of the
// data - the person calling that function should.
const jsonParser = (jsonString) => JSON.parse(jsonString);
const myAccount = jsonParser(`{ "name": "Dorothea" }`);
console.log(myAccount.name); // Dorothea
console.log(myAccount.email); // undefined
console.log(myAccount); // { name: 'Dorothea' }
// If you hover on jsonParser, you can see that it has the
// return type of any, so then does myAccount. It's possible
// to fix this with Generics - but it's also possible to fix
// this with unknown.
const jsonParserUnknown = (jsonString) => JSON.parse(jsonString);
const myUserAccount = jsonParserUnknown(`{ "name": "Samuel" }`);
console.log(myUserAccount.name);
// Unknown is a great tool, to understand it more read these:
// https://mariusschulz.com/blog/the-unknown-type-in-typescript
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html#new-unknown-top-type
