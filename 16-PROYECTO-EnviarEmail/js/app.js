//Variables
const btnSend = document.querySelector('#enviar');
const btnReset = document.querySelector('#resetBtn')
const form = document.querySelector('#enviar-mail')

//Variables para campos
const email = document.querySelector('#email');
const issue = document.querySelector('#asunto');
const message = document.querySelector('#mensaje');

const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
//Event listeners
eventListeners();
function eventListeners() {
    //cuando la app arranca
    document.addEventListener('DOMContentLoaded', startApp);

    //Campos del form
    email.addEventListener('blur', vForm)
    issue.addEventListener('blur', vForm)
    message.addEventListener('blur', vForm)

    //Reset form
    btnReset.addEventListener('click', resetForm)
    
    //Enviar mail
    form.addEventListener('submit', sendMail);

}






 





//Functions

function startApp() {
    btnSend.disabled = true;
    btnSend.classList.add('cursor-not-allowed', 'opacitiy-50');

}

function vForm(e) {
    if(e.target.value.length > 0) {

        //Eliminar los errores
        const error = document.querySelector('p.error');
        if(error){
        error.remove();
        }

        e.target.classList.remove('border', 'border-red-500');
        e.target.classList.add('border', 'border-green-500');
    } else {
        e.target.classList.remove('border', 'border-green-500');
        e.target.classList.add('border', 'border-red-500');
        showError('Todos los campos son obligatorios');
    }

    if(e.target.type === 'email') {
        if(er.test(e.target.value) ) {
            //Elimina los errores
            const error = document.querySelector('p.error');
            if(error){
                error.remove();
            }

        e.target.classList.remove('border', 'border-red-500');
        e.target.classList.add('border', 'border-green-500');
        } else {
            e.target.classList.remove('border', 'border-green-500');
            e.target.classList.add('border', 'border-red-500');
            showError('Not valid e-mail');
        }
    }
    if(er.test( email.value ) && issue.value !== '' && message.value !== '') {
        btnSend.disabled = false;
        btnSend.classList.add( 'opacitiy+50');
        btnSend.classList.remove( 'cursor-not-allowed' )
    }
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

//Enviar email
function sendMail (e) {
    e.preventDefault();
    
    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'flex';

    //Después de 3 seg ocultar spinner
    setTimeout(() => {
        spinner.style.display = 'none'

        //Mensaje de que se envio bien
        const paragraphSent = document.createElement('p');
        paragraphSent.textContent = 'El mensaje se envió correctamente';
        paragraphSent.classList.add('border', 'text-center', 'my-10', 'p-2', 'bg-green-500' )
        
        //Aparece que un mensaje de que se envió bien
        form.insertBefore(paragraphSent, spinner)

        setTimeout(() => {
            paragraphSent.remove();

            resetForm();
        }, 5000 );
        
    }, 3000 );
    
}

// 

function resetForm(e) {
    e.preventDefault();
    form.reset();

    startApp();
}