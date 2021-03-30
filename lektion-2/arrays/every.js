/*
    Syntax:
    [].every(function(item, index, array){});

    every() kollar om alla objekt i en lista matchar delegat-funktionen.
    om delegat-funktionen returnerar true på alla objekt så returnerar every() true,
    om ett objekt inte matchar returnerar every() false

    Som inparametrar kommer
    * item  => aktuellt objekt i samlingen
    * index => index för aktuellt objekt (kan exkluderas om det inte behövs i delegat-funktionen)
    * array => referens till arrayen som forEach körs på (kan exkluderas om det inte behövs i delegat-funktionen)
    
*/

// scenario: Vi ska utifrån följande se om alla är över 40 år
const people = [
  { name: "John Doe", age: 42 },
  { name: "Jane Doe", age: 37 },
  { name: "Cookie Doe", age: 10 },
];

// om detta ska lösas med for-loop
let everyoneIsOver40 = true;
for (var i = 0; i < people.length; i++) {
  if (person[i].age >= 40) {
    everyoneIsOver40 = false;
    break; // Gå ur loopen, ingen vits att köra fler varv
  }
}

// every() med function-syntax
let person = people.every(function (person) {
  return person.age >= 40;
});

// every() med arrow-syntax
let person = people.every((person) => person.age >= 40);
