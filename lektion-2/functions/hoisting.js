const a = getValue(); // ok pga hoisting
const b = getOtherValue(); // inte ok, pga variabeltilldelning

console.log(a);
console.log(b);

function getValue(){
    return 1;
}

const getOtherValue = function(){
    return 2;
}