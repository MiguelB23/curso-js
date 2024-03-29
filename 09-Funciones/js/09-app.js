const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo canción con el id ${id}`);
    },
    pausar: function() {
        console.log('pausando...');
        },
    borrar: function(id) {
            console.log(`Borrando canción... ${id}`);
    },
    reproducirPy: function(id) {
        console.log(`Estás escuchando tu lista ${id}`);
    }
}

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(21);

reproductor.agregarPlaylist = function (id) {
    console.log(`canción agregada a la Lista de Reproducción ${id}`);
}

reproductor.agregarPlaylist("Mejores canciones");
reproductor.reproducirPy("Mejores Canciones");
