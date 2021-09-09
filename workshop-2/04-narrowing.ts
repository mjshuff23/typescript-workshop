/* In order to give context to narrowing, let's revisit unions
    - Unions are described using the `|` (pipe) operator
    - Unions can be thought of as an `or` clause
      - "success" | "error" = "success" or "error"
*/
function flipCoin(): 'heads' | 'tails' {
  if (Math.random() > 0.5) return 'heads';
  return 'tails';
}

const myFunc = () => {};

/* Narrowing With Type Guards
    - When we need to separate the potential possibilities of a Union, we often need to do type guards
    - Type guards are expressions, which when used with control flow statements, allow us to have a more specific type for a particular value
    - Often times we will use `typeof` and `instanceof` for narrowing with type guards.
*/

function maybeGetUserInfo(
  // ?: - optional parameter
  string?: 'error' | 'success'
): Error | { name: string; email: string } | 'need an argument' {
  if (string === 'error') {
    throw new Error();
  } else if (string === 'success') {
    return { name: 'Michael', email: 'mshuff@appacademy.io' };
  } else {
    return 'need an argument';
  }
}

console.log(maybeGetUserInfo('success'));
// console.log(maybeGetUserInfo('error'));
console.log(maybeGetUserInfo());
