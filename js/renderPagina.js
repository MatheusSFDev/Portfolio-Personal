import {generarHeader, generarFooter, llenarHeaderFooter, generarBotonIdiomas} from './renderHeaderFooter.js';
let idioma = localStorage.getItem("lang") || "es";
const Pagina = window.location.pathname.split("/").pop();

function renderPagina() {
    generarHeader();
    generarFooter();

    switch (Pagina) {
        case "home.html" :
            // generar Contenido
            break;
        case "skills.html" :
            // generar Contenido
            break;
        case "projects.html" :
            // generar Contenido
            break;
    }

    generarBotonIdiomas(idioma);
    document.getElementById("cambiarIdioma").addEventListener("click", () => {
        idioma = (idioma == "es") ? "en" : "es";
        localStorage.setItem("lang", idioma);
        generarBotonIdiomas(idioma);
        rellenarPagina();
    });

    rellenarPagina();
}

function rellenarPagina() {
    llenarHeaderFooter(idioma);

    switch (Pagina) {
        case "home.html" :
            // rellenar Home
            break;
        case "skills.html" :
            // rellenar Home
            break;
        case "projects.html" :
            // rellenar Home
            break;
    }
}

renderPagina();