// Fetch

async function obtenerEmpleados() {
    const archivo = '../empleado.json';


        
    const resultado = await fetch(archivo);
    const datos = await resultado.json();

    console.log(datos);



}




obtenerEmpleados();

