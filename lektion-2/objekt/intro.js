const car = {
  registrationNumber: "ABC123",
  manufacturer: "Fiat",
  model: "500",
  modelYear: 1957,
  dimensions: {
    width: 1320,
    lenght: 2970,
    height: 1320 
  }
};

// Hämta egenskaper med punkt-notation
car.modelYear; // 1957
car.dimensions.height; //1320

// Hämta egenskaper på nyckel
car["modelYear"]; // 1957
car["dimensions"]["height"]; // 1320

//Tilldela värde
car.modelYear = 2020;
 
//Skapa ny egenskap på objektet
car.color = "Baby Blue";
car["wheels"] = 4;

car.color; // Baby Blue
car.wheels; // 4



