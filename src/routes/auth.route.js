import { Router } from "express"; // Importa os tipos de rotas do express por exemplo (POST, GET, DELETE)
const route = Router(); // Cria uma variavel para utilizar o Router() dentro do código

import { login } from "../controllers/auth.controller.js"; // Importa a função de callback desmembrada do login, importamos o login de auth.controller.js e utiizamos ele
route.post("/", login) // Cria um nome de uma rota e utiliza a função de callback importada acima!

export default route; // Exporta a route para outros arquivos .js