/* funktion för att hämta lista av Star Wars-filmer
    onSuccess och onError är här exempel på callback-funktioner
    (inget som har med xhr att göra)
 */

const fetchFilms = (onSuccess, onError) => {
  //Skapa ett request-objekt
  var xhr = new XMLHttpRequest();

  // Lägg till en event listener på readystatechange
  // readystatechange ändras när anropet går in i olika faser
  xhr.addEventListener("readystatechange", function () {
    // När readystate === 4 (Done) är requesten färdig
    if (this.readyState === this.DONE) {
      // Här har vi fått svar från requesten och kan göra något med svaret
      // Om statusen klassas som successful (200-299)
      if(this.status >= 200 && this.status < 300){
        onSuccess(this.responseText);
      }
      // Annars hantera felkoden på något sätt (exempelvis som nedan);
      else{
        onError({
          status: this.status,
          statusText: this.statusText
        });
      }
    }
  });

  // om ett error kastas i requesten hanteras det här
  xhr.addEventListener("error", function (e) {
    onError(e);
  });

  xhr.open("GET", "https://swapi.dev/api/films/");

  xhr.send();
};

fetchFilms((films) => {
    console.log(films);
}, (error) => {
    console.error(error)
});
