export const templateRegister = () => {
  const containerRegister = document.createElement('div');
  //escrir html
  const contentRegister = `<h1>REGISTRAR cuenta</h1>
                            <p>Escriba su nombre</p>                            
                            <input type= "text">
                            <p>escriba su apellido</p>
                            <input type= "text">
                            <button id="back">atras</button>
                            <button id="next">adelante</button>`

  containerRegister.innerHTML = contentRegister;

  const btnBack = containerRegister.querySelector('#back');
  btnBack.addEventListener('click', () => {
    window.location.hash = '';
  })

  const btnNext = containerRegister.querySelector('#next');
  btnNext.addEventListener('click', () => {
    window.location.hash = '#/register2';
  })

  return containerRegister;
}

