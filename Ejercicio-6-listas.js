let listaCompras = ["Camarones", "Langostinos", "Pescado", "Pollo", "Solomo"];
listaCompras.push("Aceite de Girasol");
listaCompras.pop();
let peliculasFavoritas = [
  {
    Titulo: "Viuda negra",
    Director: "Alexander Yurchikov",
    Fecha: 2021,
  },
  {
    Titulo: "Thor: Amor y Trueno",
    Director: "Taika Waititi",
    Fecha: 2022,
  },
  {
    Titulo: "Doctor Strange en el Multiverso de la Locura",
    Director: "Sam Raimi",
    Fecha: 2022,
  },
  {
    Titulo: "El Exorcista",
    Director: "William Friedkin",
    Fecha: 1973,
  },
  {
    Titulo: "The Shining",
    Director: "Stanley Kubrick",
    Fecha: 1980,
  },
];

let peliculasNuevas = peliculasFavoritas.filter((item) => item.Fecha > 2010);
let directores = peliculasFavoritas.map((director) => director.Director);
let titulos = peliculasFavoritas.map((item) => item.Titulo);
let listaConcat = directores.concat(titulos);
let listaProp = [...directores, ...titulos];

console.log(listaProp);
console.log(listaConcat);
console.log(titulos);
console.log(directores);
console.log(peliculasNuevas);
console.log(peliculasFavoritas);
console.log(listaCompras);
