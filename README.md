# TypeScript

TypeScript offers a strict-type check as a superset of the JavaScript language. Limiting the use of dynamic variables can help reduce unexpected behaviors and increase forethought about how your code is expected to run.

## `tsc`, the TypeScript Compiler

- Installation:
  - `npm install -g typescript`
    - This installs TypeScript globally, but feel free to install it locally in your project or even using `npx`
- Compiling Code:
  - `tsc <<filename.ts>>` - To compile your TypeScript into JavaScript
    - If you have a TypeScript error and attempt to compile it, you will get a warning, but it will STILL compile it.
    - `tsc --noEmitOnError <<filename.ts>>` - JavaScript file with not be updated if an error in TypeScript occurs
