// for( let i = 0; i <= 10; i++ ) {
// console.log(`Number: ${i} `)
// }

// for(let i = 0; i <= 20; i++ ) {
//     if( i % 2 === 0) {
//         console.log(`the number ${i} is pair`);
//     } else {
//         console.log(`the number ${i} is none`)
//     }
// }

const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 2000},
    { nombre: 'Lavarropas con secado', precio: 40000},
    { nombre: 'Anafe calientes-aguas', precio: 230},
    { nombre: 'Televisión lindavisión', precio: 1500},
    { nombre: 'Walkman Vintage', precio: 3000},
    { nombre: 'Auriculares de boliferia', precio: 300}
];

// console.log(carrito[1]);
// console.log(`El precio del ${carrito[1].nombre} es de $${carrito[1].precio}`)


// const testingFor = carrito.map( function(product) {
//     return (`El precio del ${product.nombre} es de $${product.precio}`);
// })

// console.log(testingFor);

for(let i= 0; i < carrito.length; i++) {
    console.log(`El precio de ${carrito[i].nombre} es de $${carrito[i].precio}`)
}
