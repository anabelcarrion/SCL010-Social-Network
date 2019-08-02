// Routes
import { initRouter } from './route.js';



let app = firebase.app();
console.log("HOLA");
console.log(app);

/* init será la función que llame a initRouter apenas cargue el sitio */
const init = () => {
  initRouter();
}

window.addEventListener('load', init);