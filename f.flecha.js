// Comprender la sintaxis y características de las funciones flecha.

// Diferenciar entre funciones tradicionales y funciones flecha.

// Analizar el comportamiento del contexto this en funciones flecha.

// Aplicar funciones flecha en escenarios comunes.



// Funcion tradicional
function calcularArea(radio) {
    return Math.PI * radio * radio;
};


// Equivalente usando funcion flecha
const calcularArea = (radio) => Math.PI * radio * radio;

// 📏 Sintaxis concisa ,No es necesario escribir la palabra clave function. La sintaxis es más compacta:
const suma = (a, b) => a + b;


//////////////////////////////////////
// 🔄 Retorno implícito

// Si la función consta de una sola expresión, return y las llaves {} pueden omitirse:

const resta = (a, b) => a - b;
// 💡 Ejemplo con map:

const nombres = ["Ana", "Beto", "Carlos"];
const nombresEnMayusculas = nombres.map(nombre => nombre.toUpperCase());
// eSi la función requiere múltiples líneas, se deben usar llaves y return explícito.

/////////////////////////////////////////////
//👤 Manejo de this

// Las funciones flecha heredan el contexto de this del entorno donde fueron definidas, evitando problemas comunes en el uso de this dentro de callbacks:

class Persona {
    constructor(nombre) {
        this.nombre = nombre;
        this.decirNombre = () => console.log(this.nombre);
    }
}

const persona = new Persona("Elena");
persona.decirNombre(); // Imprime "Elena"
//////////////////////////////////////////////////////////////
//🚫 No tienen arguments

// Las funciones flecha no cuentan con el objeto arguments. En su lugar, se pueden utilizar parámetros Rest:

const sumar = (...numeros) => numeros.reduce((total, num) => total + num, 0);

console.log(sumar(1, 2, 3, 4)); // Imprime 10
//////////////////////////////////////////////////////////////
// 🧱 No pueden ser utilizadas como constructoras

// Las funciones flecha no pueden ser instanciadas con new:

const Foo = () => {};
// const foo = new Foo(); // Esto generaría un error

