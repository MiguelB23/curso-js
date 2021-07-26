const heading = document.querySelector('h1');
console.log(heading.style);

// para usar CSS desde js se utiliza la segunda palabra en mayus cuando aplique.

heading.style.backGroundColor = 'red'
heading.stylefontFamily = 'Arial';
heading.style.textTransform = 'uppercase'

const card = document.querySelector('.card');
card.classList.add('new-class');
card.classList.remove('new-class')
console.log(card.classList);