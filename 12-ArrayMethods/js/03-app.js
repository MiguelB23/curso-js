const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 2000},
    { nombre: 'Lavarropas con secado', precio: 40000},
    { nombre: 'Anafe calientes-aguas', precio: 230},
    { nombre: 'Televisión lindavisión', precio: 1500},
    { nombre: 'Walkman Vintage', precio: 3000},
    { nombre: 'Auriculares de boliferia', precio: 300}
];

// Im gonna try to log how much you have to pay

//with a forEach:
let total = 0;
carrito.forEach( product => total += product.precio);
console.log(total)


// Con .reduce
let results = carrito.reduce( (finalValue, presentValue) => total + presentValue.precio, 0)
console.log(results);

//Es raro porque en los parámetros se pone último el valor actual,
//y primero el valor donde se va acumulando.