//La inmutabilidad nos permite manejar datos de manera segura y eficiente, lo cual es crucial para
// mantener la integridad de nuestras aplicaciones.


//Object.frezze()
// Cuando declaramos una variable con "const" evitamos que su valor sea reasignado.
// Sin embargo si la variable es un objeto, arreglo aún se puede modificar sus propiedades o elementos.
// Para evitar esto usamos "Object.freeze", que congela un objeto impidiendo cualquier modificacion.

const productos = [
    { id: 1, nombre: 'Camisa', precio: 20 },
    { id: 2, nombre: 'Pantalón', precio: 30 },
    { id: 3, nombre: 'Zapatos', precio: 50 }
];

Object.freeze(productos); // Congelamos el arreglo para evitar cambios
// Intentamos agregar un nuevo producto al arreglo congelado
productos.push({ id: 4, nombre: 'Sombrero', precio: 15 }); // Esto lanzará un error
console.log(productos); // El arreglo sigue siendo el mismo, no se agregó el nuevo producto

//En este caso, al intentar modificar el arreglo productos, se genera un error debido a que está congelado.
//  La inmutabilidad asegura que los datos no cambien accidentalmente.

//Ejemplo
const persona = Object.freeze({ nombre: "Juan", edad: 30 });

persona.edad = 31; // Esto no tendrá ningún efecto, ya que el objeto está congelado

console.log(persona); // Output: { nombre: "Juan", edad: 30 }




//Expandir(Spread), concatenar(Concat) y Cortar(Slice)
// Estas tres técnicas son fundamentales para manipular arreglos sin alterar los datos originales.

// Expandir (Spread): Permite crear una copia de un arreglo y agregar nuevos elementos sin modificar el 
// original.Se utiliza el operador ... para lograrlo.
const listaCanciones = Object.freeze([ //Esta variable no se toca, está congelada
    { "nombre": "Shape of You", "genero": "Pop" },
    { "nombre": "Uptown Funk", "genero": "Funk" },
    { "nombre": "Billie Jean", "genero": "Pop" }
]);

const necesitoNuevaCancion = [...listaCanciones, { "nombre": "Don't Stop Believin'", "genero": "Rock" }];
console.log(necesitoNuevaCancion);//Nueva variable



//Concatenar(Concat): Une dos o más arreglos sin modificar los originales
const otraNuevaCancion = listaCanciones.concat({ "nombre": "Bohemian Rhapsody", "genero": "Rock" });
console.log(otraNuevaCancion);

//Cortar (Slice):Extrae una porción de un arreglo sin modificarlo
const listaRecortada = listaCanciones.slice(0,1);
console.log(listaRecortada);



//Ordenar (Sort)
// La función sort permite ordenar los elementos de un arreglo. Sin embargo, altera el arreglo original. 
// Para evitar modificar el arreglo, utilizamos el operador spread para crear una copia antes de ordenarlo.

const otraListaCanciones = Object.freeze(["Despacito", "Shape of You", "Uptown Funk", "Billie Jean", "Don't Stop Believin'", "Bohemian Rhapsody"]);

const listaOrdenada = [...otraListaCanciones].sort();
console.log(listaOrdenada);


//⚠️ Problemas de orden con números: El método sort convierte los elementos en cadenas de texto, 
// lo que puede generar un orden incorrecto al trabajar con números. 
// Es recomendable usar una función de comparación para solucionar esto.

const numeros = [15, 7, 25, 18, 30, 9];


const listaOrdenadaNumeros = [...numeros].sort((a, b) => a - b);
console.log(listaOrdenadaNumeros); //se ordenarán los numeros [7,9,15,18,25,30]



//Ordenar canciones por nombre
// Cuando trabajamos con objetos dentro de un arreglo, 
// podemos ordenar usando una función de comparación basada en alguna propiedad del objeto.

const listaCancionesOrdenada = [...otraListaCanciones].sort((a, b) => (a.nombre > b.nombre) ? 1 : -1);
console.log(listaCancionesOrdenada);








/////////
const otraotraLista = Object.freeze([
    { nombre: "Despacito" },
    { nombre: "Shape of You" },
    { nombre: "Uptown Funk" },
    { nombre: "Billie Jean" }
]);

const listaOrdenadaCanciones = [...otraotraLista].sort((a, b) =>
    (a.nombre > b.nombre) ? 1 : -1
);
console.log(listaOrdenadaCanciones);


