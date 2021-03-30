/*
    Syntax:
    [].find(function(item, index, array){});

    find letar efter ett värde/objekt i en samling baserat på sin delegatfunktion.
    om funktionen returnerar true har vi hittat objektet, returnerar vi false är det inte rätt objekt.

    Som inparametrar kommer
    * item  => aktuellt objekt i samlingen
    * index => index för aktuellt objekt (kan exkluderas om det inte behövs i delegat-funktionen)
    * array => referens till arrayen som forEach körs på (kan exkluderas om det inte behövs i delegat-funktionen)
    
    find returnerar null om inget objekt hittas
*/

// scenario: Vi ska utifrån följande array hitta personen Cookie Doe
const people = [
  { name: "John Doe", age: 42 },
  { name: "Jane Doe", age: 37 },
  { name: "Cookie Doe", age: 10 },
];

// om detta ska lösas med for-loop
let person = null;
for (var i = 0; i < people.length; i++) {
  if (person[i].name === "Cookie Doe") {
    person = person;
    break;
  }
}

// find() med function-syntax
let person = people.find(function (person) {
  return person.name === "Cookie Doe";
});

// find() med arrow-syntax
let person = people.find((person) => person.name === "Cookie Doe");
