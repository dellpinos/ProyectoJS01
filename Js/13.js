
const producto = {
    nombreProducto: "Monitor HD",
    precio: 300,
    disponibilidad: true,
    color: "rojo",
}

const medidas = {
    preso: "1kg",
    medida: "1mt",
}

//Spread operator

const nuevoProducto = {...producto, ...medidas};

console.log(producto);
console.log(nuevoProducto);