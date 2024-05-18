
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
//console.log( resto );



/***
 * 
 * Desdestructuracion de arreglos
 * 
 ***/

const colores = [ 'azul', 'amarillo', 'rojo', 'verde' ];

/* console.log( colores[0] );
console.log( colores[1] ); */

const [ pepe, maria ] = colores;

console.log( pepe, maria );
