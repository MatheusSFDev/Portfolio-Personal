import {generarHeader, generarFooter, llenarHeaderFooter, generarBotonIdiomas} from './renderHeaderFooter.js';
let idioma = localStorage.getItem("lang") || "es";
const Pagina = window.location.pathname.split("/").pop();

function renderPagina() {
    switch (Pagina) {
        case "home.html" :
            generarHeader();
            // generar Home
            generarFooter();
            break;
        case "" :
            //
            break;
        case "" :
            //
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
    switch (Pagina) {
        case "home.html" :
            llenarHeaderFooter(idioma);
            // rellenar Home
            break;
        case "" :
            //
            break;
        case "" :
            //
            break;
    }
}

renderPagina();