const car = {
  registrationNumber: "ABC123",
  manufacturer: "Fiat",
  model: "500",
  modelYear: 1957,
  dimensions: {
    width: 1320,
    lenght: 2970,
    height: 1320,
  },
};

//Destructuring på objekt
const { registrationNumber, model, ...rest } = car;

console.log(registrationNumber);
// ABC123

console.log(model);
// 500

console.log(rest);
/*
    {
    manufacturer: 'Fiat',
    modelYear: 1957,
    dimensions: { width: 1320, lenght: 2970, height: 1320 }
    }
*/

const numbers = [1, 2, 3, 4, 5];
//Destructuring på array
[number1, number2, ...remaining] = numbers;

console.log(number1); // 1
console.log(number2); // 2
console.log(remaining); // [3, 4, 5]
