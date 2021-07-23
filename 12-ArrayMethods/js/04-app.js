const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 2000},
    { nombre: 'Lavarropas con secado', precio: 40000},
    { nombre: 'Anafe calientes-aguas', precio: 230},
    { nombre: 'Televisión lindavisión', precio: 1500},
    { nombre: 'Walkman Vintage', precio: 3000},
    { nombre: 'Auriculares de boliferia', precio: 300}
];

let result;
result = carrito.filter ( product => product.precio > 400);
console.log(result)

//Te filtra según la condición que revises. Aquí arriba, todos los mayores a 400.

results2 = carrito.filter ( product => product.precio > 2000);
console.log(results2)


//Qué onda si quiero sacar un solo objeto del array?? :

results3 = carrito.filter( product => product.nombre != 'Televisión lindavisión');
console.log(results3)