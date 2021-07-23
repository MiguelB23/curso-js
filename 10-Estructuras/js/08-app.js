// const authentic = true;

// if (authentic) {
//     console.log('You are in')
// }

const puntaje = 350;

function revisarPuntaje(){
    if( puntaje > 400 ) {
    console.log('Excelente!!');
    return;
}

if (puntaje > 300) {
    console.log('Buen puntaje, felicitaciones');
    return;
}
}

revisarPuntaje();
