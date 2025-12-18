import {misDatos} from '../Datos.js';
import {UI} from '../UI.js';
import {Typify} from '../Library/typify.min.js';

const Portada = `
    <style>
        @keyframes scroll-down {
            0% { transform: translateY(0); opacity: 1; }
            100% { transform: translateY(25px); opacity: 0; }
        }
        .animate-scroll {
            animation: scroll-down 1.5s infinite;
        }
    </style>

    <div id="Portada" class="w-full bg-[url(../imgs/fotoPortada.jpeg)] bg-cover bg-center md:bg-left">    
        <div class="flex flex-col justify-center items-center gap-6 h-screen w-full pb-[10vh] bg-black/40 text-white">
            <p id="tituloPortada" class="w-2/3 text-center text-xl text-shadow-lg/20 xs:text-3xl sm:w-6/10 md:w-4/10 md:text-4xl"></p>
            <div class="w-2/3 h-[2px] bg-white rounded-full sm:w-6/10 md:w-4/10"></div>
            <p id="miniDesc" class="w-2/3 text-justify xs:text-lg sm:w-6/10 sm:text-xl md:w-4/10 md:text-2xl"></p>

            <div class="absolute bottom-5 flex flex-col items-center gap-2">
                <div class="w-[30px] h-[50px] rounded-full border-2 border-white flex justify-center pt-2 box-border">
                    <div class="w-[4px] h-[4px] bg-white rounded-full animate-scroll"></div>
                </div>
                
                <span id="scroll" class="text-xs font-light tracking-widest opacity-80 sm:text-sm"></span>
            </div>
        </div>
    </div>
`;

const SobreMi = `
    <div class="w-full py-8 bg-[#EFF1ED] flex flex-col justify-center items-center md:px-[15vw]">
        <h1 id="tituloSobre" class="text-center text-xl font-medium px-6 mb-4 xs:text-3xl md:text-4xl"></h1>
        <div class="w-6/10 h-[3px] rounded-full bg-[#373D20] mb-6 md:w-[70vw]"></div>

        <div>
            <img src="${misDatos.fotoPerfil}" class="w-4/10 rounded-r-full float-left mr-4 mb-4 shadow-xl shadow-[#373D20]/25 border-y border-r border-[#373D20] md:rounded-full md:border">
            <p id="descPersonal" class="text-justify px-8 xs:text-lg sm:text-xl md:text-2xl md:px-0 md:pt-2"></p>
        </div>
    </div>
`;

const expLaboral = `
    <div class="w-full py-8 bg-[#EFF1ED] flex flex-col justify-center items-center md:px-[15vw]">
        <h1 id="tituloExpLaboral" class="text-center text-xl font-medium px-6 mb-4 xs:text-3xl md:text-4xl"></h1>
        <div class="w-6/10 h-[3px] rounded-full bg-[#373D20] mb-6 md:w-[70vw]"></div>

        <div class="w-full pr-8 md:p-0">
            ${generarExpLab()}
        </div>
    </div>
`;

const Estudios = `
    <div class="w-full py-8 bg-[#EFF1ED] flex flex-col justify-center items-center md:px-[15vw]">
        <h1 id="tituloEstudios" class="text-center text-xl font-medium px-6 mb-4 xs:text-3xl md:text-4xl""></h1>
        <div class="w-6/10 h-[3px] rounded-full bg-[#373D20] mb-6 md:w-[70vw]"></div>

        <div class="w-full pl-8 md:p-0">
            ${generarEstudios()}
        </div>
    </div>
`;

