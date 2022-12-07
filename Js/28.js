const carrito = [
    { nombre: 'Monitor de 20 pulgadas', precio: 500 },
    { nombre: 'TV 50 pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 1500 },
    { nombre: 'Laptop', precio: 5500 },
    { nombre: 'Celular', precio: 1300},
    { nombre: 'lola', precio: 600}
];

// forEach

carrito.forEach(function(producto) {
    console.log(producto.precio)
});

// Lo mismo en arrow function

const vector1 = carrito.forEach (producto => console.log(producto.nombre));

// map

const vector2 = carrito.map (producto => producto.nombre);

const vector3 = carrito.map(producto => `${producto.nombre} - ${producto.precio}`) // cambio el formato de cada llave, convirtiendola en variables


console.log(vector1, vector2);

console.log(vector3);

console.log(typeof vector3);