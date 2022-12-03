// Objetos

let numero = 1000000;

const producto = {
    nombreProducto: "Monitor 20 pulgadas",
    precio: 300 * 3 + numero,   // sumo el valor contenido en otra variable
    disponible: true,
}

const precioProducto = producto.precio;

console.log(precioProducto);