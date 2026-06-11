// ====================================================
// String types: Single quotes, Double quotes, Backticks
// ====================================================

// --- Single quotes ---
let single = 'Hello World';

// --- Double quotes ---
let double = "Hello World";

// --- Backticks (Template Literals - ES6) ---
let backtick = `Hello World`;

// ---------- KEY DIFFERENCES ----------

// 1. Multi-line strings
let singleMulti = 'Line 1\nLine 2';        // needs \n
let doubleMulti = "Line 1\nLine 2";        // needs \n
let backtickMulti = `Line 1
Line 2`;                                     // actual newline works!

// 2. String interpolation (expression embedding)
let name = "Alice";
console.log('Hello ' + name);               // concatenation
console.log("Hello " + name);               // concatenation
console.log(`Hello ${name}`);               // template literal

// 3. Expressions inside template literals
let a = 10, b = 20;
console.log(`${a} + ${b} = ${a + b}`);     // "10 + 20 = 30"

// 4. Escaping quotes inside strings
console.log("It's a car");                  // double outside, single inside — fine
console.log('He said "hello"');             // single outside, double inside — fine
console.log('It\'s a car');                 // need escape with single
console.log(`It's a "car"`);               // no escaping needed

// ---------- REAL TEMPLATE LITERAL EXAMPLES ----------

// 1. HTML generation
let user = "Bob";
let role = "admin";
let html = `
  <div class="user-card">
    <h2>${user}</h2>
    <span>Role: ${role}</span>
  </div>
`;
console.log("HTML:", html);

// 2. API URL construction
let baseUrl = "https://api.example.com";
let userId = 42;
let endpoint = `users/${userId}/posts`;
let url = `${baseUrl}/${endpoint}`;
console.log("API URL:", url);

// 3. Conditional content
let loggedIn = true;
let message = `Welcome${loggedIn ? ` back, ${name}!` : "! Please sign in."}`;
console.log("Conditional:", message);

// 4. Tagged templates (advanced)
function highlight(strings, ...values) {
  return strings.reduce((result, str, i) =>
    `${result}${str}${values[i] ? `**${values[i]}**` : ""}`, ""
  );
}
let tagged = highlight`User ${name} scored ${95} points`;
console.log("Tagged template:", tagged);
