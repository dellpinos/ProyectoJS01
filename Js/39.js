// Fetch

function obtenerEmpleados() {
    const archivo = '../empleado.json';

    fetch(archivo)
    .then( function(resultado) { // este then seria: q tipo de return? txt o json? y saber si la conexion es correcta
        return resultado.json(); // le estoy diciendo q es json y debe tratarlo como tal (objeto)
    })

    .then( datos => { // datos es el nombre que le pongo al return de .then

 //   console.log(datos.empleados);

    const { empleados } = datos; // deconstruct al objeto datos y creo la variable empleados

    empleados.forEach( empleado => { // itero sobre la variable/array/objeto empleado e imprimo en pantalla
        console.log(empleado);
        console.log(empleado.nombre); // especifico una propiedad dentro de empleado

        document.querySelector('.contenido').textContent = empleado.nombre; // mostrar resultados en el html
    });

   //     console.log(datos);
    //console.log(empleados);
    })
}

obtenerEmpleados();

