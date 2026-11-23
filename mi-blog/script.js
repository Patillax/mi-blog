
// 1. CAMBIAR ENTRE MODO CLARO Y OSCURO

const botonTema = document.getElementById("botonTema");

botonTema.addEventListener("click", function() {

    document.body.classList.toggle("modo-oscuro");

    if (document.body.classList.contains("modo-oscuro")) {
        botonTema.textContent = "Cambiar modo claro";
    } else {
        botonTema.textContent = "Cambiar modo oscuro";
    }

});


// 2. CONTADOR DE VISITAS DURANTE LA SESIÓN

let visitas = sessionStorage.getItem("visitas");

if (visitas === null) {
    visitas = 1;
} else {
    visitas = Number(visitas) + 1;
}

sessionStorage.setItem("visitas", visitas);

document.getElementById("contador").textContent =
    "Visitas durante esta sesión: " + visitas;


// 3. MOSTRAR Y OCULTAR EL TEXTO DE LAS ENTRADAS

const botonesLeer = document.querySelectorAll(".botonLeer");

botonesLeer.forEach(function(boton) {

    boton.addEventListener("click", function() {

        const entrada = boton.parentElement;

        const texto = entrada.querySelector(".contenido");

        texto.classList.toggle("oculto");

        if (texto.classList.contains("oculto")) {
            boton.textContent = "Leer más";
        } else {
            boton.textContent = "Ocultar texto";
        }

    });

});
