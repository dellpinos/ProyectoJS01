
const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril');

const carrito = [
    { nombre: 'Monitor de 20 pulgadas', precio: 500 },
    { nombre: 'TV 50 pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 1500 },
    { nombre: 'Laptop', precio: 5500 },
];

meses.forEach( mes => {
    if(mes == 'Marzo') {
        console.log('Marzo si existe!')
    };
});

let resultado;

resultado = carrito.some(producto => producto.nombre == 'Laptop');

resultado = carrito.reduce( (total, producto) => total + producto.precio, 0);

resultado = carrito.filter(producto => producto.precio > 400);

console.log(resultado);


