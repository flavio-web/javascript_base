
const persona = {
    nombre: 'Juan',
    apellido: 'Riveros',
    edad: 21,
    isTrabajador: false,
    isEstudiante: true,
    telefono: '',
    email: '',
    getNombreApellido: function(){
        console.log(`${ this.nombre } ${ this.apellido }`);
    },
    mayorEdad: function( edad = 0 ){
        if( edad >= 18 ){
            return "Es mayor de edad";
        }

        return "Es menor de edad";
    }
}

/*console.log( persona.getNombreApellido() );

const resultadoMayorEdad = persona.mayorEdad( 23 );
console.log( resultadoMayorEdad );*/


const usuario = {
    name: 'LUIS',
    login( nickmane = '', password = '' ){
        if( nickmane === '@juan' && password === '123' ){
            return {
                status: true,
                message: 'Credenciales Correctas'
            }
        }

        return {
            status: false,
            message: 'Usuario o contraseña incorrectas'
        }
    }
};


function otroLogin( mensaje = '' ){
    console.log('otroLogin '+mensaje);
    console.log('nombre '+this.name);
}



usuario.acceso = otroLogin;
//console.log( 'solo funcion: ' + otroLogin() );


console.log({ usuario });
console.log( usuario.acceso('Hola Mundo!') );

let accesoUsuario = {
    nickmane: '@juan',
    password: '123'
};



accesoUsuario = { ...accesoUsuario, ...persona, ...usuario };

const datosLogin = usuario.login( '@juan', '123' );
//console.log( datosLogin );

const nickmane = accesoUsuario.nickmane;
const password = accesoUsuario.password;

//console.log(accesoUsuario.login( nickmane, password ));