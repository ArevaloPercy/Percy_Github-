//Dentro de un arreglo puedes guardar/poner: números, palabras, verdadero o falso, incluso otros arreglos.
//Cada arreglo tiene su propia dirección y para acceder a ellos usamos números llamados "índices", que comienzan de 0.
//Si quieres saber cuantos elementos hay en tu arreglo, echa un vistazo a su propiedad .length.
//Agregar un elemento .push() y quitas con .pop()


//Entonces, si queremos acceder al valor de la primera compra, solo tenemos que usar el número 0 como índice. ¡Veamos un ejemplo!
console.log("El costo de la primera compra: " + comprasSemanaFeb15[0]);

var númeroDeCompras = comprasSemanaFeb15.lenght; //Nos dice cuantos valores hay en nuestro arreglo.

//Entonces, si quieres saber cuánto gastaste en tu última compra, revisemos:
var valorÚltimaCompra = comprasSemanaFeb15[númeroDeCompras - 1];
console.log("El costo de la última compra: $" + valorÚltimaCompra);

//¿Y qué tal si queremos calcular lo que gastamos en toda la semana? Ir compra por compra sería tremendamente tedioso: ¿Qué te parece si ocupamos un bucle para hacer el cálculo?
var total = 0;
for(var i = 0; i < comprasSemanaFeb15.length; i++) {
    total += comprasSemanaFeb15[i];
}
console.log("El gasto total fue: $" + total);
//En este código, creamos una variable llamada total y la iniciamos en $0.00. Luego, usamos un bucle for para recorrer cada compra en nuestro arreglo. ¿Cómo? El bucle empieza desde el índice 0 y continúa hasta que llega al último índice del arreglo.

//Dentro del bucle, cada valor de compra se suma al total usando el operador +=. ¡Y voilà! Al final, tendrás el total de tus gastos en la semana.


