// POO

/** Object Literal */

const producto = {
    nombre: 'LaptopLiteral',
    precio: 500,
    disponibilidad: true,
    color: 'rojo',
}

/** Object Constructor */
function Producto(nombre, precio, disponibilidad, color) {
    this.nombreejemplo = nombre;
    this['precio ejemplo'] = precio; // El nombre de la porpiedad entre corchetes puede contener cualquier cosa
    this ['dis po ni bi li dad'] = disponibilidad;
    this.colorejemplo = color;

}
const producto2 = new Producto('Monitor curvo 30"', 800, true, 'negro');
const producto3 = new Producto('Laptop', 300, true, 'rojo');
const producto4 = new Producto('celular', 100, false, 'negro');
const producto5 = new Producto('Laptop2', 1300, true, 'azul');

function formatearProducto(producto) { // Formatea, une datos agregando un string u otro formato de texto
    return `El producto ${producto.nombreejemplo} tiene un precio de: $ ${producto['precio ejemplo']}`;

};   // esta funcion recibe dos variables, dos valores de dos propiedades distintas de un objeto y
    //agrega el string


function noTengoNombre(producto) {
    return `Este articulo cuesta ${producto['precio ejemplo']}. Si le sumamos el 15% es: ${producto['precio ejemplo'] * 1.15}`
}

function sigoSinNombre(producto) {
    return producto.colorejemplo
}
console.log(sigoSinNombre(producto3));

console.log(noTengoNombre(producto5));

console.log( formatearProducto(producto2))
console.log(producto3.precio);

console.log(producto);
console.log(producto2);
console.log(producto3);
console.log(producto4);
console.log(producto5);
