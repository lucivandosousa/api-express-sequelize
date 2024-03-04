const { Router } = require("express")
const PessoaController = require("../controllers/PessoaController.js")

const pessoaRoute = Router()

pessoaRoute.post("/pessoas", PessoaController.salvarPessoa)
pessoaRoute.get("/pessoas", PessoaController.buscarPessoas)
pessoaRoute.get("/pessoas/:id", PessoaController.buscarPessoaPorID)
pessoaRoute.put("/pessoas/:id", PessoaController.atualizarPessoa)
pessoaRoute.delete("/pessoas/:id", PessoaController.deletarPessoa)
pessoaRoute.get("/pessoas/:id/matriculas", PessoaController.buscarMatriculas)

module.exports = pessoaRoute