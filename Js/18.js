// Funciones

// Declaracion de la funcion  

function sumar() {
    console.log( 10 + 10);

}

sumar();  // Gracias al Hoisting de Js puedo poner la llamada antes de la funcion 


// Exprension de la funcion

const sumar2 = function() {
    console.log( 3 + 3);
}

sumar2();  // Por el Hoisting de Js no puedo poner esta llamada antes de la funcion

// IIFE

(function() {
    console.log('esto es una funcion');
})();

