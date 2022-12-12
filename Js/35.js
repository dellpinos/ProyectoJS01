//const usuarioAutenticado = new Promise( function() {

//}) sin arrow function porque no hay uso del this

// cuando no hay This, puede ser Arrow Function

// va a ejecutar una nueva instancia del Promise
const usuarioAutenticado = new Promise( (resolve, reject) => {
    const auth = true;

    if(auth) {
        resolve('Usuario autenticado'); // El promise se cumple
    } else {
        reject('Usuario no autenticado');  // El promise no se cumple
    }
}); 

usuarioAutenticado
    .then(resultado => console.log(resultado)) // puede ser Arrow Function, no hat this

    .catch (function(error) {
        console.log(error);
    })


//    .then(resultado => console.log(resultado))

// el los promises existen tres valores posibles

// Pending - No se cumplio pero tampoco se rechazo

// Fulfilled - El promise se cumplop

// Reject - El promise no se cumplio