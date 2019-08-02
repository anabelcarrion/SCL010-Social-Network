import { templateLogin } from './assets/views/templateLogin.js';
import { templateCreate } from './assets/views/templateCreate.js';

/* changeRouter llama a la función que carga cada template */
const changeRouter = (hash) => {
  if (hash === '#/login') {
    return showTemplate(hash);
  }

  if (hash === '#/create') {
    return showTemplate(hash);
  }

}

// imprimirá el template en el html
const showTemplate = (hash) => {
  const router = hash.substring(2);
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = '';

  // hacemos el match del hash utilizado y el template que queremos mostrar
  switch (router) {
    case 'login':
      containerRoot.appendChild(templateLogin());
    break;
    case 'create':
      containerRoot.appendChild(templateCreate());
    break;
    default:
      containerRoot.innerHTML = `<p>Error 404</p>`
  }
}


/* initRouter es la función que 'escucha' los cambios de hash */
export const initRouter = () => {
  window.addEventListener('load', changeRouter(window.location.hash));

  // reconoce un cambio en el hash y le pasa ese nuevo hash a changeRouter
  if ('onhashchange' in window) {
    window.onhashchange = () => {
      changeRouter(window.location.hash);
    }
  }
}