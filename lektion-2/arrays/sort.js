/*
    Syntax:
    [].sort(function(itemA,itemB){});

    sort() sorterar om listan (ändrar ursprungslistan) baserat på vad sort-funktionen returnerar

    Som inparametrar kommer
    * itemA = första objektet som ska jämföras
    * itemB = andra objektet som ska jämföras
    
    om funktionen returnerar ett negativt resultat (-1) räknas itemA som mindre än itemB (lägger sig före i listan)
    om funktionen returnerar ett neutralt resultat (0) ligger objekten kvar i den ordning som de ligger
    om funktionen returnerar ett positivit resultat (1) räknas itemB som mindre än itemA (lägger sig före i listan)
*/

// scenario: Vi ska sortera listan på ålder
const people = [
  { name: "John Doe", age: 42 },
  { name: "Jane Doe", age: 37 },
  { name: "Cookie Doe", age: 10 },
];

//Sort kommer att ändra ursprungslistan, och vi gör därför en kopia mha slice()
const copy = people.slice();

console.log(JSON.stringify(copy));

copy.sort((itemA, itemB) => {
  //ItemA är äldre än itemB, itemA ska läggas efter B
  if (itemA.age > itemB.age) {
    return 1;
  } else {
    //ItemA läggs före B
    return -1;
  }
});
console.log(JSON.stringify(copy));
