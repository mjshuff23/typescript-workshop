// Intersection Types
// Intersection types can be described using the `&` (ampersand) operator

// For example, what if we had a Promise that had extra startTime and endTime properties to it?
// We can merge these types together with an intersection return
function makeWeek(): Date & { end: Date } {
  // <- return type

  const start = new Date();
  const end = new Date(start.valueOf() + 20000);

  return { ...start, end }; // kind of Object.assign.
  // return start;
  // return end;
}

// Here we get everything from our start Date with the addition of an end Date
const thisWeek = makeWeek();

thisWeek.toISOString();
thisWeek.end.toISOString();

// Union Types are FAR more common than Intersection Types, but you will see them
