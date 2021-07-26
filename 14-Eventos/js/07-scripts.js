
const cardDiv = document.querySelector('.card')

cardDiv.addEventListener('click', e => {
    if(e.target.classList.contains('titulo')) {
        console.log('le diste al titulo')
    }
    if(e.target.classList.contains('precio')) {
        console.log('le diste al precio')
    }
    if(e.target.classList.contains('card')) {
        console.log('le diste al card')
    }
})