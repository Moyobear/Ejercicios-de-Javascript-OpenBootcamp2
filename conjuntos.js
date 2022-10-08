const arrayNombres = [
  "Omar",
  "Elena",
  "Simon",
  "Jonathan",
  "Luisa",
  "Ismael",
  "José Manuel",
];
const nombresSet = new Set(arrayNombres);
nombresSet.add("Jonathan");
nombresSet.add("JavaScript");

console.log(nombresSet);
