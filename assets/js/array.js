
const frutas = [ 'manzanas', 'peras', 'uvas' ];
const mascotas = [ 'perro', 'gato', 'loro' ];

console.log( 'frutas count: '+frutas.length );

//contact()
const frutas_mascotas = frutas.concat( mascotas );
console.log({ frutas_mascotas });

//join()
const frutas_string = frutas.join(' - ');
console.log('join: ', frutas_string);

//pop()
const mascotas_pop = mascotas;
//const mascotas_pop = [ ...mascotas ];
console.log('mascotas original: '+mascotas);
console.log('mascotas pop: '+mascotas_pop.pop());
console.log('mascotas pop original: '+mascotas_pop);

//push()
mascotas.push( 'gallina' );
console.log({ mascotas_push: mascotas  });

//shift()
const mascotas_shift = mascotas.shift();
console.log({ mascotas_shift });

//unshift()
mascotas.unshift( mascotas_shift );
console.log({ mascotas_unshift: mascotas });

//reverse()
mascotas.reverse();
console.log({ mascotas_reverse: mascotas });

