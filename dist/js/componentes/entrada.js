import { criarElemento } from "../util.js";
import rotulo from "./rotulo.js";
const entrada = (texto, tipo = "text", placeholder = "") => {
    const container = criarElemento('div');
    const input = criarElemento('input');
    input.placeholder = placeholder;
    input.type = tipo;
    input.id = Math.random().toString(36).substring(2, 15);
    const rotuloElemento = rotulo(texto);
    rotuloElemento.htmlFor = input.id;
    container.appendChild(rotuloElemento);
    container.appendChild(input);
    return container;
};
export default entrada;
