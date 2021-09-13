// You can explicitly describe this object’s shape using an interface declaration:
export interface User {
  name: string;
  age: number;
  // We can also have Optional Properties:
  id?: number;
}

// You can then declare that a JavaScript object conforms to the shape of your new interface by using syntax like : TypeName after a variable declaration:
const myUser: User = {
  name: 'Michael',
  age: 33,
  id: 1231501231,
};
console.log(myUser);

// // If you provide an object that doesn’t match the interface you have provided, TypeScript will warn you:
// const user: User = {
//   username: "Hayes",
//   id: 0,
// };

// Since JavaScript supports classes and object-oriented programming, so does TypeScript. You can use an interface declaration with classes:
class UserAccount {
  // Notice the user of semicolons rather than commas
  name: string;
  age: number;
  id?: number;

  constructor(name: string, age: number, id?: number) {
    this.name = name;
    this.age = age;
    this.id = id;
  }
}
const user: User = new UserAccount('Michael', 33);
console.log(user);

// You can use interfaces to annotate parameters and return values to functions:
// This function MUST return a user
function getAdminUser(): User {
  return user;
}
console.log(getAdminUser());

function add(a: number, b: number): number {
  return a + b;
}

function sayHello(): void {
  console.log('Hello');
}

// This function MUST take in a user
function deleteUser(user: User) {
  console.log(user, 'deleted');
}
deleteUser(user);
