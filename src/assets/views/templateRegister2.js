
export const templateRegister2 = () => {
    const containerRegister2 = document.createElement('div');
    //escrir html
    const contentRegister2 = `<h1>REGISTRAR cuenta</h1>
                            <p>Ingrese un correo</p>                            
                            <input type= "text">
                            <p>Ingrese una contraseña</p>
                            <input type= "text">
                            <p>Ingrese nuevamente su contraseña</p>
                            <input type= "text">
                            <button id="back">atras</button>
                            <button id="next">finalizar registro</button>`

    containerRegister2.innerHTML = contentRegister2;


    const btnNext = containerRegister2.querySelector('#next')

    btnNext.addEventListener('click', () =>{
     
        window.location.hash = '#/confirmation';
    })

    const btnBack = containerRegister2.querySelector('#back');
    btnBack.addEventListener('click', () =>{
     
        window.location.hash = '#/register';
    })
    return containerRegister2;
}