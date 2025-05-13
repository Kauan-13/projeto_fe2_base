import { criarElemento } from "../util.js";
import entrada from "./entrada.js";
import Botao from "./botao.js";
const formulario = (adicionarRegistro) => {
    const form = criarElemento('form', 'formulario');
    form.appendChild(entrada("Nome: ", "text", "digite seu nome"));
    form.appendChild(entrada("Email: ", "email", "digite seu email"));
    form.appendChild(entrada("Senha: ", "password", "digite sua senha"));
    const btLimpar = new Botao("Limpar", "reset").getElement();
    form.appendChild(btLimpar);
    const btEnviar = new Botao("Enviar", "submit").getElement();
    form.appendChild(btEnviar);
    form.addEventListener("submit", e => {
        e.preventDefault();
        const nome = form[0];
        const email = form[1];
        const senha = form[2];
        const registro = {
            nome: nome.value,
            email: email.value,
            senha: senha.value,
        };
        adicionarRegistro(registro);
    });
    return form;
};
export default formulario;
