import {misDatos} from '../Datos.js';
import {UI} from '../UI.js';
import {Typify} from '../Library/typify.min.js';
let resizeTimer;

const Portada = `
    <div id="Portada" style="height: 40vh;" class="relative w-full finisher-header flex flex-col justify-center items-center gap-4 pt-[5vh] text-white">
        <p id="tituloPortada" class="w-2/3 text-center text-xl text-shadow-lg/20 xs:text-3xl sm:w-6/10 md:w-4/10 md:text-4xl xl:w-3/10 xl:text-5xl"></p>
        <div class="w-2/3 h-[2px] bg-white rounded-full sm:w-6/10 md:w-4/10 xl:w-3/10"></div>
        <p id="projects" class="w-2/3 text-center xs:text-xl sm:w-6/10 sm:text-2xl md:w-4/10 md:text-3xl xl:w-3/10 xl:text-4xl"></p>
    </div>
`;

const Projects = `
    <style>
        @keyframes glowing {
            0% { background-position: 0 0; }
            50% { background-position: 400% 0; }
            100% { background-position: 0 0; }
        }
        .animate-glowing {
            animation: glowing 20s linear infinite;
        }
    </style>

    <div class="bg-[#EFF1ED] flex flex-col justify-center items-center group/proyecto">
        ${generarListaProjects()}
    </div>
`;

window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);

    resizeTimer = setTimeout(() => {
        const Pagina = window.location.pathname.split("/").pop();

        if (Pagina == "projects.html") {
            const headerPortada = document.getElementById('Portada');

            if (headerPortada) {
                const oldCanvas = headerPortada.querySelector('canvas');
                if (oldCanvas) oldCanvas.remove();
            }

            efectoGradiente();
        }
    }, 250);
});

function nombresProjects(idioma) {
    let lista = [];
    misDatos.proyectos.forEach(project => {
        lista.push(project.titulo[idioma]);
    });
    return lista;
}

function generarListaProjects() {
    let projects = "";
    let count = 0;
    let order = ["order-1", "order-2"];
    let items = ["items-start", "items-end"];
    const gradientStyle = "background: linear-gradient(45deg, #373D20, #717744, #BCBD8B, #766153); background-size: 400%;";

    misDatos.proyectos.forEach(proyecto => {
            projects += `
                <div class="flex flex-col justify-center items-center gap-4 px-[5vw] py-4 sm:px-[10vw] sm:py-6 md:px-[15vw] md:py-8 lg:px-[5vw] lg:flex-row lg:items-start xl:px-[10vw] xl:py-12">
                    <a href="${proyecto.link}" target="_blank" class="relative block group/link shrink-0 xs:w-[90%] lg:w-[40vw] lg:${order[0]}">
                        <div class="absolute -inset-2 rounded-lg blur opacity-0 group-hover/link:opacity-100 transition duration-500 animate-glowing z-0"
                             style="${gradientStyle}">
                        </div>

                        <img src="${proyecto.img}" class="relative w-full rounded-lg z-10 bg-[#EFF1ED] block shadow-sm">
                    </a>

                    <div class="flex flex-col justify-center items-center gap-2 lg:gap-4 lg:${items[0]} lg:${order[1]}">
                        <h2 id="tituloProyecto${count}" class="text-lg font-bold xs:text-xl sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl"></h2>
                        <p class="w-fit text-sm font-semibold text-white bg-[#766153] px-2 py-0.5 rounded sm:text-base md:text-lg xl:text-xl 2xl:text-2xl">${proyecto.fecha}</p>
                        <p id="descProyecto${count}" class="leading-relaxed text-justify xs:text-lg sm:text-xl xl:text-2xl 2xl:text-4xl"></p>
                    </div>
                </div>

                <div class="w-[90vw] h-[1px] bg-[#373D20]/50 last:hidden sm:w-[80vw] md:w-[70vw] lg:w-[90vw] xl:w-[80vw]"></div>
            `;
        
            count++;
            order.reverse();
            items.reverse();
    });
    
    return projects;
}

export function generarProjects() {
    document.getElementById("app").outerHTML = `
        <div id="app" class="flex flex-col justify-center items-center">
            ${Portada}
            ${Projects}
        </div>
    `;
}

export function llenarProjects(idioma) {
    document.getElementById("tituloPortada").innerText = UI.titulos.projects[idioma];

    let count = 0;
    misDatos.proyectos.forEach(proyecto => {
        document.getElementById("tituloProyecto" + count).innerText = proyecto.titulo[idioma];
        document.getElementById("descProyecto" + count).innerText = proyecto.desc[idioma];
        count++;
    });

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