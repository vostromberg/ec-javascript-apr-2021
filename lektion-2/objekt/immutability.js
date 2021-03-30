function createPerson(firstName, lastName, age) {
  return {
    firstName,
    lastName,
    age,
  };
}

// Mutability = ett objekt kan förändras efter att det har skapats
// Vanligt i OOP
let person1 = createPerson("John", "Doe", 42);
person1.lastName = "Mayer"; 

// Immutability = ett objekt får inte förändras efter att det har skapats
// Vanligt i Funktionell Programmering. Object.freeze
let person2 = Object.freeze(createPerson("Jane", "Doe", 12));

person2.firstName = "Hej"; //Inget kommer att ändras pga. object.freeze

person2 = {
  ...person2,
  lastName: "Mayer",
};
