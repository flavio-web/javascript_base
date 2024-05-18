

const getDatosForm = () => {

    const email = document.getElementById('email');
    console.log({ email });
    console.log( email.value );


    /*const formControl = document.getElementsByClassName('form-control');
    console.log( formControl );

    const inputs = document.getElementById('formulario').getElementsByClassName('form-control');
    console.log( inputs );

    const name = document.getElementsByName('passwordName');
    console.log( name );

    const query = document.querySelector('#formulario #emailHelp');
    console.log( {query} );*/
}

getDatosForm();

const remplazarTitulo = () => {

    const titulo = '<h1>Completa el formulario</h1>';

    const elemento = document.getElementById('titulo');

    elemento.innerHTML = titulo;
}


const remplazarTexto = () => {

    const nuevoTexto = 'Ingrese un email válido.';

    const elemento = document.getElementById('emailHelp');

    elemento.textContent = nuevoTexto;
}

const crearNodo = () => {

    const parrafo = document.createElement('p');

    const contenido = document.createTextNode('Hola Mundo!');

    parrafo.appendChild( contenido );

    //document.body.appendChild( parrafo );

    document.getElementById('titulo').appendChild( parrafo );
}

const eliminarNodo = () => {

    document.getElementById('titulo').remove();

    /*const nodo = document.querySelector('#titulo h3');
    console.log( nodo );
    nodo.remove();*/
}


//eliminarNodo();

setTimeout(() => {
    remplazarTitulo();
    remplazarTexto();
    crearNodo();
}, 1000);


setTimeout(() => {
   
}, 3000);
