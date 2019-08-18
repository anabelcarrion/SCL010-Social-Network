import { signOut } from './../js/auth.js';
    
    export const templateWall= () => {
    // creamos div que contendrá la plantilla
    const containerWall = document.createElement('div');
    // creamos el contenido del login
    const contentWall = `<p id="fullName"></p>
    <p>AQUI SE MOSTRARA EL MURO</p>
    <button id="back" class="button">atras</button>
    <button id="next" class="button">Salir</button>`;
    // pasar el contenido al div
    containerWall.innerHTML = contentWall;
    
    const fullName=containerWall.querySelector('#fullName');
    fullName.innerHTML=localStorage.getItem('fullName');

    const btnBack = containerWall.querySelector('#back');
    btnBack.addEventListener('click', () => {
      window.location.hash = '';
    })

    const btnSalir= containerWall.querySelector('#next');
    btnSalir.addEventListener('click', () => {
      signOut();
      window.location.hash = '';
    })
   
    return containerWall;
  }
  
