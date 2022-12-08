// This

const nuevo = {
    nombre: 'Martin',
    apellido: 'del Pino',
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El cliente ${nombre} debe ${total}`)
    }
}

const nuevo2 = [
    {nombre: 'tamara', edad: 28},
    {nombre: 'debora', edad: 22},
    {nombre: 'romina', edad: 98},
    {nombre: 'alberto', edad: 76},
    {nombre: 'esteban', edad: 2},
    {nombre: 'martin', edad: 34},
];
nuevo2.forEach(element => {
    console.log(element);
});
nuevo2.forEach(element => {
    console.log(element.edad);
});

// while (o < nuevo.length) {
//     console.log(nuevo[o])
//     o++
// }

console.log(nuevo.nombre);

let vector = [65,56,45,23,123,64,634,213,33,523]

i= 0;

while (i < vector.length) {
    console.log(vector[i]);
    i++;
}




//reservacion.forEach(producto => {
//    console.log(producto);
//});