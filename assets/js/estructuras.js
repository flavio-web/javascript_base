
const edad = 10;

if( edad >= 21 ){
    console.log("es mayor de edad a nivel mundial");
}else{
    if( edad >= 18 ){
        console.log("es mayor de edad dentro del pais");
    }else{
        console.log("es un menor de edad");
    }
}


const color = 'naranja';
switch ( color ) {
    case 'verde':
        console.log("el color es verde")
        break;

    case 'amarillo':
        console.log("el color es amarillo")
        break;

    case 'azul':
        console.log("el color es azul")
        break;

    default:
        console.log("el color no existe");
        break;
}


const equipos = [ 'barcelona', 'emelec', 'liga de quito', 'nacional', 'independiente', 'orense', 'cuenca' ];
console.log(equipos.length);
for( let i = 0; i < equipos.length; i++ ){ 
    if( i > 3 ){
        break;
    }

    if( i === 1 ){
        continue;
    }
    console.log( '#'+i+' equipo de futbol: '+equipos[i] );

}

const diasSemana = ['Lunes', 'Martes', 'Miercoles', 'Jueves'];

for( i in diasSemana ){
    console.log(`Dia de la semana: ${diasSemana[i]}`);
}



equipos.forEach( ( elemento, index) =>{

    console.log(`EL equipo #${ index + 1 } es: ${elemento}`);
});


let dias = 1;
while( dias < 6 ){
    console.log(`El dia ${ dias }`);
    dias++;
}


let semanas = 5;
do {
    console.log(`El semana ${ semanas }`);
    semanas++;
} while (semanas < 5 );


