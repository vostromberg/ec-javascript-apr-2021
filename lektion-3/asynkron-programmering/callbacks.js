// funktion som är asynkron
const doSomethingAsync = (onFinished, onError) => {
  setTimeout(() => {
    onFinished("Tadaa!");
  }, 1500);
};

doSomethingAsync(
  (result) => {
    console.log(result);
  },
  (err) => {
    console.error(result);
  }
);
