// Efecto de escritura letra por letra
const textos = [
    "<Bienvenido a mi Portafolio/>",
    "<Ing. Moises Silva Gonzalez/>",
    "Web Developer | Technical Support"
];

const velocidadEscritura = 100; // Velocidad en milisegundos
const elementos = [
    document.getElementById("bienvenido"),
    document.getElementById("nombre"),
    document.getElementById("profesion")
];

function escribirTexto(elemento, texto, callback) {
    let i = 0;
    const intervalo = setInterval(() => {
        if (i < texto.length) {
            elemento.innerHTML += texto.charAt(i);
            i++;
        } else {
            clearInterval(intervalo);
            if (callback) callback();
        }
    }, velocidadEscritura);
}

function iniciarEfecto() {
    escribirTexto(elementos[0], textos[0], () => {
        escribirTexto(elementos[1], textos[1], () => {
            escribirTexto(elementos[2], textos[2]);
        });
    });
}

// Iniciar el efecto cuando la página cargue
window.onload = iniciarEfecto;
