export const templateLogin = () => {
  // creamos div que contendrá la plantilla
  const containerLogin = document.createElement('div');
  // creamos el contenido del login
  const contentLogin = ` <h1>Iniciar Sesión</h1>
                        <p>Ingrese su correo de usuario:</p>                            
                        <input id="email" type="email" placeholder="Ingrese un correo">
                        <p>Ingrese su contraseña de usuario:</p>
                        <input id="password" type= "password" placeholder="Ingrese una contraseña">
                        <button id="back">atras</button>
                        <button id="next">adelante</button>
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

    window.location.hash = '#/wall';
  })
  return containerLogin;
}



