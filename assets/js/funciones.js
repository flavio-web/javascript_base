
const resultadoSuma = sumar( );
console.log('Resultado de suma invocada: '+resultadoSuma);

//forma tracional de crear funciones
function sumar( numero1 = 0, numero2 = 0 ){
    /*const numerio1= 5;
    const numerio2= 10;*/

    const resultado = numero1 + numero2;
    console.log('resultado desde funcion: '+resultado);

    return resultado;
}


//funcion de flecha
const restar = ( numero1 = 0, numero2 = 0 ) =>{
   
    const resultado = numero1 - numero2;
    console.log('Resultdo de la resta desde funcoion: '+resultado);
    return resultado;
}

const resultadoResta = restar( 10, 5 );
console.log('Resultdo de la resta: '+resultadoResta);


const operacion = ( numero1, numero2 ) => ( numero1 > numero2 ) ? ( numero1 * numero2 ) : ( numero1 + numero2 );

const resultadoMulti = operacion( 5, 2 );
console.log('Resultado de la operacion: '+resultadoMulti);


//function callback() - anonimas
const colores = [ 'amarillo', 'azul', 'rojo' ];

colores.forEach(  ( color ) =>{

    alert( `El color es ${ color }` );
    
});