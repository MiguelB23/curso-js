//Variables
const btnSend = document.querySelector('#enviar');
const form = document.querySelector('#enviar-mail')

//Variables para campos
const email = document.querySelector('#email');
const issue = document.querySelector('#asunto');
const message = document.querySelector('#mensaje');


//Event listeners
eventListeners();
function eventListeners() {
    //cuando la app arranca
    document.addEventListener('DOMContentLoaded', startApp);

    //Campos del form
    email.addEventListener('blur', vForm)
    issue.addEventListener('blur', vForm)
    message.addEventListener('blur', vForm)

}






 





//Functions

function startApp() {
    btnSend.disabled = true;
    btnSend.classList.add('cursor-not-allowed', 'opacitiy-50');

}

function vForm(e) {
    if(e.target.value.length > 0) {

        //Elimina las alertas de error...

        const error = document.querySelector('p.error');
        if(error) {
        error.remove();
        }
        e.target.classList.remove('border', 'border-red-500')
        e.target.classList.add('border', 'border-green-500')
    } else {
        e.target.classList.remove('border', 'border-green-500')
        e.target.classList.add('border', 'border-red-500')

        showError('Todos los campos son obligatorios');
    }

    if(e.target.type === 'email') {
        const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if(er.test(e.target.value) ) {
            //Elimina los errores
            const error = document.querySelector('p.error')
                error.remove();
        }
        e.target.classList.remove('border', 'border-red-500')
        e.target.classList.add('border', 'border-green-500')
            
        } else {
            e.target.classList.remove('border', 'border-green-500')
            e.target.classList.add('border', 'border-red-500')
            showError('Not valid e-mail');
        }
        
    }


    if(email.value !== '' && issue.value !== '' && message.value !== '') {
        console.log('pasaste la validación')
    } else {
        console.log('no lo hcisite')
    }


function showError(message){
    const errorMessage = document.createElement('p');
    errorMessage.textContent = message;
    errorMessage.classList.add('border', 'border-red-500', 'background-red-100', 'text-red-500', 'p-3', 'mt-5', 'text-center', 'error');
    
    const errors = document.querySelectorAll('.error');
    if (errors.length === 0) {
        form.appendChild(errorMessage);
    }
}