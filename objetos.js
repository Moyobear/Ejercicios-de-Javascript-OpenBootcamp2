const misDatos = {
  nombre: "Jonathan",
  apellido: "Rodriguez",
  edad: 39,
  altura: 183,
  eresDesarrollador: true,
};

const edad = misDatos.edad;

const miAmigo1 = {
  nombre: "Marilis",
  apellido: "Chacón",
  edad: 49,
  altura: 168,
  eresDesarrollador: false,
};

const miAmigo2 = {
  nombre: "Nailu",
  apellido: "Chacón",
  edad: 37,
  altura: 173,
  eresDesarrollador: true,
};

const listaMisDatos = [{ ...misDatos }, { ...miAmigo1 }, { ...miAmigo2 }];

const listaOrdenada = listaMisDatos.sort((a, b) => b.edad - a.edad);

console.log(edad);
console.log(listaMisDatos);
console.log(listaOrdenada);
