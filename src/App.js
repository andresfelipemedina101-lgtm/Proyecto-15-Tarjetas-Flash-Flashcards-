i// Preguntas y respuestas de las tarjetas
// Preguntas y respuestas
const tarjetas = [
    {
        pregunta: "¿Qué es JavaScript?",
        respuesta: "Es un lenguaje de programación que permite agregar interactividad a las páginas web."
    },
    {
        pregunta: "¿Qué es una variable?",
        respuesta: "Es un espacio donde podemos guardar información."
    },
    {
        pregunta: "¿Para qué sirve React?",
        respuesta: "Es una biblioteca de JavaScript que permite crear interfaces de usuario."
    },
    {
        pregunta: "¿Qué es HTML?",
        respuesta: "Es el lenguaje que se utiliza para organizar el contenido de una página web."
    },
    {
        pregunta: "¿Qué es CSS?",
        respuesta: "Es el lenguaje que permite dar estilos y colores a una página web."
    }
];

let numeroActual = 0;
let mostrandoRespuesta = false;

// Función para mostrar las tarjetas
function mostrarTarjeta() {

    let tarjeta = tarjetas[numeroActual];

    document.getElementById("tituloTarjeta").textContent =
        mostrandoRespuesta ? "Respuesta" : "Pregunta";

    document.getElementById("textoTarjeta").textContent =
        mostrandoRespuesta ? tarjeta.respuesta : tarjeta.pregunta;

    document.querySelector(".boton-voltear").textContent =
        mostrandoRespuesta ? "Ver pregunta" : "Mostrar respuesta";

    let progreso = ((numeroActual + 1) / tarjetas.length) * 100;

    document.getElementById("numeroTarjeta").textContent =
        "Tarjeta " + (numeroActual + 1) + " de " + tarjetas.length;

    document.getElementById("porcentaje").textContent =
        Math.round(progreso) + "% completado";

    document.getElementById("avance").style.width = progreso + "%";

    document.getElementById("botonAnterior").disabled =
        numeroActual === 0;

    if (numeroActual === tarjetas.length - 1) {

        document.getElementById("botonSiguiente").textContent =
            "Volver a empezar";

        document.getElementById("mensaje").textContent =
            "¡Has llegado a la última tarjeta!";

    } else {

        document.getElementById("botonSiguiente").textContent =
            "Siguiente";

        document.getElementById("mensaje").textContent = "";
    }
}

// Mostrar la respuesta
window.voltearTarjeta = function() {

    mostrandoRespuesta = !mostrandoRespuesta;
    mostrarTarjeta();

};

// Ir a la siguiente tarjeta
window.siguiente = function() {

    if (numeroActual < tarjetas.length - 1) {
        numeroActual++;
    } else {
        numeroActual = 0;
    }

    mostrandoRespuesta = false;
    mostrarTarjeta();

};

// Regresar a la tarjeta anterior
window.anterior = function() {

    if (numeroActual > 0) {
        numeroActual--;
    }

    mostrandoRespuesta = false;
    mostrarTarjeta();

};

// Iniciar la aplicación
mostrarTarjeta();