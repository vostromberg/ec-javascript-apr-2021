var a = add(1, 2); //Funkar då add är deklarerat med function och då blir åtkomlig i hela scopet
var b = subract(1,2); // Funkar inte för att _variabeln_ subtract inte är definierad än

/* 
    scopad funktionsdeklaration,
    funktionen blir tillgänglig i hela scopet, 
    även innan den har deklarerats (pga något som kallas hoisting)
*/
function add(number1, number2){
    return number1 + number2;
}

/*
    funktion tilldelad som värde på en variabel. 
    funktionen blir tillgänglig i all kod nedanför, men kan inte nås före den här raden
*/
const subract = function(number1, number2){
    return number1 - number2;
}

/* 
    Arrow-funktion. 
    Block kan skippas om funktions-kroppen bara har en retursats
    funktionen blir tillgänglig i all kod nedanför, men kan inte nås före den här raden
*/
const multiply = (number1, number2) => number1 * number2; 

/* 
    Arrow-funktion med metodblock
    funktionen blir tillgänglig i all kod nedanför, men kan inte nås före den här raden
*/
const divide = (number1, number2) => {
    if(number2 > 0){
        return number1 / number2
    } else{
        throw "Cannot divide by zero";
    }
}