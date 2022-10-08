let fechaHoy = new Date();
let fechaNacimiento = new Date(1983, 3, 5);
let hoyMasGrande = fechaHoy.getTime() > fechaNacimiento.getTime();
let diaNacimiento = fechaNacimiento.getDate();
let mesNacimiento = fechaNacimiento.getMonth() + 1;
let añoNacimiento = fechaNacimiento.getFullYear();

console.log(diaNacimiento);
