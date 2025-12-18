import {misDatos} from '../Datos.js';
import {UI} from '../UI.js';
import {Typify} from '../Library/typify.min.js';

const Portada = `
    <div style="height: 40vh;" class="relative w-full finisher-header flex flex-col justify-center items-center gap-4 pt-[5vh] text-white">
        <p id="tituloPortada" class="w-2/3 text-center text-xl text-shadow-lg/20 xs:text-3xl sm:w-6/10 md:w-4/10 md:text-4xl xl:w-3/10 xl:text-5xl">Mis Conocimientos</p>
        <div class="w-2/3 h-[2px] bg-white rounded-full sm:w-6/10 md:w-4/10 xl:w-3/10"></div>
        <p id="skills" class="w-2/3 text-center xs:text-xl sm:w-6/10 sm:text-2xl md:w-4/10 md:text-3xl xl:w-3/10 xl:text-4xl"></p>
    </div>
`;

function nombresSkills() {
    let lista = [];
    misDatos.conocimientos.forEach(skill => {
        lista.push(skill.nombre);
    });
    return lista;
}

export function generarSkills() {
    document.getElementById("app").outerHTML = `
        <div id="app" class="flex flex-col justify-center items-center">
            ${Portada}
        </div>
    `;
}

export function llenarSkills(idioma) {
    document.getElementById("tituloPortada").innerText = UI.titulos.skills[idioma];

    Typify('#skills', {
        text: nombresSkills(),
        delay: 80,
        loop: true,
        cursor: true,
        stringDelay: 500 
    });

    new FinisherHeader({
        "count": 4,
        "size": {
            "min": 800,
            "max": 1250,
            "pulse": 1
        },
        "speed": {
            "x": {
            "min": 4,
            "max": 5
            },
            "y": {
            "min": 4,
            "max": 5
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