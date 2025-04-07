// lab11/js/main.js

console.log(a); // undefined
var a = 10;
console.log(b); // Uncaught ReferenceError: Cannot access 'b' before initialization
let b = 20;
console.log(c); // Uncaught ReferenceError: Cannot access 'c' before initialization
const c = 30;

