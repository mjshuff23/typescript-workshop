/*
   Enums are one of the few features TypeScript has which is not a type-level extension of JavaScript.

   Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.
*/

/********************************** Numeric enums *********************************************/
enum Direction {
  Up = 1,
  Down, // 2
  Left, // 3
  Right, // 4
}

// Above, we have a numeric enum where Up is initialized with 1. All of the following members are auto - incremented from that point on.In other words, Direction.Up has the value 1, Down has 2, Left has 3, and Right has 4.;
// If we didn't initialize our first enum option with `1`, it would have started at `0`
// console.log(Direction);
// console.log(Direction.Up);
// console.log(Direction[ '1' ]);
console.log(Direction['3']);

// // Using an enum is simple: just access any member as a property off of the enum itself, and declare types using the name of the enum:
enum UserResponse {
  No = 0,
  Yes = 1,
}
console.log(UserResponse['0']);

function respond(recipient: string, message: UserResponse): void {
  console.log(`${recipient}: ${message}`);
}
respond('Michael', UserResponse.No);

// /********************************** String enums *********************************************/
// // String enums are a similar concept, but have some subtle runtime differences as documented below. In a string enum, each member has to be constant-initialized with a string literal, or with another string enum member.
enum StringDirections {
  Up = 'NORTH',
  Down = 'SOUTH',
  Left = 'WEST',
  Right = 'EAST',
}

console.log(StringDirections);
