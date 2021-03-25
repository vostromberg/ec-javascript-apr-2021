
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 42
};

const person2 = {
    firstName: "Jane",
    lastName: "Doe",
    age: 20,
    parent: person //person2.parent === person: true
}

console.log(person.firstName);
console.log(`${person2.parent.firstName} is parent of ${person2}`);

//Värde kan även hämtas på nyckel
console.log(person["lastName"]);
