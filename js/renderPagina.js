import {generarHeader, generarFooter, llenarHeaderFooter, generarBotonIdiomas} from './renderHeaderFooter.js';
let idioma = localStorage.getItem("lang") || "es";
const Pagina = window.location.pathname.split("/");

function renderPagina() {
    switch (Pagina[Pagina.length-1]) {
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
    switch (Pagina[Pagina.length-1]) {
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