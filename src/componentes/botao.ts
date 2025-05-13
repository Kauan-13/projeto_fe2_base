import { criarElemento } from "../util.js"

class Botao {

    private elemento: HTMLButtonElement;

    constructor(texto: string, tipo?: "submit" | "button" | "reset") {
        this.elemento = criarElemento("button", texto) as HTMLButtonElement;
        this.elemento.type = tipo || "button";
    }

    public getElement(): HTMLButtonElement {
        return this.elemento;
    }
}

export default Botao;