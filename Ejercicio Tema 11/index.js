class Estudiante {
  nombre;
  asignaturas;
  constructor(nombre) {
    this.nombre = nombre;
    this.asignaturas = ["HTML", "CSS", "JavaScript"];
  }

  obtenDatos() {
    return `Hola, mi nombre es ${this.nombre}, y estudio ${this.asignaturas[0]}, ${this.asignaturas[1]} y ${this.asignaturas[2]}`;
  }
}

let estudiante1 = new Estudiante("Jonathan Rodriguez");
let estado = estudiante1.obtenDatos();
console.log(estado);
