// Herencia

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

//herencia

class Libro extends Producto{
    constructor(nombre, precio, isbn) {
        super(nombre, precio);
        this.isbn = isbn;

    }
    formatearProducto() { // estoy aprovechando el codigo, uso la funcion de Producto y le agrego el isbn
        return `${super.formatearProducto()} y su isbn es: ${this.isbn}`;
    }
    darPrecioProducto() {
        return super.darPrecioProducto();
    }
}
const libro = new Libro(`Js el libro`, 500, '342387423');

console.log(libro.formatearProducto());
console.log(libro.darPrecioProducto());