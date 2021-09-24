/////////////////////////////////// Built-In Type Guards ///////////////////////////////////
let value:
  | Date
  | null
  | undefined
  | 'pineapple'
  | [number]
  | { dateRange: [Date, Date] };

// instanceof
if (value instanceof Date) {
  value;
}

// typeof
else if (typeof value === 'string') {
  value;
}

// specific check
else if (value === null) {
  value;
}

// truthy/falsy
else if (!value) {
  value;
}

// built-in function
else if (Array.isArray(value)) {
  value;
}

// property presence check
else if ('dateRange' in value) {
  value;
} else {
  value;
}

/////////////////////////////////// User-Defined Type Guards ///////////////////////////////////
interface CarLike {
  make: string;
  model: string;
  year: number;
}

let maybeCar: unknown;

if (
  maybeCar &&
  typeof maybeCar === 'object' &&
  'make' in maybeCar &&
  typeof maybeCar['make'] === 'string' &&
  'model' in maybeCar &&
  typeof maybeCar['model'] === 'string' &&
  'year' in maybeCar &&
  typeof maybeCar['year'] === 'number'
) {
  maybeCar;
}

// Obviously this is very messy, maybe we could turn the check into a function?
// function isCarLike(maybeCar: any) {
// return (
//   maybeCar &&
//   typeof maybeCar === 'object' &&
//   'make' in maybeCar &&
//   typeof maybeCar['make'] === 'string' &&
//   'model' in maybeCar &&
//   typeof maybeCar['model'] === 'string' &&
//   'year' in maybeCar &&
//   typeof maybeCar['year'] === 'number'
// );
// }

// if (isCarLike(maybeCar)) {
//   maybeCar;
// }

// As things stand right now, TypeScript seems to have no idea that the return value of
//  isCarLike has anything to do with the type of maybeCar

///////////////////////////////////// value is Foo /////////////////////////////////////
/*
  The first kind of user-defined type guard we will review is an is type guard. It is perfectly
   suited for our example above because it’s meant to work in cooperation with a control flow
   statement of some sort, to indicate that different branches of the “flow” will be taken based
   on an evaluation of valueToTest’s type. Pay very close attention to isCarLike’s return type
*/
function isCarLike(maybeCar: any): maybeCar is CarLike {
  return (
    maybeCar &&
    typeof maybeCar === 'object' &&
    'make' in maybeCar &&
    typeof maybeCar['make'] === 'string' &&
    'model' in maybeCar &&
    typeof maybeCar['model'] === 'string' &&
    'year' in maybeCar &&
    typeof maybeCar['year'] === 'number'
  );
}

if (isCarLike(maybeCar)) {
  maybeCar;
}

///////////////////////////////// asserts value is Foo /////////////////////////////////
/*
  There is another approach we could take that eliminates the need for a conditional.
   Pay very close attention to assertsIsCarLike’s return type:
*/

function assertsIsCarLike(maybeCar: any): asserts maybeCar is CarLike {
  if (
    !(
      maybeCar &&
      typeof maybeCar === 'object' &&
      'make' in maybeCar &&
      typeof maybeCar['make'] === 'string' &&
      'model' in maybeCar &&
      typeof maybeCar['model'] === 'string' &&
      'year' in maybeCar &&
      typeof maybeCar['year'] === 'number'
    )
  ) {
    throw new Error(`Value does not appear to be a CarLike${maybeCar}`);
  }
}

maybeCar;
assertsIsCarLike(maybeCar);
maybeCar;

//////////////////////////////// Writing High-Quality Guards ////////////////////////////////
// It's important to remember not to make common mistakes when writing type guards.  For example,
//  forgetting that 0 and "" will both evaluate to false here:
// BAD EXAMPLE //
function isNull(val: any): val is null {
  return !val;
}

const empty = '';
const zero = 0;
if (isNull(zero)) {
  console.log(zero);
}
if (isNull(empty)) {
  console.log(empty);
}
