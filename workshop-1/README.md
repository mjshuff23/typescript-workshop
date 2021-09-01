# TypeScript

TypeScript offers a strict-type check as a superset of the JavaScript language. Limiting the use of dynamic variables can help reduce unexpected behaviors and bugs. Because if is a superset of JavaScript, JavaScript syntax is legal TypeScript.

## `tsc`, the TypeScript Compiler [Code Example](./compiling/hello.ts)

- Installation:
  - `npm install -g typescript`
    - This installs TypeScript globally, but feel free to install it locally in your project or even using `npx`
- Compiling Code:
  - `tsc <<filename.ts>>` - To compile your TypeScript into JavaScript
    - If you have a TypeScript error and attempt to compile it, you will get a warning, but it will STILL compile it.
    - `tsc --noEmitOnError <<filename.ts>>` - JavaScript file with not be updated if an error in TypeScript occurs
  - You may notice that `tsc` will downgrade (known as _downleveling_) your ES6 syntax (`let`, `const`, _template strings_) to ES3. without additional flags.
    - To keep ES6 syntax use the flag `tsc --target es2015 <<filename.ts>>`

### Strictness

- Different users use TypeScript for different reasons. Some are looking for a more lenient experience where they can use _type inference_ and there is no checking for potential `null`/`undefined` values. (This is the best way to start when migrating JavaScript files)
- Many users prefer to have TypeScript validate as much as it can immediately, which is why TypeScript offers Strictness settings. These strictness settings turn static type-checking from a switch (either your code is checked or not) into something closer to a dial. The further you turn this dial up, the more TypeScript will check for you. This can require a little extra work, but generally speaking it pays for itself in the long run, and enables more thorough checks and more accurate tooling. When possible, a new codebase should always turn these strictness checks on.
- TypeScript has several type-checking strictness flags that can be turned on or off:
  - The `--strict` flag in the CLI, or `"strict": true` in a `tsconfig.json` toggles them all on simultaneously, but we can opt out of them individually. The two biggest ones you should know about are `noImplicitAny` and `strictNullChecks`.
  - **noImplicitAny**
    - Recall that in some places, TypeScript doesn’t try to infer any types for us and instead falls back to the most lenient type: `any`. This isn’t the worst thing that can happen - after all, falling back to `any` is just the plain JavaScript experience anyway.
    - However, using `any` often defeats the purpose of using TypeScript. The more typed your program is, the more validation and tooling you'll get, allowing you to avoid more bugs.
    - Turning on the `noImplicitAny` flag will issue an error on any variables whose type is implicitly inferred as `any`.
  - **strictNullChecks**
    - By default, values like `null` and `undefined` are assignable to any other type. This can make writing some code easier, but forgetting to handle `null` and `undefined` is the cause of countless bugs in the world - some consider it a billion dollar mistake! The `strictNullChecks` flag makes handling `null` and `undefined` more explicit, and spares us from worrying about whether we forgot to handle `null` and `undefined`.
