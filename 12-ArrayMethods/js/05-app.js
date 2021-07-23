const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 2000},
    { nombre: 'Lavarropas con secado', precio: 40000},
    { nombre: 'Anafe calientes-aguas', precio: 230},
    { nombre: 'Televisión lindavisión', precio: 1500},
    { nombre: 'Walkman Vintage', precio: 3000},
    { nombre: 'Auriculares de boliferia', precio: 300}
];

// Find. --> te crea un nuevo arreglo según la condición que hayas puesto
//con un forEach

let results = '';

carrito.forEach((product, index) =>{
    if(product.nombre === 'Walkman Vintage') {
        results = carrito[index]
    }
})

console.log(results)

// con .find

let results2 = carrito.find( product => product.nombre === 'Walkman Vintage');
console.log(results2)