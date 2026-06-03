// --- HOISTING IN JAVASCRIPT ---

// Hoisting is JavaScript's default behavior of moving declarations
// (variables and functions) to the top of their scope before code execution.

// --- 1. Function Hoisting ---

// Function declarations are fully hoisted (can be called before definition):
sayHello(); // "Hello!"

function sayHello() {
  console.log("Hello!");
}

// --- 2. Variable Hoisting with `var` ---

// `var` declarations are hoisted but NOT initialized (default: undefined):
console.log(myVar); // undefined (not ReferenceError)
var myVar = 10;
console.log(myVar); // 10

// The above is equivalent to:
// var myVar;
// console.log(myVar);
// myVar = 10;

// --- 3. `let` and `const` (Temporal Dead Zone) ---

// `let` and `const` are hoisted but NOT initialized.
// Accessing them before declaration throws ReferenceError (Temporal Dead Zone):

// console.log(myLet); // ❌ ReferenceError: Cannot access before initialization
let myLet = 20;

// console.log(myConst); // ❌ ReferenceError
const myConst = 30;

// --- 4. Function Expressions are NOT hoisted ---

// console.log(square(5)); // ❌ TypeError: square is not a function
var square = function (n) {
  return n * n;
};
console.log(square(5)); // 25

// --- 5. Class declarations are NOT hoisted ---

// const obj = new Person(); // ❌ ReferenceError
class Person {
  constructor(name) {
    this.name = name;
  }
}
const obj = new Person("Alice");
console.log(obj.name); // Alice

console.log("All hoisting examples demonstrated above.");
