    export const templateWall= () => {
    // creamos div que contendrá la plantilla
    const containerWall = document.createElement('div');
    // creamos el contenido del login
    const contentWall = `<p id="fullName"></p>
    <p>AQUI SE MOSTRARA EL MURO</p>
    <button id="back" class="button">atras</button>
    <button id="next" class="button">adelante</button>`;
    // pasar el contenido al div
    containerWall.innerHTML = contentWall;
    
    const fullName=containerWall.querySelector('#fullName');
    fullName.innerHTML=sessionStorage.getItem('fullName');

    const btnBack = containerWall.querySelector('#back');
    btnBack.addEventListener('click', () => {
      window.location.hash = '';
    })
   
    return containerWall;
  }
  
