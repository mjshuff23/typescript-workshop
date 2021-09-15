"use strict";
// /* JSON Types Exercise
//   Let’s put our knowledge to the test, by defining a type that describes any allowable JSON value.
///// DO NOT EDIT ANY CODE BELOW THIS LINE /////
function isJSON(arg) { }
// POSITIVE test cases (must pass)
isJSON('hello');
isJSON([4, 8, 15, 16, 23, 42]);
isJSON([4, [8, [15, 'test']], 16, 23, 42]);
isJSON([true, false, false, true]);
isJSON({ greeting: { hello: true } });
isJSON(false);
isJSON(true);
isJSON(null);
isJSON({ a: { b: [2, 3, 'foo'] } });
// NEGATIVE test cases (must fail)
// isJSON(() => '');
// isJSON(class {});
// isJSON(undefined);
// isJSON(new BigInt(143));
// isJSON(isJSON);
