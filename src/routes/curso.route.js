const { Router } = require("express")
const CursoController = require("../controllers/CursoController")

const cursoRoute = Router()

cursoRoute.post("/cursos", CursoController.salvarCurso)
cursoRoute.get("/cursos", CursoController.buscarCursos)
cursoRoute.get("/cursos/:id", CursoController.buscarCursoPorID)
cursoRoute.put("/cursos/:id", CursoController.atualizarCurso)
cursoRoute.delete("/cursos/:id", CursoController.deletarCurso)

module.exports = cursoRoute