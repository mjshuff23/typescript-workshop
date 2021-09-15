# TypeScript Workshop 2

## React

To start a new Create React App project with TypeScript, you can run:

- `npx create-react-app <<project name>> --template typescript`
- `yarn create-react-app <<project name>> --template typescript`

To add TypeScript to an existing Create React App project, first install it:

- `npm install --save typescript @types/node @types/react @types/react-dom @types/jest`
- `yarn add typescript @types/node @types/react @types/react-dom @types/jest`
- Next, rename any file to be a TypeScript file (e.g. `src/index.js` to `src/index.tsx`) and restart your development server!

Type errors will show up in the same console as the build one. You'll have to fix these type errors before you continue development or build your project.
For advanced configuration, [see here](https://create-react-app.dev/docs/advanced-configuration)
[TypeScript React Example](https://www.typescriptlang.org/play?jsx=2&esModuleInterop=true&e=196#example/typescript-with-react)
