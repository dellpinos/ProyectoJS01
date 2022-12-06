// Ciclos


// For Loop

console.log(1);
console.log(2);
console.log(3);
console.log(4);

let variable1 = 0;

for( let x = 0; x < 18; x++ ) {
    variable1 ++;
    for( let y = 0; y < 10; y++ ) {
        variable1++;
    }
}

 console.log(variable1);

 let variable2 = 11

 for( let i = 0; i < 10; i++) {
    if( i % 2 ===0 ) {
         console.log(`El indice actual ${i} es Par`);
     }
     else {
         console.log(`El indice actual ${i} es Impar`)
     }
 }

const carrito = [
    { nombre: 'Monitor de 20 pulgadas', precio: 500 },
    { nombre: 'TV 50 pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 1500 },
    { nombre: 'Laptop', precio: 5500 },
    { nombre: 'Celular', precio: 1300},
    { nombre: 'lola'}
];

for(let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);
};


// While Loop



//Do While Loo
