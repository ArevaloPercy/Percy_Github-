document.getElementById("comidaSelect").addEventListener("change", function(){
    elegirComida(this.value);//evento "onchange"
});

function elegirComida(comida){
    alert("¡Has elegido " + comida + "!");
};

var nameTag = document.querySelector("#name-tag");
var nameInput = document.querySelector("#nameInput");

nameInput.addEventListener("input", function() {
    cambiarNombre(this.value);
});

function cambiarNombre(nombre) {
    nameTag.innerText = nombre;
}
