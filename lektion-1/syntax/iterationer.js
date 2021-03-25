const numbers = [1, 2, 3];

//For-loop
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[0]);
}
//While loop
let i = 0;
while (i < numbers.length) {
  console.log(numbers[0]);
  i++; // Samma som i = i + 1
}
// [].forEach()
numbers.forEach(function (value, index, array) {
  console.log(value);
});

