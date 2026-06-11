# learnplaywrite

A collection of JavaScript learning files covering basic concepts.

## Contents

| File | Description |
|------|-------------|
| `firstPro.js` | First JavaScript program — reusable functions |
| `identifier-examples.js` | Examples of valid & invalid JS identifiers |
| `Chapter_01_Basics/` | JS basics — variables, data types, naming conventions |
| `Chapter_02_JS_Concepts/` | Core JavaScript concepts |
| `Chapter_02_JS_Concepts/hoisting.js` | Hoisting — definition, working & examples |
| `Chapter_03_identifier/` | Identifier rules and examples |
| `Chapter_03_identifier_literals/` | Literals in JavaScript |
| `11_05_Basics/var_fucn.js` | `var` scoping inside functions |
| `11_05_Basics/var_host.js` | `var` hoisting within function scope |
| `13_05_Session/13_Literal.js` | Literals — string, boolean, number, null, undefined |
| `13_05_Session/let_block_host.js` | `let` block scoping and TDZ demonstration |
| `13_temp_lit.js` | Template literal with string interpolation |
| `26_Literal_Number_all.js` | All JavaScript number types (int, float, binary, octal, hex, BigInt, etc.) |
| `29_backtick_single_double.js` | String types — single quotes, double quotes, and backticks compared |

## Topics Covered

- JavaScript keywords and reserved words
- Identifier naming rules
- Naming conventions (camelCase, PascalCase, snake_case, etc.)
- Variables (`var`, `let`, `const`)
- `var` scoping inside functions (function-scoped, not block-scoped)
- Basic program structure
- **Hoisting** — JavaScript's default behavior of moving declarations to the top of their scope
  - Function declarations are fully hoisted
  - `var` is hoisted (initialized as `undefined`)
  - `let` / `const` are hoisted but in Temporal Dead Zone (TDZ)
  - Function expressions & class declarations are **not** hoisted
- **Literals** — string, boolean, number, null, undefined
- **Number types** — integer, float, binary, octal, hexadecimal, BigInt, Infinity, NaN
- **String types** — single quotes, double quotes, template literals (backticks)
- **Template literals** — string interpolation, multi-line strings, expressions

## Functions in VS Code

JavaScript functions are blocks of reusable code. VS Code provides rich support for writing and debugging them:

### Function Types in JS

| Type | Hoisted? | Syntax Example |
|------|----------|---------------|
| **Function Declaration** | ✅ Yes (fully) | `function greet() { }` |
| **Function Expression** | ❌ No | `const greet = function() { }` |
| **Arrow Function** | ❌ No | `const greet = () => { }` |

### VS Code Features for Functions

- **IntelliSense** — autocomplete for function names, parameters, and return types
- **Go to Definition** (`F12` / `Cmd+Click`) — jump to a function's declaration
- **Peek Definition** (`Alt+F12`) — preview a function inline
- **Find All References** (`Shift+F12`) — see where a function is used
- **Parameter Hints** (`Ctrl+Shift+Space`) — show expected parameters as you type
- **Debugging** — set breakpoints inside functions, step over/into/out, inspect variables in the call stack
- **Rename Symbol** (`F2`) — rename a function across the entire project

### Related Files

| File | What It Covers |
|------|---------------|
| `firstPro.js` | Writing reusable functions (`isPrime`, `printPrimes`) — parameters, return values, calling one function from another |
| `Chapter_02_JS_Concepts/hoisting.js` | How function declarations vs expressions behave with hoisting |
| `Chapter_01_Basics/03_JS_Basic.js` | `camelCase` naming convention for functions |
| `Chapter_03_identifier/VS_shortcut.md` | VS Code keyboard shortcuts |
| `11_05_Basics/var_fucn.js` | `var` function scoping vs global scope |
| `11_05_Basics/var_host.js` | `var` hoisting within function scope |
