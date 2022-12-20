// Dos consultas Async / Await 


function descargarNuevosClientes() {
    return new Promise( resolve => {
        console.log('Decargando, Loading....')

        setTimeout( () => {
            resolve('El archivo fue descargado');
        }, 5000);
        
    });
}

function descargarNuevosPedidos() {
    return new Promise( resolve => {
        console.log('Decargando pedidos, Loading....')

        setTimeout( () => {
            resolve('Los pedidos fue descargados');
        }, 3000);
        
    });
}

async function app() {
    try {
        // const clientes = await descargarNuevosClientes();
        // const pedidos = await descargarNuevosPedidos();
        // console.log(clientes);
        // console.log(pedidos);
        const resultado = await Promise.all([ descargarNuevosClientes(), descargarNuevosPedidos()]);
        console.log(resultado[0]); // tiene parentesis porq es una funcion pero es un arreglo de promises
        console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }

}

app();