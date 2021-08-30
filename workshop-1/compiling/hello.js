// Yeee
console.log("Hello, world!");
// // This is an industrial-grade general-purpose greeter function
// function greet(person, date) {
//   console.log(`Hello ${person}! Today is ${date}`);
// }
// greet("John");
function greet(user, date) {
    console.log(`Hello ${user}, today is ${date.toDateString()}!`);
}
greet("Michael", new Date());
