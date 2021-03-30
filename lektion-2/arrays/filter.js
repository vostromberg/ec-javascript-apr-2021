/*
    Syntax:
    [].find(function(item, index, array){});

    filter returnerar en ny Array med alla värden/objekt i en samling baserat på sin delegatfunktion.
    om funktionen returnerar true tas objekten med,returnerar vi false tas inte objektet med.

    Som inparametrar kommer
    * item  => aktuellt objekt i samlingen
    * index => index för aktuellt objekt (kan exkluderas om det inte behövs i delegat-funktionen)
    * array => referens till arrayen som forEach körs på (kan exkluderas om det inte behövs i delegat-funktionen)
    
    filter returnerar en tom Array om inget objekt hittas
*/

// scenario: Vi ska utifrån följande array hitta alla personer över 30
const people = [
  { name: "John Doe", age: 42 },
  { name: "Jane Doe", age: 37 },
  { name: "Cookie Doe", age: 10 },
];

// om detta ska lösas med for-loop
let people = [];
for (var i = 0; i < people.length; i++) {
  if (person[i].age >= 30) {
    people.push(person[i]);
  }
}

// filter() med function-syntax
let person = people.filter(function (person) {
  return person.age >= 30;
});

// filter() med arrow-syntax
let person = people.filter((person) => person.age >= 30);
