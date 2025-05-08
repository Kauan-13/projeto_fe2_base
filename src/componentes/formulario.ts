import { criarElemento } from "../util.js"
import entrada from "./entrada.js"

const formulario = criarElemento('form', 'formulario');
formulario.appendChild(entrada("Nome: ", "text", "digite seu nome"));
formulario.appendChild(entrada("Email: ", "email", "digite seu email"));
formulario.appendChild(entrada("Senha: ", "password", "digite sua senha"));

export default formulario;