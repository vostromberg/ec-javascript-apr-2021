/*
    Syntax:
    [].some(function(item, index, array){});

    some() kollar om ett värde/objekt finns i en lista baserat på delegat-funktionen.
    om delegat-funktionen returnerar true på ett objekt så returnerar some() true,
    annars returneras false

    Som inparametrar kommer
    * item  => aktuellt objekt i samlingen
    * index => index för aktuellt objekt (kan exkluderas om det inte behövs i delegat-funktionen)
    * array => referens till arrayen som forEach körs på (kan exkluderas om det inte behövs i delegat-funktionen)
    
*/

// scenario: Vi ska utifrån följande se om någon är över 40 år
const people = [
  { name: "John Doe", age: 42 },
  { name: "Jane Doe", age: 37 },
  { name: "Cookie Doe", age: 10 },
];

// om detta ska lösas med for-loop
let someonesOver40 = false;
for (var i = 0; i < people.length; i++) {
  if (person[i].age >= 40) {
    someonesOver40 = true;
    break; // Gå ur loopen, ingen vits att köra fler varv
  }
}

// some() med function-syntax
let person = people.some(function (person) {
  return person.age >= 40;
});

// some() med arrow-syntax
let person = people.some((person) => person.age >= 40);
