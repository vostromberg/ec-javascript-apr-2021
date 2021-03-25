// Skapa ett nytt datum med tidpunkten från när det skapades
const myDate = new Date(); 

// Några användbara funktioner på Date
myDate.getFullYear(); // Returnerar året
myDate.getMonth(); // Returnerar månad, januari = 0
myDate.getDate(); // Returnerar datum i månad, 1 = första i månaden
myDate.getDay(); // Returnerar dag i veckan sön = 0, mån = 1 osv.
myDate.getHours(); // Returnerar timme på dagen
myDate.getMinutes(); // Returnerar minuter på timmen
myDate.getSeconds(); // Returnerar sekunder på minuten

// Motsvarande funktioner finns för UTC (Coordinated Universal Time)
// UTC tar inte hänsyn till tidszoner, utan ger samma tidpunkt vart du än är.
// UTC är vanligt vid kommunikation mellan olika system, då de kan befinna sig i olika tidszoner
// Ex:
myDate.getUTCHours(); // Returnerar timme utifrån UTC
myDate.getUTCDate(); // Returnerar datum utifrån UTC

myDate.toISOString(); // Returnerar datumsträng enligt ISO-standard
myDate.toLocaleString(); // Returnerar datumsträng enligt lokal standard för enheten
myDate.toJSON(); // Returnerar datumsträng enligt JSON-format

// Få nuvarande tidpunkt som millisekunder (sedan 1 januari, 1970 UTC)
const nowAsMs = Date.now();

//Konvertera datum till ms
const dateAsMs = Number(myDate);