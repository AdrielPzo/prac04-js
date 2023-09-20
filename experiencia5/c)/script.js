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

//for
for(let index=0; index <numeros.length;index++){
    console.log("Index ",index, "valor: ",numeros[index]);
}

//foreach
let index = 0;
nombres.forEach(element => {
    console.log("Index ",index++, "valor: ",element)
});

//while
let index2 = 0;
while (true) {
    if (index2 == personas.length){
        break
    }
    console.log("Index ", index2, "valor: ", personas[index]);
    index2++;
}

let index3 = 0
do{
    if (index3 == numeros.length)
        break   
    console.log("Index ", index3, "valor: ", numeros[index]);
    index3++;
}while(true)