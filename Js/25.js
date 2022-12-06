
const puntaje = 100;

if(puntaje == 1000) {
    console.log(`Si el puntaje es 1000`);
}
else {
    console.log(`No es 1000`);
}


const efectivo = 1000;
const carrito = 1800;

if (efectivo > carrito) {
    console.log(`El usuario puede pagar`);
}
else {
    console.log(`Fondos insuficientes`);
}

const rol = `editor`;

if (rol === `admin`) {
    console.log(`Acceso a todo el sistema`);
}
else if (rol ===`editor`) {
    console.log(`Eres editor, pero no admin`);
}
else {
    console.log(`No tienes acceso`);
}