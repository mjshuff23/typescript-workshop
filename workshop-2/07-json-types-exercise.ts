// /* JSON Types Exercise
//   Let’s put our knowledge to the test, by defining a type that describes any allowable JSON value.

//   Here’s the relevant section of the specification:
//     A JSON value MUST be an:
//       - object
//       - array
//       - number
//       - string,
//     or one of the following three literal names:
//       - false
//       - true
//       - null
// */

// Starting Point
// All of our primitive types
type Primitive = number | boolean | string | null;

type JSONObject = { [k: string]: JSONValue };
type JSONArray = JSONValue[];
type JSONValue = Primitive | JSONArray | JSONObject;

///// DO NOT EDIT ANY CODE BELOW THIS LINE /////
function isJSON(arg: JSONValue) {}

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
