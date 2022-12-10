// Clases 


class Producto {
    constructor(nombre,precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    formatearProducto() {
        return `El producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
    }
    darPrecioProducto() {
        return `Te dije que el precio es ${this.precio} !!!!!!!!`
    }
}



const producto2 = new Producto('Monitor 49" ', 800);
const producto3 = new Producto('Laptop', 300);
const producto4 = new Producto('Drone', 3000);

class Libro {
    constructor(nombre, precio, isbn) {

    }
}
const libro = new Libro(`Js el libro`, 500, '342387423');

console.log(libro)


console.log(producto2);
console.log(producto3);
console.log(producto4.formatearProducto());
console.log(producto4.darPrecioProducto());