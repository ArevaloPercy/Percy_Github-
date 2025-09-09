//function nombreFuncion {
// código de mi función
//} 

function saludar() {//aqui lo que hará será buscar el código de la función pero no ejecuta
    console.log("¡Hola, amigo!");
}
saludar();//con esto estamos llamando a la función y recién la ejecuta no lo hace antes. //llamando o invocando funciones.


//Agregando parámetros
function saludar(nombreAmigo) {
    console.log("¡Hola, amigo,", nombreAmigo, "!");
}
saludar("Luis");

//#Return
//Acá tenemos la función con las instrucciones

function encontrarMaximo(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

//Valor de los dos números a comparar
var numero1 = 10;
var numero2 = 7;
//Llamamos a la función y le pasamos los números
//var maximo recibe el número mayor
var maximo = encontrarMaximo(numero1, numero2);
console.log("El máximo entre", numero1, "y", numero2, "es:", maximo);

//ejm
var numero1 = 10;
var numero2 = 20;
function encontrarMaximo(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
var maximo = encontrarMaximo(numero1,numero2);
console.log(maximo);

