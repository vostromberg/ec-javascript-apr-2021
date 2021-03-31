/*
    Syntax:
    [].reduce(function(previousValue, currentItem, index, array){}, initialValue);

    reduce är användbar för att ackumulera värden, eller för att hitta ett värde baserat på andra värden i en Array

    reduce kör sin delegat-funktion och skickar med returvärdet in till nästa anrop.
    det som returneras vid sista objektet returneras ut från reduce-funktionen

    Som inparametrar kommer
    * previousValue => värdet från förra anropet (sätts till initialValue vid första anropet)
    * currentItem  => nuvarande värde/objekt i listan
    * index => index för aktuellt objekt (kan exkluderas om det inte behövs i delegat-funktionen)
    * array => referens till arrayen som forEach körs på (kan exkluderas om det inte behövs i delegat-funktionen)
*/

// scenario: Vi ska summera åldern på alla personer i listan
const people = [
  { name: "John Doe", age: 42 },
  { name: "Jane Doe", age: 37 },
  { name: "Cookie Doe", age: 10 },
];

// om detta ska lösas med for-loop
let totalAge = 0;
for (var i = 0; i < people.length; i++) {
  totalAge += people[i].age;
}

// reduce() med function-syntax
let person = people.reduce(function (previousValue, currentItem) {
  return previousValue + currentItem.age;
}, 0);

// reduce() med arrow-syntax
let person = people.reduce(
  (previousValue, currentItem) => previousValue + currentItem.age,
  0
);

// scenario 2: Vi ska hitta personen med den högsta åldern i listan

// om detta ska lösas med for-loop
let oldestPerson = people[0];
for (var i = 0; i < people.length; i++) {
  if (people[i].age > person.age) {
    oldestPerson = people[i];
  }
}

oldestPerson = people.reduce(function (previousValue, currentItem) {
  return previousValue.age > currentItem.age ? previousValue : currentItem;
}, people[0]);

oldestPerson = people.reduce(
  (previousValue, currentItem) =>
    previousValue.age > currentItem.age ? previousValue : currentItem,
  people[0]
);
