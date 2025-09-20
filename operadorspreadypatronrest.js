//Clonación de objetos y arreglos-Cloning of objects and arrangements
//El operador spread permite realizar  copias de objetos y arreglos de forma sencilla-Spread operator allows you to easily make copies of objects and arrays.

const objetoInicial = {nombre:'Mario', edad : 30};
const objetoNuevo = {...objetoInicial, ubicacion : 'Tokio'};

console.log(objetoNuevo);//En este ejemplo, objetoNuevo copia las propiedades de objetoInicial y agrega una nueva propiedad ubicacion.



//Combinacion de arreglos-Combinations of arrangements
//Se puede fusionar multiples arreglos en uno solo con facilidad.
const primerArreglo = [1,2];
const segundoArreglo = [3,4];
const tercerArreglo = [5,6];
const combinado = [...primerArreglo, ...segundoArreglo, ...tercerArreglo];

console.log(combinado);//[1,2,3,4,5,6]

//Uso en funciones
// Use of functions-The spread operator allows elements of an array to be passed as individual arguments to a functions.
//El operador spread permite pasar elementos de un arreglo como argumentos individuales a una función.

const calcularArea = ( largo, ancho, alto ) => largo * ancho * alto;
const dimensiones = [5, 3, 2];
const volumen = calcularArea(...dimensiones);
console.log(volumen); //30

//Copias superficiales y profundas
//El operador spread genera copias superficiales, lo que implica que los cambios en propiedades anidadas afectan al original.

const auto = {
    marca: 'Toyota',
    modelo: 'Corolla',
    año: 2020,
    detalles : {color:'azul', combustible: 'gasolina'}
};
//const autoCopia = {...auto};
//autoCopia.detalles.color = 'rojo';

//console.log(auto.detalles. color); //'rojo' se modificó el original



const autoCopiaProfunda = {
    ...auto,
    detalles: {...auto.detalles}
};

autoCopiaProfunda.detalles.color = 'verde';
console.log(auto.detalles.color);//'azul' ( el original permanece intacto)

//////////////////
// Captura de parámetros en funciones
//El operador rest (...) permite manejar funciones con un número variable de argumentos.
const sumar = (...numeros) => numeros.reduce((total,num) => total + num, 0);
console.log(sumar(1,2,3,4,5));

//Uso de la destructuracion de objetos
// El patrón rest también se emplea en la destructuración para capturar el resto de las propiedades en un nuevo objeto.
const persona = {nombre:'ana', edad:28, ciudad:'Barcelona', pais:'España'};
const {nombre, ...resto}= persona;

console.log(nombre); //'Ana'
console.log(resto); //todo lo demás

//El operador spread y el patrón rest son herramientas fundamentales para trabajar con estructuras de datos de manera eficiente
//en JavaScript. Su correcta aplicación permite escribir código más claro, flexible y reutilizable.
//Ejemplo SPREAD(...)-
const Alex = {
    nombre:"Alex",
    apellido:"Benavente",
    edad:21,
    id:12345
};

//1 const copiaAlex = Alex;
//1 copiaAlex.pais = "Chile";

//2 const copiaAlex = {...Alex};
//2 copiaAlex.pais = "Chile";

//3 const copiaAlex = {...Alex, nombre: 'Alejandro'};//Con esto hacemos una copia del original y se sobreescribe Alejandro sobre Alex
//3 copiaAlex.altura= 170; //Con esto aumentamos algun valor

const copiaAlex = {nombre:'Alejandro', ...Alex};//Alex va sobreescribe a Alejandro
copiaAlex.género = "masculino";


console.log(Alex);
console.log(copiaAlex);


//Spread en arreglos
const nombres = ['Alex', 'Alan', 'Roberto', 'Julieta'];

//1 const copiaNombres = [...nombres];
//1 console.log(copiaNombres);

const copiaNombres = ['Alfredo', 'Martha',...nombres, 'Alberto'];
console.log(copiaNombres);


//Operador Rest
const estudiantes = {
    identificador: "Alejandro",
    alias: "Miller",
    edad: 25,
    pais: "Peru"
};

const {identificador, alias, ...RestoPropiedades} = estudiantes;
console.log(identificador);
console.log(alias);
console.log(RestoPropiedades);


const seudonimo = ['Alfredo', 'Martha', 'Alberto', 'Julieta'];

const  [seudo1, seudo2, ...listaRestante] = seudonimo;
console.log(seudo1);
console.log(seudo2);
console.log(listaRestante);








