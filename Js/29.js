// This

window.nombre = `Un nombre` // agrego la propiedad a la ventana global para que arrow function
window.total = `un total`;

const reservacion = {
    nombre: 'Emiliano',
    apellido: 'Sanchez',
    total: 5000,
    pagado: true,
    informacion: () => { // arrow function
        window.nombre = reservacion.nombre; // Para que funcione el arrow function
        window.total = reservacion.total; // para el arrow function
        console.log(`El cliente ${nombre} reservo y su cantidad a pagar es de ${total}`); //notese que no hace falta el this
    }
};

const reservacion2 = {
    nombre: 'Juan',
    apellido: 'Torres',
    total: 5000,
    pagado: true,
    informacion: function() {
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`);
    }
}

reservacion.informacion(); // llamo a la funcion
reservacion2.informacion();

