/*
    Vi ska bygga en simpel miniräknare som använder sig av eval()
    för att tolka inmatningen.

    eval() tolkar en sträng som ett programmatiskt uttryck,

    1. Gör klart funktionerna nedanför
    2. Lägg på event på alla knappar i miniräknaren (html) till rätt funktioner

    Förslag på utbyggnad:
    1. möjliggör att spara uträkningar i "minnet"
    2. Validera inmatning så att flera operatorer inte går att lägga efter varandra
    3. Lägg till möjlighet att gruppera uttryck med parenteser
*/

// Current input representerar inmatningen i kalkylatorn
let currentInput = "";
let latestResult = "";

//add input anropas vid ett knapptryck och lägger till värdet från vald knapp till inpu
function addInput(value) {
  console.log("Add input", value);
  //1. Lägg till värdet i slutet av current input
  //2. uppdatera värdet i vyn (updateDisplay())
}

// updateDisplay uppdaterar kalkylatorns display
function updateDisplay() {
  // 1. Hämta ut display-elementet
  // 2. Uppdatera innehållet så det representerar currentInput och latestResult
}

// calculate gör en beräkning baserat på uttrycket i currentInput
function calculate() {
  // 1. Lägg till felhantering om uttrycket inte kan evalueras (try-catch)
  const result = eval(currentInput);
  // 2. Uppdatera displayen
}

//Återställ kalkylatorn
function reset() {
  // 1. Rensa värden
  // 2. Uppdatera displayen
}
