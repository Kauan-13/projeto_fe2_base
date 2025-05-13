import { criarElemento } from "../util.js";
import formulario from "./formulario.js";
import titulo from "./titulo.js";
const principal = () => {
    const registros = [{
            nome: "Zé lelé",
            email: "ze@lele",
            senha: "123"
        },
        {
            nome: "Rosinha",
            email: "rosa@maria",
            senha: "coracao"
        }];
    const main = criarElemento("main", "");
    main.appendChild(titulo);
    const listaRegistro = criarElemento("ul");
    const adicionarRegistro = (registro) => {
        registros.push(registro);
        renderizarRegistros();
    };
    const renderizarRegistros = () => {
        listaRegistro.innerHTML = "";
        registros.forEach(registro => {
            const item = criarElemento("li");
            item.innerHTML = `${registro.nome} - ${registro.email}`;
            listaRegistro.appendChild(item);
        });
        main.prepend(listaRegistro);
    };
    renderizarRegistros();
    main.appendChild(formulario(adicionarRegistro));
    return main;
};
export default principal;
