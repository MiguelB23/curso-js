// Fizz Buzz

//Si es múltiplo de tres ha de imprimir: FIZZ
//Si es múltiplo de 5 : BUZZ
// Si es múltiplo de tres y cinco: FIZZBUZ!

for (let i = 1; i <= 100 ; i++ ) {
   if (i % 15 === 0) {
    console.log(`${i} --> FIZZBUZZ!!!`) 
   } else if (i % 5 === 0) {
       console.log(`${i} --> BUZZ`);
   }else if (i % 3 === 0) {
    console.log(`${i} --> FIZZ`);
}}










// const carrito = [
//     { nombre: 'Monitor 27 pulgadas', precio: 2000},
//     { nombre: 'Lavarropas con secado', precio: 40000},
//     { nombre: 'Anafe calientes-aguas', precio: 230, descuento: true},
//     { nombre: 'Televisión lindavisión', precio: 1500},
//     { nombre: 'Walkman Vintage', precio: 3000},
//     { nombre: 'Auriculares de boliferia', precio: 300}
// ];

// for (let i = 0; i < carrito.length; i++){
//     if(carrito[i].descuento) {
//         console.log(`El producto ${carrito[i].nombre} tiene descuento`);
//         continue;
//     }
//     console.log(carrito[i].nombre);
