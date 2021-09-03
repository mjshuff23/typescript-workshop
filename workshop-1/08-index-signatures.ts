// Index Signatures
/*
  Sometimes we need to represent a type for dictionaries, where values of a consistent type are retrievable by keys.

  Consider this collection of phone numbers:
*/
const phones = {
  home: { country: "+1", area: "830", number: "210-0910" },
  work: { country: "+1", area: "830", number: "511-0910" },
  mobile: { country: "+1", area: "830", number: "630-0910" },
};

// We can store phone numbers under a `key` (home, work, mobile, etc...) where each number has three properties that are strings

// We can describe this value using an `index signature`
const phonesIndex: {
  [ k: string ]: {
    country: string,
    area: string,
    number: string,
  } | undefined;
} = { };

console.log(phonesIndex.area.number);
