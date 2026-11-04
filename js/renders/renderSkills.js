import {misDatos} from '../Datos.js';
import {UI} from '../UI.js';
import {Typify} from '../Library/typify.min.js';
let resizeTimer;

const Portada = `
    <div id="Portada" style="height: 40vh;" class="relative w-full finisher-header flex flex-col justify-center items-center gap-4 pt-[5vh] text-white">
        <p id="tituloPortada" class="w-2/3 text-center text-xl text-shadow-lg/20 xs:text-3xl sm:w-6/10 md:w-4/10 md:text-4xl xl:w-3/10 xl:text-5xl"></p>
        <div class="w-2/3 h-[2px] bg-white rounded-full sm:w-6/10 md:w-4/10 xl:w-3/10"></div>
        <p id="skills" class="w-2/3 text-center xs:text-xl sm:w-6/10 sm:text-2xl md:w-4/10 md:text-3xl xl:w-3/10 xl:text-4xl"></p>
    </div>
`;

const Skills = `
    <div id="Skills" class="bg-[#EFF1ED] w-full min-h-[60vh] flex flex-col gap-4 px-[5vw] py-8 lg:px-[10vw] xl:px-[15vw]">
        ${generarMallaSkills()}
    </div>
`;

window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);

    resizeTimer = setTimeout(() => {
        const container = document.getElementById('Skills');

        if (container) container.innerHTML = generarMallaSkills();
        
        const Pagina = window.location.pathname.split("/").pop();

        if (Pagina == "skills.html") {
            const headerPortada = document.getElementById('Portada');

            if (headerPortada) {
                const oldCanvas = headerPortada.querySelector('canvas');
                if (oldCanvas) oldCanvas.remove();
            }

            efectoGradiente();
        }
    }, 250);
});

function nombresSkills() {
    let lista = [];
    misDatos.conocimientos.forEach(skill => {
        lista.push(skill.nombre);
    });
    return lista;
}

function generarMallaSkills() {
    let skills = "";
    let index = 0;
    let patronIndex = 0;
    let patron;
    const screenSize = window.innerWidth;

    if (screenSize >= 1536) { patron = [8, 7]; } 
    else if (screenSize >= 1280) { patron = [7, 6]; } 
    else if (screenSize >= 1024) { patron = [6, 5]; } 
    else if (screenSize >= 768) { patron = [6, 5]; } 
    else if (screenSize >= 640) { patron = [5, 4]; } 
    else if (screenSize >= 384) { patron = [4, 3]; } 
    else { patron = [3, 2]; }

    while (index < misDatos.conocimientos.length) {
        const filaItems = misDatos.conocimientos.slice(index, index + patron[patronIndex % 2]);
        
        skills += '<div class="flex flex-wrap justify-center gap-4">';
        
        filaItems.forEach(skill => {
            skills += `
                <div class="w-[20vw] h-[20vw] group relative flex items-center justify-center rounded-full border border-[#373D20] hover:bg-[#373D20]
                            md:border-2 xs:w-[18vw] xs:h-[18vw] sm:w-[15vw] sm:h-[15vw] md:w-[12vw] md:h-[12vw] lg:w-[10vw] lg:h-[10vw] xl:w-[7.5vw] xl:h-[7.5vw]">
                    <img src="${skill.img}" alt="${skill.nombre}" class="w-1/2 h-1/2 object-contain transition-all duration-500 select-none group-hover:opacity-0 group-hover:scale-0">
                                
                    <span class="absolute p-[2vw] z-10 opacity-0 transition-all duration-500 select-none font-bold text-center break-all leading-tight text-white text-[2.5vw] group-hover:opacity-100
                                 sm:text-[2vw] md:p-[1.5vw] md:text-[1.5vw] lg:p-[1vw] xl:text-[1vw]">
                        ${skill.nombre}
                    </span>
                </div>
            `;
        });
        
        skills += '</div>';
        index += patron[patronIndex % 2];
        patronIndex++;
    }

    return skills;
}

export function generarSkills() {
    document.getElementById("app").outerHTML = `
        <div id="app" class="flex flex-col justify-center items-center">
            ${Portada}
            ${Skills}
        </div>
    `;
}

export function llenarSkills(idioma) {
    document.getElementById("tituloPortada").innerText = UI.titulos.skills[idioma];

    document.getElementById("skills").innerHTML = `<span id="nombres"></span>`;
    Typify('#nombres', {
        text: nombresSkills(),
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