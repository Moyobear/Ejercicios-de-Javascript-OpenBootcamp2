// Una función sin parámetros que devuelva siempre "true"
function verdadera() {
  console.log(true);
  return true;
}

verdadera();

// Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
function miPromesaAsinc() {
  let saludo = "Hola soy una promesa";
  setTimeout(function () {
    console.log(saludo);
  }, 5000);
}

miPromesaAsinc();

//  Una función generadora de índices pares automáticos

function* indices() {
  let indice = 0;
  while (true) {
    indice += 2;
    if (indice === 20) {
      return indice;
    }
    yield indice;
  }
}

const genIndice = indices();

console.log(genIndice.next().value);
console.log(genIndice.next().value);
console.log(genIndice.next().value);
console.log(genIndice.next().value);
