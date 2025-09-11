const boton = document.getElementById('miBoton');

boton.addEventListener('mouseover', function() {
console.log('El ratón está sobre el botón');
});

boton.addEventListener('mouseout', function() {
console.log('El ratón ha salido del botón');
});

boton.addEventListener('click', function() {
    alert('Se ha hecho click');//Muestra un cuadro de texto con el mensaje
});