let vector = [];
let acu = 0;
let acu3 = 0;
let acu4 = 0;

for(i = 0; i < 50000; i++ ) {
    vector[i] = {nombre: `Martin 0${i+1}`, edad: 35 + i}; // inicializando el vector
     acu++;

     console.log(vector[i]);


}
let acu2 = 0;

vector.forEach(function (element) {
    acu2 += element.edad;    // Acumulo todas las edades del vector
});

console.log(` La edad total suma >>> ${acu2}`);

acu3 = acu2 / acu;

console.log(`Se ingresaron ${acu} personas y El promedio de edad es >>>> ${acu3} <<<< :D `);