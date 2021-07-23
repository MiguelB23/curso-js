// forEach

const pends = ['Work', 'Exercise', 'Learn JS', 'Write a short-story'];

pends.forEach( (pend, i) => console.log(pend, i))


const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 2000},
    { nombre: 'Lavarropas con secado', precio: 40000},
    { nombre: 'Anafe calientes-aguas', precio: 230},
    { nombre: 'Televisión lindavisión', precio: 1500},
    { nombre: 'Walkman Vintage', precio: 3000},
    { nombre: 'Auriculares de boliferia', precio: 300}
];

carrito.forEach(producto => console.log(producto.precio))

carrito.map(producto => console.log(producto.precio))

//La gran diferencia es que .map crea un nuevo array.
//Comprobando.. :

const newArray = carrito.map(producto => producto.nombre)
console.log(newArray);

const newArray2 = carrito.forEach(producto => producto.nombre)
console.log(newArray2)