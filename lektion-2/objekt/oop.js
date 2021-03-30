// Objektorientering med prototyp-syntax
function FunctionPerson(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  return this;
}

FunctionPerson.prototype.fullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

const person1 = new FunctionPerson("John", "Doe", 42);

// Objektorientering med klass-syntax
class ClassPerson {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const person2 = new ClassPerson("Jane", "Doe", 42);

/* 
    VARNING: Trots att funktionen fullName finns på båda personerna är den inte 
    helt pålitlig. Den kan dels overridas i prototypen för alla objekt eller för
    ett enskilt objekt. Därför är klass-konstruktioner inte helt pålitliga i JS
*/

console.log(person2.fullName());
person2.fullName = function(){ 
    return `Hmm.. ${this.age}?`;
} 
console.log(person1.fullName());
console.log(person2.fullName());