function generarExpLab() {
    let html = ""; 
    let count = 1;

    misDatos.experienciaLaboral.forEach(exp => {
        html += `
            <div class="relative pl-[30vw] pb-8 group last:pb-0 sm:pl-[25vw]">
                <img src="${exp.img}" alt="${exp.nombre}" class="absolute left-0 top-0 w-[25vw] h-[25vw] object-cover rounded-y-full rounded-r-full border border-[#373D20] shadow-xl shadow-[#373D20]/25 z-10 bg-[#EFF1ED] text-xs sm:w-[20vw] sm:h-[20vw] md:rounded-full">
                <div class="absolute left-[10vw] top-0 bottom-0 w-[1px] bg-[#373D20] group-last:hidden sm:left-[8vw] md:left-[10vw]"></div>

                <div class="flex flex-col gap-2">         
                    <h3 class="text-lg font-bold xs:text-xl sm:text-2xl md:text-3xl">${exp.nombre}</h3>

                    <span class="w-fit text-sm font-semibold text-white bg-[#766153] px-2 py-0.5 rounded sm:text-base md:text-lg">
                        ${exp.year}
                    </span>
                    
                    <p class="text-sm text-black/80 italic flex items-center gap-1 sm:text-base md:text-lg">
                        <svg class="w-3 h-3 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>

                        <span id="lugarExp${count}" class="w-9/10"></span>
                    </p>
                    
                    <p id="descExp${count}" class="leading-relaxed border-b border-[#373D20]/50 pb-4 text-justify sm:text-lg md:text-xl"></p>
                </div>
            </div>
        `;

        count++;
    });

    return html;
}

function generarEstudios() {
    let html = ""; 
    let count = 1;

    misDatos.estudios.forEach(estudio => {
        html += `
            <div class="relative pr-[30vw] pb-8 group last:pb-0 sm:pr-[25vw]">
                <img src="${estudio.img}" alt="${estudio.nombre}" class="absolute right-0 top-0 w-[25vw] h-[25vw] object-cover rounded-y-full rounded-l-full border border-[#373D20] shadow-xl shadow-[#373D20]/25 z-10 bg-[#EFF1ED] text-xs sm:w-[20vw] sm:h-[20vw] md:rounded-full">
                <div class="absolute right-[10vw] top-0 bottom-0 w-[1px] bg-[#373D20] group-last:hidden sm:right-[8vw] md:right-[10vw]"></div>

                <div class="flex flex-col items-end gap-2">         
                    <h3 id="nombreEstudio${count}" class="text-lg font-bold text-right xs:text-xl sm:text-2xl md:text-3xl"></h3>

                    <span class="w-fit text-sm font-semibold text-white bg-[#766153] px-2 py-0.5 rounded sm:text-base md:text-lg">
                        ${estudio.years}
                    </span>
                    
                    <p class="text-sm text-black/80 italic text-right flex justify-end items-center gap-1 sm:text-base md:text-lg">
                        <span id="lugarEstudio${count}" class="w-9/10"></span>

                        <svg class="w-3 h-3 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                    </p>
                    
                    <p id="descEstudio${count}" class="leading-relaxed border-b border-[#373D20]/50 pb-4 text-justify sm:text-lg md:text-xl"></p>
                </div>
            </div>
        `;

        count++;
    });

    return html;
}

export function generarHome() {
    document.getElementById("app").outerHTML = `
        <div id="app" class="flex flex-col justify-center items-center">
            ${Portada}
            ${SobreMi}
            ${expLaboral}
            ${Estudios}
        </div>
    `;
}

export function llenarHome(idioma) {
    document.getElementById("tituloPortada").innerHTML = UI.titulos.home[idioma] + `<span id="typify"></span>`;
    document.getElementById("miniDesc").innerHTML = misDatos.miniDesc[idioma];
    document.getElementById("scroll").innerText = UI.paginas.home.scroll[idioma];
    document.getElementById("tituloSobre").innerText = UI.paginas.home.tituloSobre[idioma];
    document.getElementById("descPersonal").innerText = misDatos.descPersonal[idioma];
    document.getElementById("tituloExpLaboral").innerText = UI.paginas.home.tituloExpLaboral[idioma];
    document.getElementById("tituloEstudios").innerText = UI.paginas.home.tituloEstudios[idioma];

    let count = 1;
    misDatos.experienciaLaboral.forEach(exp => {
        document.getElementById("lugarExp" + count).innerText = exp.lugar[idioma];
        document.getElementById("descExp" + count).innerText = exp.desc[idioma];
        count++;
    });

    count = 1;
    misDatos.estudios.forEach(estudio => {
        document.getElementById("nombreEstudio" + count).innerText = estudio.nombre[idioma];
        document.getElementById("lugarEstudio" + count).innerText = estudio.lugar[idioma];
        document.getElementById("descEstudio" + count).innerText = estudio.desc[idioma];
        count++;
    });
    
    Typify('#typify', {
        text: misDatos.adjetivosPersonales[idioma],
        delay: 100,
        loop: true,
        cursor: true,
        stringDelay: 1000 
    });
}