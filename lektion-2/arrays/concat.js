/*
    concat slår samman två arrayer.
    concat kan även skrivas med spread-operator (...)
*/

const array1 = [1,2];
const array2 = [3,4];

console.log(array1.concat(array2)); // [1,2,3,4]
console.log(array2.concat(array1)); // [3,4,1,2]

console.log([...array1, ...array2]); // [1,2,3,4]
console.log([...array2, ...array1]); // [3,4,1,2]