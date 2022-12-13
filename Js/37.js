// Async / Await

let acu2 = 1;
setInterval( function() {
    console.log(acu2);
    acu2++;
}, 1000)

function descargarNuevosClientes() { // no estoy usando el reject, pero deberia
    return new Promise( resolve => { // la funcion retorna un promise
        console.log('Decargando, Loading....') // si el promise se resuelve

        setTimeout( () => {
            resolve('El archivo fue descargado'); // demoro unosn segs en darle el resolve al promise
        }, 5000);
    });
}

async function app() {
    try {
        const resultado = await descargarNuevosClientes(); // llamada a la funcion descargarNuevoClientes
        console.log(resultado)
    } catch (error) {
        console.log(error)
    }

}

setTimeout( function () {
    app();
}, 10000)


// las funciones se cargan sin ejecutarse. Cuando llamo a la funcion app... esta se ejecuta
// la funcion app llama a descargarNuevosClientes y esta se ejecuta
// despues del Pending devuelve un valor, este pasa al await y este expone la variable
// "resultado" en la consola


// setTimeout( function() { /// este es un metodo para demorar las intrucciones q contiene
//     console.log(':D') // primero indico las instrucciones (en este caso la funcion)
// }, 6000)       // despues de la coma indico el tiempo en milisegundos, 15000 = 15segs





// setInterval( function () { /// es como el setTimeout pero lo hace cada intervalos acorde
//     console.log(':O'); // al tiempo q programe
// }, 1000)