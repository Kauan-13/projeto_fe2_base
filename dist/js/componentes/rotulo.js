import { criarElemento } from "../util.js";
const rotulo = (texto) => {
    const label = criarElemento("label", texto);
    return label;
};
export default rotulo;
