export const templateRegister = () => {
  const containerRegister = document.createElement('div');
  //escrir html
  const contentRegister = `<h1>REGISTRAR cuenta</h1>
                            <p>Escriba su nombre</p>                            
                            <input id="name" type= "text">
                            <p>escriba su apellido</p>
                            <input id="lastName" type= "text">
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

/*const capturaDatosLogin = () => {

  let name= document.getElementById("name").value;
  let lastName=document.getElementById("lastName").value;
  if(9)
  
  }*/
