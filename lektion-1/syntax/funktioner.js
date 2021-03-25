function add(number1, number2){
    return number1 + number2;
}

// Funktion tilldelad som värde på en variabel. 
const subract = function(number1, number2){
    return number1 - number2;
}

// Arrow-funktion
const divide = (number1, number2) => {
    if(number2 > 0){
        return number1 / number2
    } else{
        throw "Cannot divide by zero";
    }
}

// Arrow-funktion med endast en retursats
const multiply = (number1, number2) => number1 * number2; 

// Anrop av en funktion
add(1,2);

// Tilldelning av resultatet av en funktion
const result = add(1,2);

console.log(result);