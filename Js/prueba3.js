
let vector = [];
let acu = 0;
let acu3 = 0;

for(i = 0; i < 50; i++ ) {
    vector[i] = {nombre: `Martin 0${i+1}`, edad: 35 + i}; // inicializando el vector
    console.log(`Te agrego un texto porque puedo ${i}`);
    acu++;
    console.log(acu);
    console.log(vector[i]);
};

vector.forEach(element => {
    console.log(element.edad);
});

let acu2 = 0;

vector.forEach(function (element) {
    acu2 += element.edad;    // Acumulo todas las edades del vector
});

console.log(` ACU!! >>> ${acu2}`);

acu3 = acu2 / acu;

console.log(`Se ingresaron ${acu} personas y El promedio de edad es >>>> ${acu3} <<<< :D `);




// declaro un vector sin cantidad de elementos, uso un ciclo exacto para inicializarlo y cargarlo
// cada elemento del vector contiene dos propiedades y las leo posteriormente

let o = 0;
do {
    o++;
    console.log(`Probando el do While Nro:${o}`)
} while (o < 12);

// Probando el do While




