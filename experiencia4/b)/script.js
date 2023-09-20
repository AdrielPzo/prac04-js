/* Inicializadores */
var car1 = {
    marca: "Toyota",
    modelo: "Corrola",
    año: "2018",
};

/* Constructores */
class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  }

let persona1 = new Persona("Juan", 25);
let persona2 = new Persona("María", 30);

/* Object.create() */
var plato = {
    temperatura: 0.0,
    tipo: "sopa",
  };

var comida = Object.create(plato);
comida.temperatura = 36.5;

