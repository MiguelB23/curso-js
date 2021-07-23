const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 2000},
    { nombre: 'Lavarropas con secado', precio: 40000},
    { nombre: 'Anafe calientes-aguas', precio: 230},
    { nombre: 'Televisión lindavisión', precio: 1500},
    { nombre: 'Walkman Vintage', precio: 3000},
    { nombre: 'Auriculares de boliferia', precio: 300}
];

//Comprobar si un valor existe en un arreglo

months.forEach( (month) => {
    if(month === "January") { 
        console.log('there is a January month')
    }        
})

const results = months.includes('December');
const results2 = months.includes('April');
console.log(results);
console.log(results2)

// Dentro de un array de objects se utiliza .some

const exists = carrito.some( product => {
    return product.nombre === "Walkman"
});

console.log(exists)

//En un array tradicional

const exist2 = months.some( month => month === "February");
console.log(exist2)