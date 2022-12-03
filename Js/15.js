// Arrays

const numeros = [10,20,30,40,50];

// console.log(numeros);



const meses = new Array('Enero', 'Febrero', 'Marzo');

  console.table(meses)

 // Acceder a los valores de un Array

  let pepe = numeros[0];

  console.log(pepe);


 // conocer la extension de un Array

  console.log(meses.length);

 numeros.forEach( function(pepe) {
     console.log(pepe);

 })


// Modificar un array

numeros[5] = 60;

numeros.push(100); // agrega al final del Array

numeros.unshift(20,4,5); // agrega al inicio del Array

numeros.pop(); //elimina el ultimo elemento del Array
numeros.shift(); //elimina el primero elemento del Array

numeros.splice(3,2);

console.table(numeros);

// Rest Operator o Spread Operator

const nuevoArreglo = [...meses, 'Junio'];

let nuevoArregloArreglo = ['Diciembre', ...meses];

console.table(nuevoArreglo);

console.table(nuevoArregloArreglo);



