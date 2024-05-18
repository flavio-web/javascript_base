

const button = document.querySelector('#formulario button');

button.addEventListener('click', () =>{
    //alert('Click sobre el botón');

    const email     = document.getElementById('email').value;
    const password  = document.getElementById('password').value;
    const passwordConfirm  = document.getElementById('password2').value;

    console.log({ email, password });

    if( password === passwordConfirm ){
        alert('Usuario correcto');
        return;
    }

    alert('Las contraseñas no son iguales.');


});