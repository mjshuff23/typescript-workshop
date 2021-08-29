import { User } from "./02 - interfaces";
// Never

// Because TypeScript supports code flow analysis, the language
// needs to be able to represent when code logically cannot
// happen. For example, this function cannot return:

const neverReturns = () => {
	// If it throws on the first line
	throw new Error('Always throws, never returns');
};

// If you hover on the type, you see it is a () => never
// which means it should never happen. These can still be
// passed around like other values:

// const myValue = neverReturns();

// Having a function never return can be useful when dealing
// with the unpredictability of the JavaScript runtime and
// API consumers that might not be using types:

const validateUser = (user: User) => {
	if (user) {
		return user.name !== "NaN";
	}

	// According to the type system, this code path can never
	// happen, which matches the return type of neverReturns.
	neverReturns();
};

const newUser: User = {
	name: "Johnathan",
	age: 55
};

console.log(validateUser(newUser));
