/*
    Syntax:
    [].forEach(function(item, index, array){});

    forEach kör given funktion en gång för varje objekt i samlingen.
    Som inparametrar kommer
    * item  => aktuellt objekt i samlingen
    * index => index för aktuellt objekt (kan exkluderas om det inte behövs i delegat-funktionen)
    * array => referens till arrayen som forEach körs på (kan exkluderas om det inte behövs i delegat-funktionen)
    
*/
const people = [
  { name: "John Doe", age: 42 },
  { name: "Jane Doe", age: 37 },
  { name: "Cookie Doe", age: 10 },
];

// for-loop
for (var i = 0; i < people.length; i++) {
  console.log(people[i].name);
}

// map() med function-syntax
people.forEach(function (person) {
  console.log(person.name);
});

// map() med arrow-syntax
people.forEach((person) => console.log(person.name));
