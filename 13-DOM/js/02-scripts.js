// Seleccionar elementos por su clase...

const header = document.getElementsByClassName('header');
console.log(header);

const hero = document.getElementsByClassName('hero');
console.log(hero);


//Si las clases existen repetidas, se puede poner:
const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);

//Si elijo una clase que no existe, me manda un array vacío
const noExist = document.getElementsByClassName('awdu');
console.log(noExist);