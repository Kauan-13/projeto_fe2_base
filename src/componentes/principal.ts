import { criarElemento } from "../util.js"
import formulario from "./formulario.js";
import titulo from "./titulo.js";

export interface Registro {
    nome: string;
    email: string;
    senha: string;
}

const principal = () => {

    const registros: Registro[] = [{
        nome: "Zé lelé",
        email: "ze@lele",
        senha: "123"
    },
    {
        nome: "Rosinha",
        email: "rosa@maria",
        senha: "coracao"
    }];

    const main = criarElemento("main", "") as HTMLDivElement;
    main.appendChild(titulo);

    const listaRegistro = criarElemento("ul") as HTMLUListElement;

    const adicionarRegistro = (registro: Registro) => {
        registros.push(registro);
        renderizarRegistros();
    }

    const renderizarRegistros = () => {
        listaRegistro.innerHTML = "";
        registros.forEach(registro => {
            const item = criarElemento("li") as HTMLLIElement;
            item.innerHTML = `${registro.nome} - ${registro.email}`;
            listaRegistro.appendChild(item);
        })
        main.prepend(listaRegistro);
    }

    renderizarRegistros();
    main.appendChild(formulario(adicionarRegistro));

    return main;
}

export default principal;