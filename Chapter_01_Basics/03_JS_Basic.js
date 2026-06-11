/* const keywords = [
  // Control flow
  "if", "else", "switch", "case", "break", "default",
  
  // Loops
  "for", "while", "do", "continue",
  
  // Function & scope
  "function", "return", "var", "let", "const",
  
  // Object/class
  "class", "extends", "super", "this", "new",
  "instanceof", "typeof", "void", "delete",
  
  // Error handling
  "try", "catch", "finally", "throw",
  
  // Module
  "import", "export", "from", "as",
  
  // Iteration & protocols
  "of", "in", "yield", "async", "await",
  
  // Conditionals & types
  "true", "false", "null", "undefined", "NaN",
  
  // Access control
  "public", "private", "protected",
  "static", "abstract", "readonly",
  
  // Other
  "debugger", "with", "arguments",
  
  // Reserved (strict mode)
  "implements", "interface", "package", "private",
  "protected", "public", "static", "let", "yield"
];
 */

var v = 10;
console.log(v); // 10
WRTGCUV W
v = 20;
console.log(v); // 20

// --- NAMING CONVENTIONS ---

// camelCase (variables, functions)
let firstName = "John";
let lastName = "Doe";
function getUserAge() { return 25; }
console.log(`camelCase: ${firstName} ${lastName}, age ${getUserAge()}`);

// snake_case (rare in JS, common in Python / DB)
let first_name = "Jane";
let last_name = "Smith";
console.log(`snake_case: ${first_name} ${last_name}`);

// PascalCase (classes, constructors)
class UserProfile {
  constructor(name) { this.name = name; }
}
const myProfile = new UserProfile("Alice");
console.log(`PascalCase: ${myProfile.name}`);

// SCREAMING_SNAKE_CASE (constants)
const MAX_RETRY_COUNT = 3;
const API_BASE_URL = "https://api.example.com";
console.log(`SCREAMING_SNAKE_CASE: ${MAX_RETRY_COUNT}, ${API_BASE_URL}`);

// Hungarian notation (prefix indicates type)
let strMessage = "Hello";
let numCount = 42;
let arrItems = [1, 2, 3];
console.log(`Hungarian: ${strMessage}, ${numCount}, ${arrItems}`);

// kebab-case (NOT valid as an identifier — only in file names or strings)
// let user-name = "Kebab"; // SyntaxError
console.log(`kebab-case is invalid in JS — use strings like "user-name"`);

