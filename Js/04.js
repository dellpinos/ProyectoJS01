//String o Cadenas de Texto


let producto = "Monitor de 20 pulgadas";  //la mas utilizada
let producto2 = String('Monitor de 30 pulgadas');
let producto3 = new String('Monitor de 50 pulgadas');

const producto4 = "Monitor de 20\"" // "escapo de las comillas" para poder incluirlas dentro del texto, las " son un caracter dentro del string
// const producto4 = 'Monitor 20"' es lo mismo que la linea de arriba


console.log(typeof producto);

console.log(typeof producto2);

console.log(typeof producto3);

console.log(producto4);

console.log(producto3);

// Metodos o funciones para los String

const producto5 = "Monitor HD";

console.log(producto5);   //esto es una funcion
console.log(producto5.length);   //esto es un metodo, es como el que usa Twitter para saber cuantos caracteres tiene el texto


//IndexOf

console.log(producto2.indexOf('pepe'));

// Includes (retorna un valor booleano)

console.log(producto2.includes('pepe'));