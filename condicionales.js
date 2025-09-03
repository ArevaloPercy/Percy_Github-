//Booleanos son como pequeños interruptores (verdadero y falso)
//Operadores de comparación, ayudarán a comparar valores y tomar desiciones en nuestro código.
//If, else if y else
//Operador logico  AND (&&), Operador logico OR(||), permite combinar condiciones y crear reglas mas complejas.


//Booleanos, solo puede tener los sgtes valores, verdadero y falso
//Declarando booleanos
var esLunes = true;
var esFinDeSemana = false;

//Operadores de comparación
var número = 10;
console.log(número > 5); //Imprimirá "true"

var edad = 20;
console.log(edad >= 18); //Imprimirá "true"

//Operadores que devuelven un booleano
//a==b verdadero si a es igual a b
//a!=b verdadero si a no es igual a b
//a<b verdadero si a es menor que b 
//a>b verdadero si a es mayor que b 
//a>=b verdadero si a es menor o igual que b
//a<=b verdadero si a es mayor o igual que b


//Condicionales
var esDeDia = true;
var esDeNoche = false;

if (esDeDia) {
    console.log("!Explora el mundo")
}
if (esDeNoche) {
    console.log("!Anda a dormir")
}
if (esDeDia == true) {
    console.log("Además, ¡usa una gorra!");//Otra forma de escribir condicionales
}

//Else y Else if
var mascota = "perro";

if (mascota == "perro") {
    console.log("!Tienes un amigo peludo¡")
}
if (mascota != "perro") {
    console.log("!Tienes un compañero misterioso¡")
}


var clima = "lluvioso";

if (clima == "soleado") {
    console.log("¡Es un día perfecto para un picnic!");
}else if(clima == "lluvioso") {
    console.log("¡Hora de saltar en charcos!");
} else {
    console.log("¡Vamos a tirarnos en trineo en la nieve!");
}

var temperatura = 25;
var estáLloviendo = false;

if(temperatura >= 20) {
    if (!estáLloviendo){
        console.log("¡Este es un buen día para dar un paseo!");
    }
}

var temperatura = 25;
var estáLloviendo = false;

if (temperatura >= 20 && !estáLloviendo){
    console.log("¡Este es un buen día para dar un paseo!");
}

//Par o Impar (%)
//Si divido algo y sobra residuo entonces es impar sino sobra es par, ejm 500/2 es 250 entonces 500 es par, 5/2 sobra 1 entonces es impar.
var resultado = 78%3;
console.log(resultado);//Imprime 0, entonces 78 es par

var resultado = 100%3;
console.log(resultado);