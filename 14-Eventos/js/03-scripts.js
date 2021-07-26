const search = document.querySelector('.busqueda');

//PARA CUANDO EMPIEZOA ESCRIBIR
// search.addEventListener('keydown', () =>{
//     console.log('escribiendo')
// })


// CUANDO SUELTO LA TECLA ESCRITA
// search.addEventListener('keyup', () =>{
//     console.log('escribiendo')
// })

// SE EJECUTA CUANDO ME SALGO DE LA VARIABLE
// search.addEventListener('blur', () =>{
//     console.log('escribiendo')
// })

//Se ejecuta cuando copio el texto en ese lugar
// search.addEventListener('copy', () =>{
//     console.log('escribiendo')
// })


//SE EJECUTA CUANDO PEGAS ALGO AHI
// search.addEventListener('paste', () =>{
//     console.log('escribiendo')
// })

//SE EJECUTA EN TODOS LOS CASOS ANTERIORES EXCEPTO EN EL BLUR
// search.addEventListener('input', () =>{
//     console.log('escribiendo')
// })


search.addEventListener('input', (evt) =>{
    if(evt.target.value === ''){
    console.log('falló la validación');
}})