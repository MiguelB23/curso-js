const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 2000},
    { nombre: 'Lavarropas con secado', precio: 40000},
    { nombre: 'Anafe calientes-aguas', precio: 230},
    { nombre: 'Televisión lindavisión', precio: 1500},
    { nombre: 'Walkman Vintage', precio: 3000},
    { nombre: 'Auriculares de boliferia', precio: 300}
];

//Every --> a diferencia de .some, TODOS los elementos revisados deben cumplir la condición

const results = carrito.every( product => product.precio > 2000);
console.log(results)

//Arroja false porque no todos son mayores a 2000 

const results2 = carrito.some ( product => product.precio > 2000)
console.log(results2);
//Arroja true porque al menos uno es mayor a 2000