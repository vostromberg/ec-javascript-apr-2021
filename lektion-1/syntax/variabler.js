//Deklaration med var
var a = "hej";      
var a = "hej hej"; // OK
a = "Hallå" //OK


//Deklaration med let
let b = "hej";
let b = "hej hej"; // Inte OK, variabler med let kan bara deklareras en gång
b = "Hallå" // OK

function hej(){
    let b = "hallå" // OK, nytt scope i funktionen
    //deklaration av b här för att variabeln c utanför inte kan nås
}

//Deklaration med const
const c; //  Inte OK, variabler med const måste tilldelas vid deklarering
const c = "hej";
const c = "hej hej" // Inte OK, variabler med const kan bara deklareras en gång
c = "Hallå"; // Inte OK, const kan inte skrivas över

const c = "hej";

function hej(){
    const c = "hallå" // OK, nytt scope i funktionen
    //Deklaration av c här gör att variabeln c utanför inte kan nås
}

