//const esta mas para arreglos y objetos
const lista_super = ["Arroz", "Banana"];
lista_super[0] = "pan";
console.log(lista_super);

const info_Card = {
    name : "kevin",
    apellido : "Jacome",
}

console.log(lista_super)

//let
let name = "Kevin";
let apellido = "Artura";
//NO SE PUEDE VOLVER A DECLARAR

name = "arturo"; //se puede mutar
console.log(name);

//const
const name ="Arturo";//No se puede volver a declarar
name= "Kevin"; //No se puede mutar siempre y cuando no sean objetos y arrays.


//el var no es tan bueno..mmm
//al "var" no le importa nada, no es bueno, mejor usar "let" o "const".


//hoisitng
//elevacion, capacidad de algunos elementos de omitir el orden natural..para funciones

//var
console.log(x);
var x = 5;
console.log(x)

//let

console.log(y);
let y = 10;
console.log(y)

//funciones 


example ();
function example () { //funciones naturales funcionan con elevacion
    console.log("Test, hola")
}//funciones básicas si puede funcionar con hoisting

aletando ()
let aletando = () => { //primero declaré y luego la llamé
    console.log("Test, hola")
}//funciones flechas no funcionan con hoisting






//////////SCOPE
//Alcance global= declaro una variable para todo mi código 

let comida= "Arroz con pollo";

function imprimir (){
    console.log(comida)
}

imprimir();


//Alcance local

let comida2 = "Pasta";

function imprimir2 () {
    let comida2 ="Pan de yuca";
    console.log(comida2)

    return comida2
}
//darle salida a alcance local con return


let xy = imprimir2();
    console.log(xy)
    console.log(comida2)



/////
//Ejercicio con var que en algunos casos no respeta el alcance local.

var edad = 25;
console.log(edad);

function envejecer (){
    var edad = 35;
    console.log (edad)

    if(true){
        var edad = 40;
        console.log(edad)
    }
    console.log(edad)
}

envejecer ();
console.log(edad);


///let

let edad = 25;//codigo global
console.log(edad);

function envejecer (){
    let edad = 35;
    console.log (edad)

    if(true){
        let edad = 40;
        console.log(edad)
    }
    console.log(edad)
}

envejecer ();
console.log(edad)


////Destructuracion
const numeros = [1,4,5,6];
let numero1 = numeros[0];
let numero2 = numeros[1];
let numero3 = numeros[2];
let numero4 = numeros[3];

console.log(numero1, numero2, numero3, numero4)


const numeros = [1,4,5,6];
//let [numero1, numero2, numero3, numero4] = numeros;
//console.log (numero1, numero2, numero3, numero4)

let [numero1] = numeros;
console.log(numero1);

let [ , numero2, , ] = numeros;
console.log (numero2)

//modificar la data
const numeros = [1,4,5,6];
let [3];


