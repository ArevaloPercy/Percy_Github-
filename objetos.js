var hamburguesa = ["lechuga", "tomate", "cebolla", "pepinillos"] //arreglos 

var hamburguesa = { //objetos
    pan: "pan de hamburguesa",
    carne: "carne de res",
    queso: "cheddar",
    ingredientes: ["lechuga", "tomate", "cebolla", "pepinillos"]
};

var hamburguesaClasica = {
    "pan": "pan de hamburguesa",
    "carne": "carne de res",
    "queso": "cheddar",
    "extras": ["lechuga", "tomate", "cebolla", "pepinillos"]
};

console.log("Pan: " + hamburguesaClasica.pan);
console.log("Carne: " + hamburguesaClasica.carne);
console.log("Queso: " + hamburguesaClasica.queso);
console.log("Extras: " + hamburguesaClasica.extras);
console.log(hamburguesaClasica['queso']);


var hamburguesaClasica = {
    "pan": "pan con semillas de sésamo",
    "carne": "carne de res 100%",
    "queso": "queso cheddar",
    "extras": ["lechuga", "tomate", "cebolla", "salsa especial"],
    "infoHamburguesa": function() {
        console.log("Pan: " + this.pan);
        console.log("Carne: " + this.carne);
        console.log("Queso: " + this.queso);
        console.log("Extras: " + this.extras.join(", "));
    }
}

// Ahora, con solo una línea, ¡podemos obtener todos los detalles de nuestra hamburguesa clásica!
hamburguesaClasica.infoHamburguesa();







//This
//Los objetos de JavaScript son nuestros amigos cuando queremos evitar repetirnos una y otra vez 
// con los mismos nombres de variable. Pero a veces, necesitamos una palabra mágica para hacerlo bien. 
// ¡Esa palabra es ‘this’!

var hamburguesaEspecial = {
    "pan": "pan de hamburguesa",
    "carne": "carne de res",
    "queso": "queso americano",
    "extras": ["lechuga", "tomate", "cebolla", "salsa especial"],
    "infoHamburguesa": function() {
        console.log("Pan: " + this.pan);
        console.log("Carne: " + this.carne);
        console.log("Queso: " + this.queso);
        console.log("Extras: " + this.extras.join(", "));
    }
}

// Con 'this', nuestra hamburguesa siempre sabe cómo hablar de sí misma
hamburguesaEspecial.infoHamburguesa(); // Ojo que infoHamburguesa es llamada como a una función


