let a;
let b = undefined;

console.log(a); // undefined;
console.log(b); // undefined;
console.log(c); // undefined;

console.log(a.hej); // TypeError: undefined is not an object (evaluating 'a.hej')

let d = null;

console.log(d); // null

console.log(d.hej); //TypeError: null is not an object (evaluating 'd.hej')

undefined == null; // true
undefined === null; // false
