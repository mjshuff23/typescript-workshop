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
function isCarLike(maybeCar: any) {
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

// As things stand right now, TypeScript seems to have no idea that the return value of
//  isCarLike has anything to do with the type of maybeCar
