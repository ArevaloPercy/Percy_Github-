//DOM(DOCUMENT OBJECT MODEL)  QUERY SELECTOR
const boton = document.querySelector("#miboton") //selecciono aquí en base a su ID
Ejm
//HTML
//<h1 id = "title">¡Hola mundo!</h1>

//Javascript
var h1 = document.querySelector("h1");
var title = document.querySelector("#title");



//HTML
//<div class="nav">
//    <img src="logo.png" alt="logo">
//    <h1>¡Hola, mundo!</h1>
//</div>


//JAVASCRIPT
var logoImg = document.querySelector(".nav img")
//Ah, pero aquí hay una nota importante: si hay más de un elemento que coincide con tu selector, 
// querySelector solo te devolverá el primero que encuentre. Y si no encuentra ninguno, 
// ¡obtendrás un bonito null en su lugar!

