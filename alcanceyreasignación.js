//Alcance:se refiere a la visibilidad de las variables y funciones en cualquier parte del código.
//En javascript hay 2 tipos de alcances:global y local. 
//En JS el más importante es alcance de función, implica que cada vez que se defina una función
// se crea un nuevo espacio donde las variables existen y se utilizan.



//Ejemplo
// Variable global para contar visitas
let visitas = 0;

// Función para mostrar número de visitas
const mostrarVisitas = () => {
    console.log(`Número de visitas: ${visitas}`);
}

// Función para registrar nueva visita
const nuevaVisita = () => {
    visitas++;
}

// Simulación de visitas
nuevaVisita();//Esto significa que 1 persona ha visitado.
mostrarVisitas(); // Output: Número de visitas: 1



/////////////////////////////////////////////////////////////////////
const contarVisitas = () => {
    let visitas = 0; // Variable local

    const mostrarVisitas = () => {
        console.log(`Número de visitas: ${visitas}`);
    }

    const nuevaVisita = () => {
        visitas++;
    }

    nuevaVisita();//Esto significa una visita
    nuevaVisita();//Esto significa una visita
    nuevaVisita();//Esto significa una visita
    mostrarVisitas(); // Output: Número de visitas: 3
}

contarVisitas(); 

////////////////////////////////////////////////////////////
// Alcance de bloques, ejemplo
if (true) {
    let mensaje = "Hola desde el bloque";
    console.log(mensaje); // Output: Hola desde el bloque
}

// console.log(mensaje); // Error: mensaje no está definido

////////////////////////////////////////////////////////////
// Reasignación con const y let
// 💡 Ejemplo con let

let saldoCuenta = 1000;
let cantidadRetirada = 500;
let saldoRestante = saldoCuenta - cantidadRetirada;
console.log(saldoRestante); // Output: 500

cantidadRetirada = 200;
saldoRestante = saldoCuenta - cantidadRetirada;
console.log(saldoRestante); // Output: 800
//💡 Ejemplo con const
const estudiante = { nombre: 'Ana', curso: 5 };
estudiante.curso = 6; // Se puede modificar el contenido del objeto
console.log(estudiante); // Output: { nombre: 'Ana', curso: 6 }

// estudiante = { nombre: 'Carlos', curso: 4 }; // Error: no se puede reasignar

