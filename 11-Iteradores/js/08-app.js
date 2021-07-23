const car = {
    model: "Corvette",
    year: 1972,
    motor: '6.0'
}

for (let properties in car) {
    console.log(`This are the specifications of your car: ${car[properties]}`);
}


for (let [key, value] of Object.entries(car) ) {
    console.log(value);
    console.log(key)
}
//EN RESUMEN EL For in es para OBJECTS
//El for of es para arrays.
//Sin embargo, cómo se ve en el último bloque, se puede utilizar el of para
//meterse en el array. 


// const pends = ['Work', 'Exercise', 'Learn JS', 'Write a short-story'];

// // const carrito = [
// //     { nombre: 'Monitor 27 pulgadas', precio: 2000},
// //     { nombre: 'Lavarropas con secado', precio: 40000},
// //     { nombre: 'Anafe calientes-aguas', precio: 230},
// //     { nombre: 'Televisión lindavisión', precio: 1500},
// //     { nombre: 'Walkman Vintage', precio: 3000},
// //     { nombre: 'Auriculares de boliferia', precio: 300}
// // ];

// for ( let penders of pends ) {
//     console.log(penders);
// }

// for (let products of carrito) {
//     console.log(products)
// }