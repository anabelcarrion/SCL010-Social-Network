
export const templateGoogle = () => {
  // creamos div que contendrá la plantilla
  const containerGoogle = document.createElement('div');
  // creamos el contenido del login
  const contentGoogle = `<p>Login con Google</p>
                        <button id="google">Loguealo</button>`;
  // pasar el contenido al div
  containerGoogle.innerHTML = contentGoogle;
  // le pido que busque el id del boton dentro del div creado
 
  return containerLogin;
}
