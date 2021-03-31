
function myFunc() {
  //Arguments loggar alla inparametrar till funktionen
  console.log(arguments);
}

/* 
  Parametrar kan skickas till en funktion även
  om de inte finns med i parameterlistan 
*/
myFunc("Hej", "Halloj!", "Hejdå!", 123);
