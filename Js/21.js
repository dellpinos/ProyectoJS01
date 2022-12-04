// function sumar(n1,n2) {
//     return n1 + n2 ;
// }

// let resultado = sumar(2, 3);



// 

let total = 0;

function agregarCarrito (precio) { // cuerpo de la funcion
    return total += precio;
}

function calcularImpuesto(total) {  // cuerpo de la funcion
    return 1.15 * total;
}

total = agregarCarrito(200);
total = agregarCarrito(200);  // llamada a la funcion
total = agregarCarrito(200);
total = agregarCarrito(200);

const totalAPagar = calcularImpuesto(total);  // llamada a la funcion    

console.log(total);
console.log(`Total a pagar con impuestos: $${totalAPagar}`);