const animal = "llama";

// if-else
if (animal === "llama") {
  console.log("Awesome!");
} else {
  console.log("Lame!");
}

// if-else if-else
if (animal === "llama") {
  console.log("Awesome!");
} else if (animal === "ocelot") {
  console.log("Ok, also kinda cool!");
} else {
  console.log("Lame!");
}
// switch-case
switch (animal) {
  case "llama":
    console.log("Awesome!");
    break;
  case "ocelot":
    console.log("Ok, also kinda cool!");
    break;
  default:
    console.log("Lame!");
    break;
}

// inline-if
animal === "llama" ? console.log("Awesome!") : console.log("Lame");
const awesome = animal === "llama" ? true : false;