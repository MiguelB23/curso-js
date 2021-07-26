const form = document.querySelector('#formulario');

form.addEventListener('submit', formVal);
 

    // puedo utilizar tartget. method para saber qué metodo utiuliza el input
    //puedo utilizar el .action para saber la acción


function formVal(e) {
    e.preventDefault(); 
    console.log(e.target.action);

}