//Variable ES6
const saludo= "Hola";

//Funcion ES6
const saludarMundo = (nombre) => {
    console.log(`${saludo} ${nombre}`);
}
//Ejecución
saludarMundo("Pianola");

//Literal de objeto ES6
const tonyStark = {
    nombre : "Tony",
    apellido : "Stark",
    edad : 50,
};
// Asignación de propiedades de literales de objeto a variables
const { nombre, apellido, edad } = tonyStark;

// Mostrar propiedades de literales de objeto
console.log(nombre, apellido, edad);

// 🏹 Funciones flecha: Una forma más compacta y legible de escribir funciones.
// 🟢 let y const: Mejor control sobre el alcance de las variables, evitando los problemas de las variables declaradas con var.
// 🧩 Destructuración: Facilita la asignación de propiedades de objetos y arreglos a variables.

// let: Se utiliza para declarar variables cuyo valor puede cambiar dentro de un bloque de código.
// const: Se utiliza para declarar variables cuyo valor no debe cambiar una vez asignado.

const jugador = {
    primero: "Lionel Messi",
    equipo: "Paris Saint-Germain",
    posicion: "Delantero",
};

const { primero, equipo, posicion,} = jugador;

console.log(primero); // "Lionel Messi"
console.log(equipo); // "Paris Saint-Germain"
console.log(posicion); // "Delantero"