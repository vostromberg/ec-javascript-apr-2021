/*
    Slice och splice plockar ut ett antal element från en Array,
    med en väsentlig skillnad:

    * Slice plockar ut elementen men lämnar ursprungs-arrayen intakt
    * Splice tar bort elementen från ursprungs-arrayen
    
    och en liten förvirrande skillnad:

    * första parametern i slice och splice anger startindex
    * andra parametern i slice anger på vilket index vi ska sluta plocka
    * andra parametern i splice anger hur många element som ska plockas
*/

const people = [
    { name: "John Doe", age: 42 },
    { name: "Jane Doe", age: 37 },
    { name: "Cookie Doe", age: 10 },
  ];

const sliced = people.slice(1,2);
//sliced = Jane Doe

const spliced = people.splice(1,2);
// spliced = Jane Doe, Cookie Doe

// slice() utan parametrar kan användas för att kopiera en array
const copy = people.slice();
// copy = John Doe, Jane Doe, Cookie Doe  
