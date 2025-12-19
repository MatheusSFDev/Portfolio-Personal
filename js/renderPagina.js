import {generarHeader, generarFooter, llenarHeaderFooter, generarBotonIdiomas} from './renders/renderHeaderFooter.js';
import {generarHome, llenarHome} from './renders/renderHome.js';
import {generarSkills, llenarSkills} from './renders/renderSkills.js';
import {generarProjects, llenarProjects} from './renders/renderProjects.js';
let idioma = localStorage.getItem("lang") || "es";
const Pagina = window.location.pathname.split("/").pop();

function renderPagina() {
    generarHeader();
    generarFooter();
    document.documentElement.style.scrollBehavior = 'smooth';

    switch (Pagina) {
        case "home.html" :
            generarHome();
            break;
        case "skills.html" :
            generarSkills();
            break;
        case "projects.html" :
            generarProjects();
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
            llenarHome(idioma);
            break;
        case "skills.html" :
            llenarSkills(idioma);
            break;
        case "projects.html" :
            llenarProjects(idioma);
            break;
    }
}

renderPagina();