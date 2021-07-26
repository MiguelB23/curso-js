const firstLink = document.querySelector('a');

console.log(firstLink);

//Se puede eliminar con .remove();

//Eliminar desde el padre:

const navegacion = document.querySelector('.navegacion')

console.log(navegacion.children);

navegacion.removeChild( navegacion.children[2] );