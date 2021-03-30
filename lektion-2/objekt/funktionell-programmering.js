// Funktionell programmering

function createPerson(firstName, lastName, age){
    return {
        firstName,
        lastName, 
        age
    }
}

function getFullName(person){
    return `${person.firstName} ${person.lastName}`;
}

let person1 = createPerson("John", "Doe", 42);
let person2 = createPerson("Jane", "Doe", 12);

console.log(getFullName(person1));
console.log(getFullName(person2));

//Ändra namn på person
person1 = {...person1, lastName: "Mayer"};

console.log(getFullName(person1));