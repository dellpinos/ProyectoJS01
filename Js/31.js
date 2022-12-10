// Prototypes


function Cliente(nombre, apellido) {   ///  no es una clase real
    this.nombre = nombre;
    this.apellido = apellido;
}
Cliente.prototype.formatearCliente = function() {   /// funcion
    return `El cliente: ${this.nombre} y su apellido: ${this.apellido}`;
}
function Producto(nombre, precio) {  
    this.nombre = nombre;
    this.precio = precio;
}
Producto.prototype.formatearProducto = function() { 
    return `El Producto ${this.nombre} tiene un precio de ${this.precio}`;
}

const producto2 = new Producto('Monitor 49"', 800);
const producto3 = new Producto('Laptop', 300);

const cliente = new Cliente('Juan', 'Perez');

function formatearProducto(producto) {  // Formatea, une datos agregando un string u otro formato de texto
    return `El Producto ${producto.nombre} tiene un precio de ${producto.precio}`;
}
function formatearCliente(cliente) {
    return `El cliente: ${cliente.nombre} y su apellido: ${cliente.apellido}`;
} // Para cada objeto nuevo tendria que crear una nueva funcion, a la larga es un problema
 // Tengo que usar Prototypes

 // Prototypes

// Un prototype es una funcion que esta asociada a un "tipo de objeto"
// Los prototypes son funciones
// Los prototype nos permiten crear funciones que solo se utilizan en un objeto en especifico
// 
// prototype es como un objeto y dentro de ese objeto voy a definir propiedades nuevas


console.log(producto2.formatearProducto())
console.log(producto2);
console.log(cliente);