// for( let i = 0; i <= 10; i++ ) {
//     if(i === 5) {
//     console.log('Este es el 5');
//     break;
// } 
// console.log(`Número:${i}`);
// }


const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 2000},
    { nombre: 'Lavarropas con secado', precio: 40000},
    { nombre: 'Anafe calientes-aguas', precio: 230, descuento: true},
    { nombre: 'Televisión lindavisión', precio: 1500},
    { nombre: 'Walkman Vintage', precio: 3000},
    { nombre: 'Auriculares de boliferia', precio: 300}
];

for (let i = 0; i < carrito.length; i++){
    if(carrito[i].descuento) {
        console.log(`El producto ${carrito[i].nombre} tiene descuento`);
        continue;
    }
    console.log(carrito[i].nombre);
}













// for(let i= 0; i < carrito.length; i++) {
//     console.log(`El precio de ${carrito[i].nombre} es de $${carrito[i].precio}`)

