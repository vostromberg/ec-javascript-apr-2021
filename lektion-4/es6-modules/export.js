// not exported är bara tillgänglig här
function notExported(value){
    console.log(value);
}

// exporterad variabel
export const aCoolItem = "Nice!";

// exporterad funktion
export function hello(){
   notExported("Hello world");
}

const helloWorld = () => {
    alert("Hello world");
}

// default export
export default helloWorld;