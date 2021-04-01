// funktion som är asynkron
const doSomethingAsync = () => {
    //Skapa upp promise, konstruktorn tar emot en funktion med två funktioner som inparameter
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Success inside promise");
            //reject("Failed inside promise");
        }, 1500);
    });
    return promise;
}

doSomethingAsync()
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.error(err);
    })
    .finally(() => {
        console.log("Promise finished");
    });