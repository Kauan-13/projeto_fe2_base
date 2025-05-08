import { criarElemento } from "../util.js"

const rotulo = (texto: string) => {
    const label = criarElemento("label", texto);
    return label;
}

export default rotulo;