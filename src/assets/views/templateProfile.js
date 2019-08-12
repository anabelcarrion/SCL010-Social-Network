const createAccount = () => {
  console.log("Create account");
}

export const templateProfile= () => {
  // creamos div que contendrá la plantilla
  const containerProfile = document.createElement('div');
  containerProfile.setAttribute("class","mainClass");
  // creamos el contenido del login
  const contentProfile = `<p>Ctemplateperfil</p>`;
  // pasar el contenido al div
  containerProfile.innerHTML = contentProfile;
  // le pido que busque el id del boton dentro del div creado
  const btn = containerProfilecontentProfile.querySelector('#ProfilecontentProfile');
  // evento del botón que llama a la autentificación de google.
  btn.addEventListener('click', () => {
    ProfilecontentProfileAccount();
  })
  return containerProfilecontentProfile;
}