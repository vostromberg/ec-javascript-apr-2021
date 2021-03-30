// Skapa en array
const people = [
  { name: "John Doe", age: 42 },
  { name: "Jane Doe", age: 37 },
];

// Skapa en ny array, baserat på people och lägg in ett nytt objekt
const newArray = [
    ...people, // Spread (...) lägger in objekten från people-arrayen
    { name: "Jimmy Doe", age: 50 } // Nytt objekt 
];

// Lägg till ett element
people.push({ name: "Cookie Doe", age: 10 }); 

// Vänder ordningen på en array (ändrar original-arrayen)
people.reverse();

// plocka bort första elementet från arrayen
const person = people.shift();

// plocka bort sista elementet från arrayen
const person = people.pop();

// kollar om ett objekt finns i listan
people.includes(obj);