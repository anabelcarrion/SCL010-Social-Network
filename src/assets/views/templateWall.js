<<<<<<< HEAD
import { savePost, getPost } from "../js/auth.js";

=======
import { signOut } from './../js/auth.js';
>>>>>>> 3263124a67cbd9e46b3b92dbbac63a7ae515ebad
    
    export const templateWall= () => {
    // creamos div que contendrá la plantilla
    const containerWall = document.createElement('div');
    // creamos el contenido del login
    const contentWall = `<h1 id="fullName"></h1>
                        <p id="post">¿Eventos?, cuentanos!</p>
                        <textarea  maxlength="50" rows="4" cols="40" placeholder="escribe algo.." name=""  id="text-post"></textarea>
                        <button  id="toPost" class="buttonPost">Publicar</button>
                        <p id="post-error" class="error"></p>
                        <!--menu de abajo/-->
                        <button id="back" class="buttonA">atras</button>
                        <button id="next" class="buttonA">Publicaciones</button>
                        <button id="profile" class="buttonA">Perfil</button>`;
    // pasar el contenido al div
    containerWall.innerHTML = contentWall;
    
    const fullName=containerWall.querySelector('#fullName');
    fullName.innerHTML=localStorage.getItem('fullName');

    const btnBack = containerWall.querySelector('#back');
    btnBack.addEventListener('click', () => {
      window.location.hash = '';
    });

    const btnToPost = containerWall.querySelector('#toPost');
    btnToPost.addEventListener('click', ()=>{
      let textPost = document.getElementById('text-post').value;
      let alertPost = document.getElementById('post-error'); 
      if (textPost === '' || textPost === ' ') {
        alertPost.innerHTML = "Debes ingresar un comentario"
      }
      else {
        savePost();
        // document.getElementById("containerWall").innerHTML = "";
        // containerWall.innerHTML = "";
        getPost();
      }
    
      })
   
    return containerWall
  }


  
