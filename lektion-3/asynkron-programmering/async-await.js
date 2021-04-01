// funktion som är asynkron
const doSomethingAsync = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Tadaa!");
    }, 1500);
  });
};

const init = async () => {
  const result = await doSomethingAsync();
  console.log(result);
};
init();
