// Constructor de objetos tipo "Conejos"

function Conejos(raza,color,genero) {
    this.raza = raza;
    this.color = color;
    this.genero = genero;
}

// Prototype que da formato al objeto

Conejos.prototype.formatoConejos = function(){
    return `Este conejito es: ${this.raza} de color: ${this.color} y es un/a: ${this.genero}`
}


// El objeto

const jaula1 = new Conejos('Angora','Marron',true); // Al ser un objeto tipo Conejos esta "atado" al proptotype formatoConejos
const jaula2 = new Conejos('Holland','Blanco',false);
const jaula3 = new Conejos('Angora','Negro',false);
const jaula4 = new Conejos('Leon','Mariposa',true);

// Llamada al proptotipe formatoConejos

console.log(jaula3.formatoConejos());

