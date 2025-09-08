var userData = ["Lewis", "Hamilton", "l.hamilton@oficina.com"];//agregar
userData.push("piloto");
console.log(userData);

var userData = ["Lewis", "Hamilton", "l.hamilton@oficina.com", "piloto"];//eliminar lo último
userData.pop();
console.log(userData);

var userData = ["Lewis", "Hamilton", "l.hamilton@oficina.com", "piloto"];//actualizar
userData[3] = "Fotógrafo";
console.log(userData);

var userData = ["Lewis", "Hamilton", "l.hamilton@oficina.com", "piloto"];
console.log(userData.length); //Tenemos 4 datos

var userData = ["Lewis", "Hamilton", "l.hamilton@oficina.com", "piloto"];
userData.pop();
console.log(userData.length); //Nos quedan 3 datos

//Desafios con arreglos

//Siempre aburrido: Imagina que tienes un arreglo lleno de actividades por hacer. ¡Pero solo estás interesado en la televisión! 
//Escribe una función que revise este arreglo. Si encuentra ver TV, grita “¡Entretenido!” 
//Pero si no, simplemente dile al mundo “¡Estoy Aburrido!”

function siempreAburrido(arreglo) {
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] === "ver TV") {
            console.log("¡Entretenido!");
        }    
        else {
            console.log("¡Estoy Aburrido!");
        }
    }

}

siempreAburrido(["cantar", "correr", "salir", "ver TV"]);


// Número de corte: Ahora, imagina que tienes un montón de números, pero solo quieres los más pequeños.
//  Escribe otra función que tome un arreglo y un número de corte. Esta función debería devolver un nuevo arreglo 
// que contenga solo los números que son más pequeños que este valor de corte.

function numeroDeCorte(arreglo, valorCorte) {
    let resultado = [];
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] < valorCorte) {
            resultado.push(arreglo[i]);
        }
    }
    return resultado;
}

console.log(numeroDeCorte([1, 2, 8, 4, 5, 7, 6], 4)); // Salida: [1, 2]


//Peor que el promedio: A veces, quieres saber qué tan por debajo de la media estás. 
// Escribe una función que tome un arreglo de números 
// y te diga cuántos de esos números son menores que el promedio de todos los números.

function numerosBajoPromedio(arreglo) {
    let total = 0;
    for (let i = 0; i < arreglo.length; i++) {
        total += arreglo[i];
    }
    const promedio = total / arreglo.length;
    let numerosBajoPromedio = [];
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] < promedio) {
            numerosBajoPromedio.push(arreglo[i]);
        }
    }
    return numerosBajoPromedio;
}

// Ejemplo de uso
console.log(numerosBajoPromedio([1, 20, 3, 4, 15, 6, 27])); 


//Conteo de Pares: ¡Te apuesto que nunca te has preguntado cuántos números pares hay en un arreglo! Esta será la primera vez. 
// Escribe una función llamada conteoPares que tome un arreglo de números como argumento y devuelva la cantidad de elementos pares que contiene.

function conteoPares(arreglo) {
    let contador = 0;
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] % 2 === 0) {
            contador++;
        }
    }
    return contador;
}

// Ejemplo de uso
console.log(conteoPares([1, 2, 3, 4, 5, 6, 10, 11, 13, 14, 16, 18]));


//Arreglo de Fibonacci: ¡Aquí viene un clásico! Los números de Fibonacci son como una secuencia mágica que puedes encontrar en muchas partes.
//Escribe una función que genere un arreglo de números de Fibonacci.
//¡Recuerda decirle cuántos números quieres en tu secuencia o de lo contrario será un loop infinito! Cada número en la secuencia es la suma de los dos números anteriores.

function arregloDeFibonacci(n) {
    const fibonacci = [0, 1];
    for (let i = 2; i < n; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
    return fibonacci;
}

// Ejemplo de uso
console.log(arregloDeFibonacci(30));
