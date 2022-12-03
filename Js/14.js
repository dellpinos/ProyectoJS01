// Arrays

const numeros = [10,20,30,40,50];

 console.log(numeros);

 console.table(numeros);


 const meses = new Array('Enero', 'Febrero', 'Marzo');

 console.table(meses)

// Acceder a los valores de un Array

 let pepe = numeros[0];

 console.log(pepe);


// conocer la extension de un Array

 console.log(meses.length);

numeros.forEach( function(pepe) {
    console.log(pepe);

})