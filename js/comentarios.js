// Variables:
const formulario = document.querySelector('#formulario');
const listaComentarios = document.querySelector('#lista-comentarios');
let comentarios = [];



// Eventos:
eventListeners();

function eventListeners(){
    formulario.addEventListener('submit', agregarComentario);

    document.addEventListener('DOMContentLoaded', () =>{
        comentarios = JSON.parse(localStorage.getItem('comentarios')) || [];
        console.log(comentarios);
        insertarHTML();
    });

}



// Funciones:

function agregarComentario(e){
    e.preventDefault();

    const comentario = document.querySelector('#comentario').value;
    if (comentario === ""){
        comentarioError('No se detecto escritura.')
        return;
    }

    comentarios = [...comentarios, comentario];
    insertarHTML();

    formulario.reset();
    
}


function comentarioError(error){
    const msjError = document.createElement('p');
    msjError.textContent = error;
    msjError.classList.add("error");

    const falla = document.querySelector(".principal");
    falla.appendChild(msjError);

}

function insertarHTML(){
    resetLista();
    if(comentarios.length>0){
        comentarios.forEach( comentario =>{
           const li = document.createElement("li");
           li.textContent = comentario;
           listaComentarios.appendChild(li);
           
        });
    }
    sincSto();  //local storage
}

function resetLista(){
    while(listaComentarios.firstChild){
        listaComentarios.removeChild(listaComentarios.firstChild);
    }
}

//local storage

function sincSto(){
    localStorage.setItem('comentarios', JSON.stringify(comentarios));
}