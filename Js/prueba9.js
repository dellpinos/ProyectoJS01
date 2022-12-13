let acu = 1;

setTimeout( function () {
    console.log(acu);
    acu++;
}, 1000)
setTimeout( function () {
    console.log(acu);
    acu++;
}, 2000)
setTimeout( function () {
    console.log(acu);
    acu++;
}, 3000)
setTimeout( function () {
    console.log(acu);
    acu++;
}, 4000)
setTimeout( function () {
    console.log(acu);
    acu++;
}, 5000)

setTimeout( function() { /// este es un metodo para demorar las intrucciones q contiene
    console.log(':D') // primero indico las instrucciones (en este caso la funcion)
}, 6000)       // despues de la coma indico el tiempo en milisegundos, 15000 = 15segs
setInterval( function () { /// es como el setTimeout pero lo hace cada intervalos acorde
    console.log(':O'); // al tiempo q programe
}, 90000)