import {misDatos} from '../Datos.js';
import {UI} from '../UI.js';
import {Typify} from '../Library/typify.min.js';

const Portada = `
    <div id="Portada" style="height: 40vh;" class="relative w-full finisher-header flex flex-col justify-center items-center gap-4 pt-[5vh] text-white">
        <p id="tituloPortada" class="w-2/3 text-center text-xl text-shadow-lg/20 xs:text-3xl sm:w-6/10 md:w-4/10 md:text-4xl xl:w-3/10 xl:text-5xl"></p>
        <div class="w-2/3 h-[2px] bg-white rounded-full sm:w-6/10 md:w-4/10 xl:w-3/10"></div>
        <p id="projects" class="w-2/3 text-center xs:text-xl sm:w-6/10 sm:text-2xl md:w-4/10 md:text-3xl xl:w-3/10 xl:text-4xl"></p>
    </div>
`;

window.addEventListener('resize', () => {
    const Pagina = window.location.pathname.split("/").pop();
    if (Pagina == "projects.html") efectoGradiente();
});

function nombresProjects(idioma) {
    let lista = [];
    misDatos.proyectos.forEach(project => {
        lista.push(project.titulo[idioma]);
    });
    return lista;
}

export function generarProjects() {
    document.getElementById("app").outerHTML = `
        <div id="app" class="flex flex-col justify-center items-center">
            ${Portada}
        </div>
    `;
}

export function llenarProjects(idioma) {
    document.getElementById("tituloPortada").innerText = UI.titulos.projects[idioma];

    document.getElementById("projects").innerHTML = `<span id="nombres"></span>`;
    Typify('#nombres', {
        text: nombresProjects(idioma),
        delay: 80,
        loop: true,
        cursor: true,
        stringDelay: 500 
    });

    efectoGradiente();
}

function efectoGradiente() {
    const screenSize = window.innerWidth;
    let size = 0;
    let speed = 0;

    if (screenSize >= 1536) { size = 1600; speed = 5; } 
    else if (screenSize >= 1280) { size = 1400; speed = 5; } 
    else if (screenSize >= 1024) { size = 1200; speed = 5; } 
    else if (screenSize >= 768) { size = 1000; speed = 4; } 
    else if (screenSize >= 640) { size = 800; speed = 4; } 
    else if (screenSize >= 384) { size = 700; speed = 3; } 
    else { size = 600; speed = 2; }

    new FinisherHeader({
        "count": 4,
        "size": {
            "min": size,
            "max": size,
            "pulse": 1
        },
        "speed": {
            "x": {
                "min": speed,
                "max": speed
            },
            "y": {
                "min": speed,
                "max": speed
            }
        },
        "colors": {
            "background": "#373d20",
            "particles": [
                "#766153",
                "#717744"
            ]
        },
        "blending": "lighten",
        "opacity": {
            "center": 0.75,
            "edge": 0
        },
        "skew": 0,
        "shapes": [
            "c"
        ]
    });
}