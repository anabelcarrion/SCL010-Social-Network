
import { sendEmailVerification } from './../js/auth.js';
import { handleSignUp } from './../js/auth.js';
import { saveUserToDatabaseAfterLogin } from './../js/auth.js';


export const templateRegister2 = () => {
    const containerRegister2 = document.createElement('div');
    containerRegister2.setAttribute("class","mainClass");
    //escrir html
    const contentRegister2 = `<h1>Registrar cuenta</h1>
                            <p>Ingrese un correo</p>                            
                            <input id="email" class="input" type= "text">
                            <p>Ingrese una contraseña</p>
                             <input id="password" class="input" type="password">
                             <p>Ingrese nuevamente su contraseña</p>
                            <input class="input" type= "text">
                            <button class="button" id="back">Volver</button>
                            <button class="button" id="next">Seguir</button>`


    containerRegister2.innerHTML = contentRegister2;


    const btnNext = containerRegister2.querySelector('#next')

    btnNext.addEventListener('click', () =>{
        handleSignUp();
        window.location.hash = '#/confirmation';
    })

    const btnBack = containerRegister2.querySelector('#back');
    btnBack.addEventListener('click', () =>{
     
        window.location.hash = '#/register';
    })
    return containerRegister2;
}