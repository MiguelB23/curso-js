// Variables

const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')
const courseList = document.querySelector('#lista-cursos');
let articulosCarrito = [];

registerEvents();
function registerEvents(){
    courseList.addEventListener('click', agregarCurso)
}



//Funciones

function agregarCurso(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
    const cursoSeleccionado = e.target.parentElement.parentElement
    leerDatosCurso(cursoSeleccionado);
    }
}

//Lee el contenido del html al que le dimos click
//y extrae la información del curso

function leerDatosCurso(curso) {
    // console.log(curso);

    //Creo un obj con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1,
    }
   
    //agregar elementos al carrito array
    articulosCarrito = [...articulosCarrito, infoCurso];
    console.log(articulosCarrito);
    carritoHTML();
}



//Muestra el carrito en el HTML
function carritoHTML() {

    //Limpiar el HTML (para que no se repitan los cursos)

    limpiarHTML();
    //Recorre el carrito y genera HTML
    articulosCarrito.forEach( curso => {
        const { imagen, precio, titulo, cantidad, id } = curso
        const row =document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${imagen}" width="100">        
            </td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}">x</a>    
            </td>
        `;

        // Agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);
    })
}

//Elimina los cursos anteriors del  html
function limpiarHTML() {
    // Forma lenta
    // contenedorCarrito.innerHTML = '';

    //Forma rápida
    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}