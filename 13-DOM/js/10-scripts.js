const link = document.createElement('a');

//Agregando texto
link.textContent = 'newLink';

//Adding href

link.href = '/newLink';
link.target = '_blank';
link.setAttribute = 'data-enlace', 'newLink';
link.classList.add('some-class')

console.log(link);

//Quiero agregar mi link a la nav, así que selecciono la nav

const navegation = document.querySelector('.navegacion');
// navegation.appendChild(link);
navegation.insertBefore(link, navegation.children[1]);


//Crear un nuevo card
const paragraph1 = document.createElement('p');
paragraph1.textContent = 'Concert';
paragraph1.classList.add('categoria', 'concierto')


const paragraph2 = document.createElement('p');
paragraph2.textContent = 'Rock'
paragraph2.classList.add('titulo');

const paragraph3 = document.createElement('p');
paragraph3.textContent = '300 por persona';
paragraph3.classList.add('precio');

//crear div invo
const info = document.createElement('div');
info.classList.add('info');

info.appendChild(paragraph1)
info.appendChild(paragraph2)
info.appendChild(paragraph3)

console.log(info);

//crear la imagen
const image = document.createElement('img');
image.src = 'img/hacer3.jpg';

//Crear el card
const newCard = document.createElement('div');
newCard.classList.add('card');

//Asignar la imagen y el div de info:
newCard.appendChild(image);
newCard.appendChild(info);

console.log(newCard);

//Insertar en el HTML

const container = document.querySelector('.hacer .contenedor-cards');
container.appendChild(newCard);
 


