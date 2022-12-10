function Cliente(nombre, apellido) {   
    this.nombre = nombre;
    this.apellido = apellido;
}
function Producto(nombre, precio) {  // Constructor de objeto (carga los valores en las propiedades)
    this.nombre = nombre;
    this.precio = precio;
}
Producto.prototype.formatearProducto = function() { // da formato al objeto tipo 'producto'
    return `El Producto ${this.nombre} tiene un precio de ${this.precio}`;
}

const producto2 = new Producto('Monitor 49"', 800); // ' cargo cada nueva instancia con los dos valores que
const producto3 = new Producto('Laptop', 300);      // seran asignados a las dos propiedades de la funcion "Constructora"
const producto4 = new Producto('Celular', 400, 600, true, 'Maryland');

const cliente = new Cliente('Juan', 'Perez');


console.log(producto4.formatearProducto()); // pido los valores de la variable producto4, con el
//formato de la funcion prototype
console.log(producto2.formatearProducto());