//Bucles

for (var i=0; i<3; i++) {
    console.log(i); //bucle for
}

for(var i=10; i > 0; i--) {
    console.log(i); // contar hacia atrás
}

var i=0;//bucle while, llega un número antes del elegido en este caso 2
while (i <4) {
    console.log(i);
    i++;
}

var i=10;
while (i > 3) {
    console.log(i);//cuenta hacia atrás
    i--;
}

var inicio = 0;
var fin = 10;
while (inicio <= fin){
    console.log("inicio: " + inicio + ", fin: " + fin);
    inicio++;
    fin--;
}//Debemos de tener una condición de salida clara para evitar bucles infinitos


var x = 0;
for(var i=1; i<=5; i++){
    x+=i*2;
}

//FIZZBUZZ
for (let i = 1; i <= 20; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

//EJERCICIOS BUCLES

var i=0;
for(var i=1 ; i <= 30; i +=2){
    console.log(i)
}

var i= 100;
for (var i=100; i >= 4; i -=4){//multiplos de 4 con for "for"
    console.log(i);
}

for (var i=100; i >= 0; i --){//multiplos de 4 con "if"
    if(i % 4 === 0){
        console.log(i);
    }
}

for(var i= 10; i >= -5 ; i -=3){
    console.log(i);
}

let suma = 0; //sumar números pares
for(var i=2; i<=50; i += 2){
    console.log(i);
    suma += i;
}

console.log("La suma de los pares es: " + suma);

let multiplicacion = 1;
for (var i = 1; i <= 20; i++){
    console.log(i);
    multiplicacion *= i;
}
console.log("La multiplicación es: " + multiplicacion);


//let multiplicacion = 1n; // Ojo: el "n" convierte a BigInt, eso para números mas grandes

for (let i = 1n; i <= 20n; i++) {
    multiplicacion *= i;
}

console.log("El factorial de 20 es: " + multiplicacion);

//Se usa 1n en lugar de 1 para que sea BigInt.

//El contador i también se declara como 1n y se incrementa con i++ (o i += 1n).

//La multiplicación se hace entre BigInt, así no hay riesgo de Infinity.