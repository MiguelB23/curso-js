const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const months2 = ['August', 'September'];
const months3 = ['October', 'November', 'December']


// concat
const calendar = months.concat(months2, months3);

console.log(calendar);

// spread operator

const results = [...months, ...months2, ...months3]
console.log(results);

// Notas: hay que tener en cuenta en que orden se concatenan o suman con "..."
//Cuidado que el ... clona los elementos al anterior, si yo pusiera:

//[...months, ...months2, ...'Noviembre'] --> Noviembre va a aparecer como objeto y va a separar cada elemento del string
