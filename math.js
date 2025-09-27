//Definicion de funciones
const multiplicar =(a,b) => a*b;
const dividir = (a,b) => a/b;

//1.Exportar las funciones, esto es clave para exportar las funciones fuera del archivo
module.exports = {
    multiplicar,
    dividir
};

//2.Tambien es posible exportar directamente cada funcion
module.exports.multiplicar = (a,b) => a*b;
module.exports.dividir = (a,b) => a/b;//si le quito esto sigue funcionando el export
