// traversing the DOM es como nos movemos por los elementos de html
const navegacion = document.querySelector('.navegacion');
// console.log(navegacion);
// console.log(navegacion.childNodes); // Los espacios en blanco son considerados elementos
// console.log(navegacion.children); // te lista elementos reales

// console.log(navegacion.children[0].nodeName);
// console.log(navegacion.children[0].nodeType)

const card = document.querySelector('.card');

// card.children[1].children[1].textContent = 'New Heading'

// console.log(card.children[1].children[1].textContent)

// card.children[0].src = 'img/hacer4.jpg'
// console.log(card.children[0])



// TRAVERSING DEL HIJO AL PADRE

// console.log(card.parentNode);
// console.log(card.parentElement);

// console.log(card.parentElement.parentElement.parentElement);

console.log(card.nextElementSibling);
console.log(card.nextElementSibling.nextElementSibling);

const card2 = document.querySelector('.card:nth-child(4)')

console.log(card2.previousElementSibling);
console.log(navegacion.firstElementChild)