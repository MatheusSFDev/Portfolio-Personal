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

    <div class="w-full bg-[url(../imgs/fotoPortada.jpeg)] bg-cover bg-center">    
        <div class="flex flex-col justify-center items-center gap-6 h-screen w-full pb-[10vh] bg-black/40 text-white">
            <p id="titulo" class="w-2/3 text-center text-3xl text-shadow-lg/20"></p>
            <div class="w-2/3 h-[2px] bg-white rounded-full"></div>
            <p id="miniDesc" class="w-2/3 text-justify text-xl"></p>

            <div class="absolute bottom-5 flex flex-col items-center gap-2">
                <div class="w-[30px] h-[50px] rounded-full border-2 border-white flex justify-center pt-2 box-border">
                    <div class="w-[4px] h-[4px] bg-white rounded-full animate-scroll"></div>
                </div>
                
                <span id="scroll" class="text-xs font-light tracking-widest opacity-80"></span>
            </div>
        </div>
    </div>
`;

export function generarHome() {
    document.getElementById("app").outerHTML = `
        <div id="app" class="flex flex-col justify-center items-center">
            ${Portada}
        </div>
    `;
}

export function llenarHome(idioma) {
    document.getElementById("titulo").innerHTML = UI.titulos.home[idioma] + `<span id="typify"></span>`;
    document.getElementById("miniDesc").innerHTML = misDatos.miniDesc[idioma];
    document.getElementById("scroll").innerText = UI.paginas.home.scroll[idioma];
    
    const typingText = Typify('#typify', {
        text: misDatos.adjetivosPersonales[idioma],
        delay: 100,
        loop: true,
        cursor: true,
        stringDelay: 1000 
    });
}