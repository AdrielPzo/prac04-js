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

var foo1 = numeros.map(function(bar){
    return '<li>'+bar.marca+' '+bar.modelo+'</li>'
  })
  document.getElementById("foo1").innerHTML(foo1);

var foo2 = nombres.map(function(bar2){
  return '<li>Nombre'+bar2.nombre+'</li>'
})
document.getElementById("foo2").innerHTML(foo2);

var foo3 = personas.map(function(bar3){
    return '<li>'+bar3.nombre+' '+bar3.edad+'</li>'
  })
  document.getElementById("foo3").innerHTML(foo3);