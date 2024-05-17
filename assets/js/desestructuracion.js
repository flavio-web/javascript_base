
const usuario = {
    id: 1,
    nombre: 'Maria',
    edad: 25,
    profesion: 'Desarrolladora de software',
    telefono: '215478954',
    email: 'maria@google.com'
};

//usuario = undefined;

/* const nombre    = usuario.nombre;
const edad      = usuario.edad;
const profesion = usuario.profesion; */

const { ...resto } = usuario;

//console.log({ edad, profesion, telefono, email });
console.log( resto );

if( 10 == '10' ){
    console.log("son iguales");
}

if( 10 === '10' ){
    console.log("son iguales");
}else{
    console.log('No son iguales en ===');
}