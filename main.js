const displayValorSuperior = document.getElementById('valor-superior');
const displayValorInferior = document.getElementById("valor-inferior");
const botonesNumeros = document.querySelectorAll(".numero");
const botonesOperadores = document.querySelectorAll(".operador");
 
const display = new Display(displayValorSuperior, displayValorInferior); 

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
    });

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
});
