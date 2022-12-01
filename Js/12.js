

const producto = {
    nombreProducto: "Monitor HD",
    precio: 300,
    disponibilidad: true,
    color: "rojo",
}


// forma anterior de traer la informacion dentro de un objeto

const precioProducto = producto.precio;
const nombreProducto = producto.nombreProducto;

console.log(producto);

console.log(precioProducto);
console.log(nombreProducto);


// Destructuring Objeto

const {precio} = producto;
let {color, disponibilidad} = producto;



console.log(precio);
console.log(`${disponibilidad} ${color}`);



