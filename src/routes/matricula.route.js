const { Router } = require("express")
const MatriculaController = require("../controllers/MatriculaController")

const matriculaRoute = Router()

matriculaRoute.post("/matriculas", MatriculaController.salvarMatricula)
matriculaRoute.get("/matriculas", MatriculaController.buscarMatriculas)
matriculaRoute.get("/matriculas/:id", MatriculaController.buscarMatriculaPorID)
matriculaRoute.put("/matriculas/:id", MatriculaController.atualizarMatricula)
matriculaRoute.delete("/matriculas/:id", MatriculaController.deletarMatricula)

module.exports = matriculaRoute