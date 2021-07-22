const reproductor = {
    reproducir: id => console.log(`Reproduciendo canción con el id ${id}`),
    pausar: () => console.log('pausando...'),
    borrar: id => console.log(`Borrando canción... ${id}`),
    agregarPlaylist: id => console.log(`canción agregada a la Lista de Reproducción ${id}`),
    reproducirPy: id => console.log(`Estás escuchando tu lista ${id}`),

    set newSong(song) {
        this.song = song;
        console.log(`Añadiendo ${song}`);
    },
    get getSong() {
        console.log(`${this.song}`)
    } 
}

reproductor.newSong = "Perfidia de Los Panchos";
reproductor.getSong;

//Esto de GET y SET no lo entiendo muy bien.

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(21);


reproductor.agregarPlaylist("Mejores canciones");
reproductor.reproducirPy("Mejores Canciones");


// const reproductor = {
//     reproducir: function(id) {
//         console.log(`Reproduciendo canción con el id ${id}`);
//     },
//     pausar: function() {
//         console.log('pausando...');
//         },
//     borrar: function(id) {
//             console.log(`Borrando canción... ${id}`);
//     },
//     reproducirPy: function(id) {
//         console.log(`Estás escuchando tu lista ${id}`);
//     }
// }

// reproductor.reproducir(30);
// reproductor.reproducir(20);
// reproductor.pausar();
// reproductor.borrar(21);

// reproductor.agregarPlaylist = function (id) {
//     console.log(`canción agregada a la Lista de Reproducción ${id}`);
// }

// reproductor.agregarPlaylist("Mejores canciones");
// reproductor.reproducirPy("Mejores Canciones");