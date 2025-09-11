var sandwich = {
    pan: "masa madre",
    proteína: "asado",
    queso: "queso suizo lacey",
    salsas: ["lechuga romana", "tomates reliquia", "salsa de rábano"],
};
    
console.log(sandwich);


//Hacer más sandwiches

function sandwichFactory(pan, proteína, queso, salsas) {
    var sandwich = {};
    sandwich.pan = pan;
    sandwich.proteína = proteína;
    sandwich.queso = queso;
    sandwich.salsas = salsas;
    return sandwich;
}
    
var s1 = sandwichFactory("trigo", "pavo", "provolone", ["mostaza", "cebolla frita", "rúcula"]);
console.log(s1);

//Hacer pizzas-práctica
function pizzaOven(tipoCorteza, tipoSalsa, quesos, salsas) {//cuando no está declarado se pone gris
    var pizza = {
        corteza: tipoCorteza,
        salsa: tipoSalsa,
        queso: quesos,
        salsaAdicional: salsas
    };
    return pizza; //ayuda a que la variable var tenga sentido o algo así jaja
}

//Crear una pizza estilo Chicago
var pizza1 = pizzaOven("estilo Chicago", "tradicional", ["mozzarella"], ["pepperoni", "salchicha"]);
console.log(pizza1);

//Crear una pizza estilo lanzada a mano
var pizza2 = pizzaOven("lanzada a mano", "marinara", ["mozzarella", "feta"], ["champiñones", "aceitunas", "cebollas"]);
console.log(pizza2);