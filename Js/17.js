
const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril');  // Array

const carrito = [
    { nombre: 'Monitor de 20 pulgadas', precio: 500 },        //Objeto
    { nombre: 'TV 50 pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 1500 },
    { nombre: 'Laptop', precio: 5500 },
];




//     Array Methods

// Includes

let resultado = meses.includes('Marzo');  //itera sobre el array Meses, busca el elemento Marzo y devuelve true or false

// Some ideal para arreglo de objetos

resultado = carrito.some(function(producto) {   // itera sobre todas las propiedades del objeto
    return producto.nombre == 'Laptop'         //En el objeto "carrito" busca la propiedad/llave "Laptop" y devuelve un valor bool
})

// console.log(resultado);



// Reduce

resultado = carrito.reduce(function(total, producto) {   //suma todas las propiedades "precio" dentro del objeto carrito
    return total + producto.precio
}, 0);




// Filter 

resultado = carrito.filter(function(producto) {
    return producto.precio > 400   //retorna los productos dentro de "carrito" que tengan un precio mayor a 400
});


console.log(resultado);