//Variables 
// son cajas donde guardamos cosas y las cambiamos cuando queramos
//Tambien podemos crear cajas, darle nombre y no guardar nada en ella por el momento, quedará como undefined.
//Puedes convertir un número en palabras o al revés.
var edad = 50;
var apellido = "Santos";
var meGustaJS = true;
edad = "Treinta y dos";

//Operadores
//Son simbolos matematicos que puedes usar en JS, ejm (=), significa para decirle a JS que ponga algo dentro de la caja.
var total = 13 -7;//Esto nos dará 6 pero no se muestra si no usamos un console.log(total)
console.log(total);
var total ="seis";//también le podemos poner un valor numérico y luego lo cambiamos por un texto
console.log(total);

var nombre = "Juan";//texto en doble comillas
var edad = 25;//número sin comillas
console.log("!Hola," + " " + nombre + " " + "!Tienes" + " " + edad + " " + "años.");

var answer = 2+4*10;
console.log(answer);
var answer2 = (2+4)*10;
console.log(answer2)
var answer3 = 5 * 3 + 10 / 2-1;
console.log(answer3);

//Operaciones combinadas
var total = 10;
total += 5; //equivalente a total = total + 5;
console.log(total);

var mensaje ="¡Hola, ";
mensaje +="mundo!"; //ahora el mensaje es ¡Hola mundo!
console.log(mensaje)

//Mas ejemplos

//suma combinada
var suma = 8;
suma +=2;// resultado :10
console.log(suma);

//resta combinada
var resta = 15;
resta -= 7;//resultado:8
console.log(resta);

//multiplicacion combinada
var multiplicacion = 10;
multiplicacion *=5;
console.log(multiplicacion);

//division combinada
var division = 20;
division /=4;
console.log(division);

//Tipos 
//Hay diferentes tipo de datos como numeros, palabras y verdadero/falso.