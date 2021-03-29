/*
  try-catch-block hjälper till att hantera fel som kan uppstå under körning av applikationen.
  Tänk på att inte använda try-catch för att dölja fel, hellre att fel uppstår så att de går att rätta till
  än att de döljs under ytan och att nya följdfel uppstår pga detta
 */

  function riskyFunction(number){
    if(number === undefined){
        throw "Number was undefined";
    }
    else {
        return number.toString();
    }
  }

  try{
      //Försök till operation där fel kan uppstå
      const result = riskyFunction();
  } catch(ex){
      // Alla fel som uppstår i try-blocket fångas upp i catch-blocket. inparametern är det kastade felet
      // Här kan felhantering göras (loggning, omdirigeringar etc.)
      // Vill man logga felet och släppa vidare det kan detta göras med nyckelordet throw
      console.error(ex);
  }
  finally{
      // i finally-blocket kan kod läggas som alltid ska köras, oavsett utkomst
      // Ett vanligt scenario är att resurser är upplåsta som behöver frigöras även om operationen misslyckades
      console.log("In finally")
  }
