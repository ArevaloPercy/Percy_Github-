//eSTO ES DEL MODULO 'math.js'
//Definicion de funciones

// const multiplicar =(a,b) => a*b;
// const dividir = (a,b) => a/b;

// //Exportar las funciones 
// module.exports = {
//     multiplicar,
//     dividir
// };

// //Tambien es posible exportar directamente cada funcion
// module.exports.multiplicar = (a,b) => a*b;
// module.exports.dividir = (a,b) => a/b;
// ----------------------------------------------------------------------------------------------------------------------
//Require
//Para importar un módulo de Node.js se utiliza require()

//Importar el módulo 'path' en Node.js
// const path = require('path');

//El método path busca módulos en el sgte orden:
// 1.Módulos internos de Node.js
// 2.Archivos locales en el proyecto
// 3.Paquetes en la carpeta node_modules.




//Ejemplo de uso con un módulo local

//Importar el módulo 'math'
const math = require ('./math');

//Usar las funciones del módulo 'math'
const resultado1 = math.multiplicar(5,3)
console.log(resultado1);

const resultado2 = math.dividir(10,2);
console.log(resultado2);    

// ------------------------------------------------------------------------------------------------------

//Tambien es posible usar destructuracion
const {multiplicar, dividir } = require('./math');

const resultado3 = multiplicar(3,5);
console.log(resultado3);

const resultado4 = dividir (20,2);
console.log(resultado4);

// ---------------------------------------------------------------------------------------------------------
//Exportaciones nombradas
// Se puede exportar múltiples variables o funciones desde un mismo archivo.
// Ejemplo mathOperaciones.mjs
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

const operaciones = {
    multiplicar,
    dividir
};

export default operaciones;
// ----------------------------------------
// Import 
// Para importar módulos en ES6, se utiliza import.
//  Ejemplo: script.mjs, lo de abajo necesito quitarle las dobles barras ("//")



// Lo de abajo hay que quitar las barras dobles(//)


// import operaciones from './math.mjs';

// const resultado1 = operaciones.multiplicar(5, 3);
// console.log(resultado1); // Salida: 15

// const resultado2 = operaciones.dividir(10, 2);
// console.log(resultado2); // Salida: 5
// También es posible importar solo elementos específicos:

// import { multiplicar, dividir } from './mathOperaciones.mjs';

// const resultado1 = multiplicar(5, 3);
// console.log(resultado1); // Salida: 15

// const resultado2 = dividir(10, 4);
// console.log(resultado2); // Salida: 2.5



