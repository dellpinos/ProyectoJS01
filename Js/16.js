

const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril');


const carrito = [
    { nombre: 'Monitor de 20 pulgadas', precio: 500 },
    { nombre: 'TV 50 pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 1500 },
    { nombre: 'Laptop', precio: 5500 },
];

// meses.splice(2, 1);

// forEach



// Un if es "estructura de control"

meses.forEach(function(mes) {   // itera sobre cada elemento del array
    if(mes == 'Marzo') {  //aplica if a cada iteracion buscando Marzo
        console.log('Marzo si existe!')
    };
});


//meses.forEach(function(mes) {
//    console.log(mes);
//});

//     Array Methods

// Includes

let resultado = meses.includes('Marzo');  //itera sobre el array Meses, busca el elemento Marzo y devuelve true or false

// Some ideal para arreglo de objetos

resultado = carrito.some(function(producto) {   // itera sobre todas las propiedades del objeto
    return producto.nombre == 'Laptop'         //En el objeto "carrito" busca la propiedad/llave "Laptop" y devuelve un valor bool
})

console.log(resultado);


