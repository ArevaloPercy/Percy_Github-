//Funcion anonima guardada en una variable
let elevarAlCuadrado = (numero) => {
    return numero ** 2;
};
console.log(elevarAlCuadrado(4));

// Arreglo de palabras
let palabra = ["Hola", "Mundo", "Open AI"];

//Funcion que convierte todas las palabras a minúsculas
let convertirAMinuscula = (palabra) => palabra.toLowerCase();

//Funcion de mapeo que aplica una funcion dada a cada elemento del arreglo
let mapPalabras = (array, fn) => {
    for (let i=0; i<array.length; i++){
        array[i]= fn(array[i]);
    }
    return array;
};

//Mostrar el resultado de aplicar la funcion de mapeo a las palabras
console.log(mapPalabras(palabra, convertirAMinuscula));

// En este ejemplo, mapPalabras recibe un array y una función (en este caso convertirAMinusculas), 
// que se aplica a cada elemento del array.




//Funcion .map()
//Ayuda a transformar elementos de un array 

//Arreglo de nombres
let nombres = ["Juan", "Maria", "Carlos", "Laura", "Ana"];

//Funcion que devuelve la longitud de cada nombre 
let longitudNombre = (nombres) => nombres.length;

//Aplciar la funcion longitudNombre a cada elemento del arreglo
let longitudes = nombres.map(longitudNombre);

console.log(longitudes); 




//Funcion .filter()
//Ayuda a extraer elementos específicos de un array. 
//Utiliza un callback que devuelve un valor booleano, permitiendo filtrar los eleentos que cumplen 
// con los criterios específicos

//Arreglo de palabras 
let palabras = ["Hola", "Mundo", "OpenAI", "es", "genial"];

//Funcion que filtra las palabras que tienen mas de 3 letras
let masDeTresLetras = (palabras) => palabras.length >3;

//Filtrar las palabras que tienen mas de 3 letras
let palabrasfiltradas = palabras.filter(masDeTresLetras);

console.log(palabrasfiltradas);





//Funcion .forEach()
//Recorre cada elemento de un array y ejecuta una acción en él pero a diferencia de .map() y .filter()
// no crea un nuevo array. Es util cuando deseas ejecutar en efecto secundario en cada elemento del array,
// como imprimir valores o modificar el array original.

//Ejm
let numeros = [1,2,3];

//Imprimir cada elemento en la consola
numeros.forEach((numero)=>{
    console.log(numero);
});
//1,2,3


//Sumar todos los elementos del arreglo
let suma = 0;
numeros.forEach((numero)=>{
    suma+=numero;
});

console.log(suma);




//Funcion .find()
// Permite localizar el primer elemento de un array que cumpla con una condicion especfica.
// Ideal cuando necesitas encontrar con un elemento que cumpla con tus criterios

let numbers = [10,20,30,40,50];

//Funcion que encuentra el primer numero divisible por 3
let divisiblePorTres = (number) => number%3 === 0;

//Encontrar el primer numero divisible por 3
let primerNumeroDivisiblePorTres = numbers.find(divisiblePorTres);

console.log(primerNumeroDivisiblePorTres);



