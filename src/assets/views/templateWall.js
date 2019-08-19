import { savePost } from './../js/auth.js';

  export const templateWall = () => {
    // creamos div que contendrá la plantilla
    const containerWall = document.createElement('div');
    // creamos el contenido del login
    const contentWall = `<h1 id="fullName"></h1>
                        <p id="post">¿Eventos?, cuentanos!</p>
                        <textarea  maxlength="50" rows="4" cols="40" placeholder="escribe algo.." name=""  id="text-post"></textarea>
                        <button  id="toPost" class="buttonA">Publicar</button>
                        <p id="post-error" class="error"></p>
                        <!--menu de abajo/-->
                        <button id="posts" class="buttonA"> Ver Publicaciones</button>
                        <button id="back" class="buttonA">Volver</button>`
                        
    // pasar el contenido al div
    containerWall.innerHTML = contentWall;

    const fullName = containerWall.querySelector('#fullName');
    fullName.innerHTML = localStorage.getItem('fullName');

    const btnBack = containerWall.querySelector('#back');
    btnBack.addEventListener('click', () => {
      window.location.hash = '';
    });

    const btnToPost = containerWall.querySelector('#toPost');
    btnToPost.addEventListener('click', () => {

      let textPost = document.getElementById('text-post').value;
      let alertPost = document.getElementById('post-error');
      if (textPost === '' || textPost === ' ') {
        alertPost.innerHTML = "Debes ingresar un comentario"
      } else {
        savePost();
        window.location.hash = '#/profile';
      }
    })

    const btnPosts = containerWall.querySelector('#posts');
    btnPosts.addEventListener('click', () => {
      window.location.hash = '#/profile';
    });
    return containerWall
  }