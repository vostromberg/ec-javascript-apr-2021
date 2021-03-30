const car = {
  registrationNumber: "ABC123",
  manufacturer: "Fiat",
  model: "500",
  modelYear: 1957,
  isStarted: false,
  start: function () {
    this.isStarted = true;
  },
  stop: function () {
    this.isStarted = false;
  },
};

console.log(car.isStarted); // false

car.start();

console.log(car.isStarted); // true

car.stop();

console.log(car.isStarted); //false
