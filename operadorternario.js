//Operador ternario 
//Ejemplo con if else

const obtenerNivelAcceso = (edad) => {
    if(edad<18){
        return 'Acceso restringido';
    } else if (edad <= 65) {
        return 'Acceso completo';
    } else {
        return 'Acceso senior';
    }
};

console.log(obtenerNivelAcceso(30));
console.log(obtenerNivelAcceso(70));

//Ejemplo con operador ternario

const obtenerAcceso = (edad) =>
    edad <18 ? 'Acceso restringido': 
    edad <= 65 ? 'Acceso completo' :
    'Acceso senior';

console.log(obtenerAcceso(30));
console.log(obtenerAcceso(70));


//Ejemplo con múltiples condiciones
// Cuando hay más de dos opciones, se pueden anidar operadores ternarios:

const edad = 70;
const nivelAcceso = edad < 18 ? 
    'Acceso restringido'   
    : edad <= 65 ? 
    'Acceso completo' 
    : 'Acceso senior';

console.log(nivelAcceso);
// Aunque esto es posible, se recomienda usar if-else para mejorar la legibilidad cuando hay muchas condiciones.

