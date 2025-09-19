let a = 5;
let b = 3;
let c = 7; /*c == 7, proporciona el error donde esta*/ 

console.log(a + b);
console.log(b - c);
console.log(c * a);

//Uso de console.log
const sumar = (num1, num2) => {
    console.log("Suma de num1 y num2:", num1 + num2); 
    return num1 + nume2;
};
///////////////////////////////////////////////////////////////////
// Ejemplo
const calcularMedia = (num1, num2) => {
    return (num1 + num2) / 2;
};

let numero1 = 5;
let numero2 = 10;

let media = calcularMedia(numero1, numero2);
console.log("La media es: " + media);

//Ejemplo 
/*
const calcularMedia = (num1, num2) => {
    return (num1 + num2) / 2;
};

let numero1 = 5;
let numero2 = 10;

let media = calcularMedia(numero1, numero2);
console.log("La media es: " + media);
*/

for(let i=1; i<=10; i ++){
    console.log(i)
}