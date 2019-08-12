import { loginGoogle } from './../js/auth.js';

//vista de perfil
export const templateMainScreen = () => {
    // creamos div que contendrá la plantilla
    const containerMainScreen = document.createElement('div');
    // creamos el contenido del MainScreen
    const contentMainScreen = ` 
    <img src="https://q8j4b9t4.stackpathcdn.com/wp-content/uploads/2017/05/Happy-old-people-300x200.jpg" alt="adultos sonriendo" />
    <button id="google">Iniciar Sesión con Google</button>
    <button id="login">Iniciar Sesión</button>
    <button id="register">Crear cuenta</button>`;

    // pasar el contenido al div
    containerMainScreen.innerHTML = contentMainScreen;
    
    // boton para logiarse a la pagina
    const btnLogin = containerMainScreen.querySelector('#login');
    btnLogin.addEventListener('click', () => {

        window.location.hash = '#/login';
    })

    // boton para registarse a la pagina
    const btnRegister = containerMainScreen.querySelector('#register');
    btnRegister.addEventListener('click', () => {
        
        window.location.hash = '#/register';
    })

    // boton para logiarse a la pagina pro google
    const btnGoogle = containerMainScreen.querySelector('#google');
    btnGoogle.addEventListener('click', () => {

        loginGoogle();
    })
    return containerMainScreen;
  }

  