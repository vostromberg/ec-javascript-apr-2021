//Deklarering av en sträng
const a = "Det här är en sträng";
const b = 'Strängar kan också skrivas med enkelfnuttar';

// Strängkonkatenering (sammanslagning av strängar)
const c = a + ". " + b + ". Och strängar kan sättas ihop med varandra genom +";
console.log(c);

// Stränginterpolering (ersättning av variabler i strängar). Görs med bakåtfnuttar 
// Variabler läggs in i strängen med ${}
const d = `${a}. ${b}. Nu har vi interpolerat strängen`;
console.log(d);

//Några nyttiga funktioner

//substr plockar ut en del av strängen. Första parametern anger index, andra anger antal tecken
"Hello World".substr(0, 2); // = "He"
"Hello World".substr(2, 3); // = "llo"
"Hello World".substr(-2, 2); // "ld", negativt index räknas från slutet av strängen

// indexOf söker efter förekomsten av en sträng
"Hello World".indexOf("World"); // = 6, Startindex för första träffen av strängen "World"
"Hello World".indexOf("Hi"); // = -1, Ingen träff, -1 returneras

// replace ersätter förekomsten av en sträng med en annan
"Hello World".replace("Hello", "Hi"); // "Hi World"
"Hello World, Hello World".replace("Hello", "Hi"); // "Hi World, Hello World" (WHAT???). Replace på sträng ersätter bara första förekomsten
"Hello World, Hello World".replace(/Hello/g, "Hi"); // "Hi World, Hi World". Replace med reguljäruttryck kan ersätta alla förekomster med 'flaggan' g

"Hello World".toLowerCase(); // "hello world";
"Hello World".toUpperCase(); // "HELLO WORLD";

