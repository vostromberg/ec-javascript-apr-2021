// Instansiera array med värden
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// Array får ha värden av olika typer, men det bör undvikas
const nono = ["Hej", 123, null, { name: "Homer" }];

// Instansiera tom array
const months = [];

//Lägga in värden i array
months.push("Jan"); // Hamnar på position 0
months.push("Feb"); // Hamnar på position 1
// ...

//Hämta värde på position i array
console.log(months[1]); // "Feb"

