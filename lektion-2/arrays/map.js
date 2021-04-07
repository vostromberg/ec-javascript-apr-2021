/*
    Syntax:
    [].map(function(item, index, array){});

    map skapar en ny array med returvärdena från given funktion, som körs en gång för varje objekt i samlingen.
    Som inparametrar kommer
    * item  => aktuellt objekt i samlingen
    * index => index för aktuellt objekt (kan exkluderas om det inte behövs i delegat-funktionen)
    * array => referens till arrayen som forEach körs på (kan exkluderas om det inte behövs i delegat-funktionen)
    
*/

// scenario: Vi ska utifrån följande array göra en ny array med enbart namnen från people
const people = [
  { name: "John Doe", age: 42 },
  { name: "Jane Doe", age: 37 },
  { name: "Cookie Doe", age: 10 },
];

// om detta ska lösas med for-loop
let names = [];
for (var i = 0; i < people.length; i++) {
  names.push(people[i].name);
}

// map() med function-syntax
let names = people.map(function (person) {
  return person.name;
});

// map() med arrow-syntax
let names = people.map((person) => person.name);
