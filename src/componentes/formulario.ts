import { criarElemento } from "../util.js"
import entrada from "./entrada.js"
import Botao from "./botao.js"
import { Registro } from "./principal.js"

const formulario = (adicionarRegistro: (registro: Registro) => void) => {

    const form = criarElemento('form', 'formulario') as HTMLFormElement;

    form.appendChild(entrada("Nome: ", "text", "digite seu nome"));

    form.appendChild(entrada("Email: ", "email", "digite seu email"));

    form.appendChild(entrada("Senha: ", "password", "digite sua senha"));

    const btLimpar = new Botao("Limpar", "reset").getElement();
    form.appendChild(btLimpar);

    const btEnviar = new Botao("Enviar", "submit").getElement();
    form.appendChild(btEnviar);

    form.addEventListener("submit", e => {
        e.preventDefault();
        const nome = form[0] as HTMLInputElement;
        const email = form[1] as HTMLInputElement;
        const senha = form[2] as HTMLInputElement;

        const registro: Registro = {
            nome: nome.value,
            email: email.value,
            senha: senha.value,
        }

        adicionarRegistro(registro);
    })

    return form;
}

export default formulario;