// MÉTODOS DE PROPIEDAD: Son funciones que tiene la sintaxis de un método
const reproductor =  {
    reproducir: function(id) {
        console.log(`Reproduciendo canción con el ID: ${id}`)
    },
    pausar: function(){
        console.log('Pausando...')
    },
    crear_playlist: function(nombre){
        console.log(`Creando la playlist: ${nombre}`)
    }, 
    reproducir_playlist: function(nombre){
        console.log(`Reproduciendo la playlist: ${nombre}`)
    }
}

// Tambien se pueden crear por fuera del objeto/diccionario
reproductor.borrar_cancion = function(id){
    console.log(`Eliminando la canción con el ID: ${id}`)
}

// Objeto/Diccionario.funcióndefinidadentrodeeste()
reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrar_cancion(20);
reproductor.crear_playlist('Perreo sabroso');
reproductor.reproducir_playlist('Perreo sabroso');