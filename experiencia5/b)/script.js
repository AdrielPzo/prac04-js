// Array numérico
let numeros = [];

function ingresarNumeros() {
  let cantidad = parseInt(prompt("Ingrese la cantidad de números a ingresar:"));
  for (let i = 0; i < cantidad; i++) {
    let numero = parseInt(prompt("Ingrese un número:"));
    numeros.push(numero);
  }
  console.log("Números ingresados:", numeros);
}

// Array de strings
let nombres = [];

function ingresarNombres() {
  let cantidad = parseInt(prompt("Ingrese la cantidad de nombres a ingresar:"));
  for (let i = 0; i < cantidad; i++) {
    let nombre = prompt("Ingrese un nombre:");
    nombres.push(nombre);
  }
  console.log("Nombres ingresados:", nombres);
}

// Array de objetos
let personas = [];

function ingresarPersonas() {
  let cantidad = parseInt(prompt("Ingrese la cantidad de personas a ingresar:"));
  for (let i = 0; i < cantidad; i++) {
    let nombre = prompt("Ingrese el nombre de la persona:");
    let edad = parseInt(prompt("Ingrese la edad de la persona:"));
    let persona = { nombre: nombre, edad: edad };
    personas.push(persona);
  }
  console.log("Personas ingresadas:", personas);
}

ingresarNumeros();
ingresarNombres();
ingresarPersonas();

//ACCEDER A UN ELEMENTO DE ARRAY MEDIANTE SU ÍNDICE
let ultimo = nombres[nombres.length - 1];

//RECORRER UN ARRAY
nombres.forEach(function(elemento, indice) {
  console.log(elemento, indice);
});

//AÑADIR UN ELEMENTO AL FINAL DE UN ARRAY 
let nuevaLongitud = nombres.push('Juan');

//ELIMINAR EL ÚLTIMO ELEMENTO DE UN ARRAY
let ultimo2 = nombres.pop();

//AÑADIR UN ELEMENTO AL PRINCIPIO DE UN ARRAY
let nuevaLongitud2 = nombres.unshift('Piero');

//ELIMINAR EL PRIMER ELEMENTO DE UN ARRAY
let primero = nombres.shift();

//ENCONTRAR EL ÍNDICE DE UN ELEMENTO DEL ARRAY
nombres.push('Alejandra');

let pos = nombres.indexOf('Alejandra');