// ========================
// JavaScript Number Types
// ========================

// 1. Integer (Decimal)
let intVal = 42;
console.log("Integer:", intVal, typeof intVal);

// 2. Floating-point
let floatVal = 3.14;
console.log("Float:", floatVal, typeof floatVal);

// 3. Scientific (Exponential) notation
let sciVal = 1.5e3; // 1500
console.log("Scientific:", sciVal, typeof sciVal);

// 4. Negative number
let negVal = -10;
console.log("Negative:", negVal, typeof negVal);

// 5. Binary (0b prefix)
let binVal = 0b1010; // 10 in decimal
console.log("Binary:", binVal, typeof binVal);

// 6. Octal (0o prefix)
let octVal = 0o12; // 10 in decimal
console.log("Octal:", octVal, typeof octVal);

// 7. Hexadecimal (0x prefix)
let hexVal = 0x1A; // 26 in decimal
console.log("Hexadecimal:", hexVal, typeof hexVal);

// 8. BigInt (n suffix) — for integers beyond Number.MAX_SAFE_INTEGER
let bigVal = 1234567890123456789012345678901234567890n;
console.log("BigInt:", bigVal, typeof bigVal);
console.log("Max safe integer:", Number.MAX_SAFE_INTEGER);

// 9. Numeric separator (underscores for readability)
let sepVal = 1_000_000;
console.log("Separator:", sepVal, typeof sepVal);

// 10. Infinity
let infVal = Infinity;
console.log("Infinity:", infVal, typeof infVal);
console.log("Division by zero:", 1 / 0);

// 11. NaN (Not a Number)
let nanVal = NaN;
console.log("NaN:", nanVal, typeof nanVal);
console.log("Invalid math:", "hello" * 5);

// 12. Zero (positive and negative)
let zeroVal = 0;
let negZeroVal = -0;
console.log("Zero:", zeroVal, typeof zeroVal);
console.log("Negative zero:", negZeroVal, typeof negZeroVal);
console.log("Are they equal?", Object.is(zeroVal, negZeroVal)); // false

// 13. Number.EPSILON — smallest difference between two representable numbers
console.log("Epsilon:", Number.EPSILON);

// 14. Number.MAX_VALUE / Number.MIN_VALUE — min and max finite values
console.log("Max value:", Number.MAX_VALUE);
console.log("Min value:", Number.MIN_VALUE);
