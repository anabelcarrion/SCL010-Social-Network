import {templateAbout} from './assets/views/templateAbout.js'
import {templateConfirmationTxt} from './assets/views/templateConfirmationTxt.js'
import {templateGoogle} from './assets/views/templateGoogle.js'
import {templateLogin} from './assets/views/templateLogin.js'
import {templateMainScreen} from './assets/views/templateMainScreen.js'
import {templateProfile} from './assets/views/templateProfile.js'
import {templateRegister} from './assets/views/templateRegister.js'
import {templateRegister2} from './assets/views/templateRegister2.js'
import {templateWall} from './assets/views/templateWall.js'

/*const changeRouter = (hash) =>{
   if( hash === '#/about' || hash === '#' || hash === '' || hash === '#/login' || hash === '#/register' || hash ==='#/register2' || hash === 'confirmation' || hash === '#/about'){
        return showTemplate(hash);
    }
    return showTemplate(hash);
}*/

const showTemplate = (hash) => {
    const router = hash.substring(2);
    const containerRoot =
        document.getElementById('root');
    containerRoot.innerHTML = '';


    switch (router) {
        case 'about':
            containerRoot.appendChild(templateAbout())
            break;
        case 'confirmation':
            containerRoot.appendChild(templateConfirmationTxt())
            break;
        case 'google':
            containerRoot.appendChild(templateGoogle())
            break;
        case 'login':
            containerRoot.appendChild(templateLogin())
            break;
        case '':
            containerRoot.appendChild(templateMainScreen())
            break;
        case 'profile':
            containerRoot.appendChild(templateProfile())
            break;
        case 'register':
            containerRoot.appendChild(templateRegister())
            break;
        case 'register2':
            containerRoot.appendChild(templateRegister2())
            break;
        case 'wall':
            containerRoot.appendChild(templateWall())
            break;
        default:
            containerRoot.innerHTML = `<p> Error 404</p>`
    }
}

export const initRouter = () => {
    window.addEventListener('load', showTemplate(window.location.hash));
    if ('onhashchange' in window) {
        window.onhashchange = () => {
            showTemplate(window.location.hash);
        }
    }
}