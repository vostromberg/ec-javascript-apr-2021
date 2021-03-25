const a = 123;
const b = 124;

function hej() {
  //Början av scope
  const a = 1;
  const b = 2;
  function innerFunction(){
    const c = 3;
    return a + b + c;
  }
  //c finns inte tillgänglig här
  return a + b + innerFunction();
  //Slut på scope
}

if (a > b) {
  //Början av scope
  const a = 3;
  const b = 5;
  //Slut på scope
} else {
  //Början av scope
  const a = 12;
  const b = 12;
  //Slut på scope
}

for (let i = 0; i < 3; i++) {
  //Början av scope
  const a = 41;
  const b = 42;
  const c = 45;
  console.log(a,b,c);
  //Slut på scope
}

console.log(a); // 123;
console.log(b); // 124;
console.log(c); // undefined, c är definierat i ett annat scope