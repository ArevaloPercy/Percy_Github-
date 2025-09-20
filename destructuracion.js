const heroe = {
    nombre :'Wonder Woman',
    alias :'Diana Prince',
    poderes : ['super fuerza', 'velocidad', 'durabilidad'],
    habilidades: ['combate cuerpo a cuerpo', 'uso del lazo mágico', 'vuelo'] ,
    creadaPor: 'William Moulton Marston',
    primeraAparicion: 'All Stars Comics #8 (1941)',
}
//console.log(superheroe.primeraAparicion);
//var primeraAparicion = heroe.primeraAparicion; //manera tradicional


const { primeraAparicion } = heroe;
console.log(primeraAparicion); // Salida: All Star Comics #8 (1941) //manera moderna, destructuracion de ES6

// Ejemplo con arreglo
const armas = ['Espada de Athena', 'Escudo', 'Lazo de la Verdad', 'Brazaletes indestructibles'];
const [primerArma] = armas;
console.log(primerArma);//Espada de Athena

// QUE PASA SI SE REPITEN LOS NOMBRES DE LAS VARIABLES?
//const codigoSecreto = '12345';//El valor original
//const { codigoSecreto } = superheroe; //Error conflicto de nombres  ///////////////////////////////////////////////////////////////
const superheroe = {
    codigoSecreto : '12345',
    nombre :'Batman'
};

//La solucion es asignar un alias para evitar el conflicto, como se muestra a continuacion:

const {codigoSecreto: codigoEncriptado} = superheroe;
console.log(codigoEncriptado);//Salida: 12345
////////////////////////////////////////////////////////////////////////

//Destructuración de estructuras anidadas
const alterego = {
    nombre: 'Diana',
    apellido: 'Prince',
    email: 'diana.prince@themyscira.com',
    direcciones: [
    { direccion: 'Themyscira Palace', ciudad: 'Themyscira', codigoPostal: '0001' },
    { direccion: '7000 Hollywood Blvd', ciudad: 'Los Angeles', codigoPostal: '90028' }
    ]
};

const { direcciones } = alterego;
const [ primeraDireccion, segundaDireccion ] = direcciones;

console.log('Primera Dirección:', primeraDireccion);
console.log('Segunda Dirección:', segundaDireccion);
//Este código extrae las direcciones de alterego y las asigna a variables individuales. Si solo necesitas la segunda dirección, puedes omitir la primera con una coma:
//const [, segundaDireccion] = direcciones;
console.log('Segunda Dirección:', segundaDireccion);

///////////////////////////////////////////////////////////////////////////////////////
const persona = {
    nombre : 'Juan',
    edad : '30',
    direccion : {
        calle : 'Calle falsa',
        numero : 123,
        ciudad : 'Springfield'
    },
    hobbies : ['leer', 'correr', 'viajar']
};
//Destructuración simple
const {nombre, edad, apellido = "No proporcionado" } = persona; //si queremos crear una variable nueva se puede ejem:apellido
console.log(nombre, edad, apellido);

//Destructuración anidada
const {direccion:{ciudad, pais = "Desconocido"}} = persona;
console.log(ciudad, pais);

//Destructuracion en arreglos
const [hobby1] = persona.hobbies;
console.log(hobby1);

const [, hobby3] = persona.hobbies;
console.log( hobby3);


