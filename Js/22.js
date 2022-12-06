// Metodo de propiedad // tiene el formato de un objeto con sus propiedades
const reproductor = {
    reproducir : function(id) {
        console.log(`Reproduciendo Cancion con el ID: ${id}`)
    },
    pausar : function() {
        console.log(`Pausando...`)
    },
    crearPlaylist : function(nombre) {
        console.log(`Creando la playlist ${nombre}`)
    },
    reproducirPlaylist : function(nombre) {
        console.log(`Reproduciendo la playlist ${nombre}`)
    },
    
};

reproductor.borrarCancion = function(id) {   //estoy agregando una propiedad al objeto
    console.log(`Eliminando la cancion: ${id}`)
};

reproductor.reproducir(3840); //llamada a la funcion
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlaylist(`Rock & Pop`);
reproductor.reproducirPlaylist(`Rock & Pop`);



