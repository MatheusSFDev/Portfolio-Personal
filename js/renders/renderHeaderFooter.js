import {misDatos} from '../Datos.js';
import {UI} from '../UI.js';
const Pagina = window.location.pathname.split("/").pop().split(".")[0];

export function generarHeader() {
    document.getElementById("header").outerHTML = `
        <header id="header" class="w-full p-2 fixed top-0 flex justify-center items-center">
            <nav class="flex justify-between items-center px-3 py-2 rounded-full bg-[#EFF1ED]/50">
                <a id="nav_home" class="px-2 py-1 rounded-full" href="home.html"></a>
                <a id="nav_skills" class="px-2 py-1 rounded-full" href="skills.html"></a>
                <a id="nav_projects" class="px-2 py-1 rounded-full" href="projects.html"></a>
                <a id="nav_contact" class="px-2 py-1 rounded-full" href="#footer_contact"></a>
            </nav>
        </header>
    `;

    document.getElementById("nav_" + Pagina).classList.add("bg-[#373D20]", "text-white");
}

export function generarFooter() {
    document.getElementById("footer").outerHTML = `
        <footer id="footer" class="flex flex-col justify-center items-center gap-2 p-4 bg-[#766153] text-white relative z-20">
            <div class="flex justify-center items-center w-full text-lg">
                <p id="footer_nombreDev" class="mr-2 text-right font-mono">${misDatos.nombreDev}</p>
                <div class="w-1 h-1 rounded-full bg-white"></div>
                <p class="ml-2">Matheus Souza Fernandes</p>
            </div>

            <p id="footer_contact" class="text-2xl"></p>

            <div id="footer_contactos" class="flex justify-center items-center gap-4">
                ${generarContactos()}
            </div>
        </footer>
    `;
}

function generarContactos() {
    let elementos = "";

    misDatos.contactos.forEach(element => {
        elementos += `<a href="${element.link}" target="_blank"><img src="${element.img}" class="w-10"></a>`;    
    });

    return elementos;
}

export function generarBotonIdiomas(idiomaActual) {
    if (!document.getElementById("cambiarIdioma")) {
        document.body.innerHTML += `<div id="cambiarIdioma" class="fixed bottom-5 right-5 z-10 flex flex-col gap-2"></div>`;
    }

    const claseActiva = "bg-[#373D20] text-white border-[#373D20] shadow-[#373D20]/50";
    const claseInactiva = "bg-white border-[#373D20]";

    document.getElementById("cambiarIdioma").innerHTML = `
        <div class="flex flex-col p-1.5 bg-[#EFF1ED]/75 backdrop-blur-sm rounded-full shadow-xl border border-[#373D20]">
            <button id="btn-es" class="w-10 h-10 rounded-full font-bold text-xs transition-all duration-300 border mb-1 ${idiomaActual === 'es' ? claseActiva : claseInactiva}">ES</button>
            <button id="btn-en" class="w-10 h-10 rounded-full font-bold text-xs transition-all duration-300 border ${idiomaActual === 'en' ? claseActiva : claseInactiva}">EN</button>
        </div>
    `;
}

export function llenarHeaderFooter(idioma) {
    document.getElementById("nav_home").innerHTML = UI.nav.home[idioma];
    document.getElementById("nav_skills").innerHTML = UI.nav.skills[idioma];
    document.getElementById("nav_projects").innerHTML = UI.nav.projects[idioma];
    document.getElementById("nav_contact").innerHTML = UI.nav.contact[idioma];
    document.getElementById("footer_contact").innerHTML = UI.footer.contact[idioma];
    document.title = UI.nav[Pagina][idioma];
}