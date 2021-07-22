const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 2000},
    { nombre: 'Lavarropas con secado', precio: 40000},
    { nombre: 'Anafe calientes-aguas', precio: 230},
    { nombre: 'Televisión lindavisión', precio: 1500},
    { nombre: 'Walkman Vintage', precio: 3000},
    { nombre: 'Auriculares de boliferia', precio: 300}
];

// const newArray = carrito.map( function (producto) {
//     return(`${producto.nombre} - Precio: $${producto.precio}` )
// });

const newArray = carrito.map((producto) => {
    return (`${producto.nombre} - Precio: $${producto.precio}`);
})


const newArray2 = carrito.forEach((producto) => {
    console.log(`${producto.nombre} - Precio: $${producto.precio}` )
});


console.log(newArray);
console.log("---------------------");
console.log(newArray2)
