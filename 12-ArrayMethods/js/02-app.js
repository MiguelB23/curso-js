const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 2000},
    { nombre: 'Lavarropas con secado', precio: 40000},
    { nombre: 'Anafe calientes-aguas', precio: 300},
    { nombre: 'Televisión lindavisión', precio: 1500},
    { nombre: 'Walkman Vintage', precio: 3000},
    { nombre: 'Auriculares de boliferia', precio: 300}
];

months.forEach( (month, i) => {
    if(month === 'April') {
        console.log(`Find ${month} at ${i}`)
    }
})

//Find April Index

const index = months.findIndex( (month, i)=> month === 'April')
console.log(index);


const indexError = months.findIndex( (month, i) => month === 'December');
console.log(indexError)

//Comprobar un indice de un array con objects

const index2 = carrito.findIndex( producto => producto.precio === 300);
console.log(index2)