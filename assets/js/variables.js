

var miVariable = 'Hola mundo';
//console.log(miVariable);

let nombre = 'Flavio';
//console.log( 'Mi nombre es: '+ nombre );

const edad = 30;
//console.log('edad: '+edad);

ejercicio1();


function ejercicio1(){

    /*console.log('variable 1 desde funcion:' +miVariable);
    console.log('nombre desde funcion: '+nombre);
    console.log('edad desde funcion: '+edad);*/

}


//string
const direccion = 'machala';

//numerica
const sueldo = 250.10;

//booleana
const idAdmin = true;

//array
const colores = [ 'azul', 'naranja', 'verde' ];

//undefined
const carro = undefined;

//null
const persona = null;


//Objeto
//const animal = new Object;
const animal = {
    nombre: 'Atom',
    patas: 4,
    ladra: true,
    comidasFavoritas: [ 'croquetas', 'pollo' ],
    raza: {
        isLanudo: false,

    },
    getNombre(){
        return this.nombre;
    },
    caminar(){
        console.log(`El nombre es: ${this.getNombre()} `);
    },
    
};


console.log( animal );

animal.patas = 3;

console.log( animal );


console.log( colores.join(' ') );

console.log( 'total caracteres direccion: '+direccion.length );


animal.caminar();