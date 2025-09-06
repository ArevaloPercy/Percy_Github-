console.log("My JS is up")
let generox = document.querySelector('#genero');

function inicio_de_sesion (input) {
    alert ("Inicio de sesión exitoso")
}

function genero (input) {
    generox.innerText = input.innerText;

}

function rentar (input) {
    input.innerText = "No Disponible";
    input.style.background = "red";
    input.style.color = "white";
}