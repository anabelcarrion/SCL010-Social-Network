
import { signIn } from './../js/auth.js';

export const templateLogin = () => {
  // creamos div que contendrá la plantilla
  const containerLogin = document.createElement('div');
  containerLogin.setAttribute("class","mainClass");
  // creamos el contenido del login
  const contentLogin = ` <h1>Iniciar Sesión</h1>
                        <p>Ingrese su correo de usuario:</p>                            
                        <input id="email" class="input" type= "text" placeholder="Ingrese un correo">
                        <p>Ingrese su contraseña de usuario:</p>
                        <input id="password" class="input" type= "password" placeholder="Ingrese una contraseña">
                        <button class="button" id="back">Volver</button>
                        <button class="button" id="next">Seguir</button>
                        `;
  // pasar el contenido al div
  containerLogin.innerHTML = contentLogin;

  // le pido que busque el id del boton dentro del div creado
  const btnBack = containerLogin.querySelector('#back');
  // evento del botón que llama a la autentificación de google.
  btnBack.addEventListener('click', () => {

    window.location.hash = '';
  });

  const btnNext = containerLogin.querySelector('#next');
  // evento del botón que llama a la autentificación de google.
  btnNext.addEventListener('click', () => {
    signIn();
    if (firebase.auth().currentUser != null && firebase.auth().currentUser.emailVerified)
    {
      window.location.hash = '#/wall';
    }
    else {
      console.log("No está verificado el usuario");
      console.log(firebase.auth().currentUser.emailVerified);
    }
  })
  return containerLogin;
}
