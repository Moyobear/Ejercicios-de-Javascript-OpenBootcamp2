let str1 = "Jonathan";
let str2 = "Rodriguez";
let estudiante = str1 + " " + str2;
let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();
let length = estudiante.length;
let primera = str1[0];
let ultima = str2[str2.length - 1];
let sinEspacios = estudiante.replace(/ /g, "");
let incluyeNombre = estudiante.includes("Jonathan");

console.log(incluyeNombre);
