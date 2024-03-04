const { Curso } = require("../models")

class CursoController {

  static async salvarCurso(req, res) {
    const data = req.body
    const newCurso = { ...data, "createdAt": new Date(), "updatedAt": new Date() }

    if (!newCurso.titulo || !newCurso.descricao) {
      res
        .status(404)
        .send("Você deve inserir o título e/ou descrição do curso.")
      return
    }

    await Curso.create(newCurso)

    res
      .status(201)
      .send("Curso cadastrado.")
  }

  static async buscarCursos(req, res) {
    try {
      const cursos = await Curso.findAll()
      res
        .status(200)
        .json(cursos)
    } catch (error) {
      res
        .status(500)
        .send(error)
    }
  }

  static async buscarCursoPorID(req, res) {
    const { id } = req.params
    const curso = await Curso.findByPk(id)

    if (!curso) {
      res
        .status(404)
        .send("Curso não localizado.")
      return
    }

    res
      .status(200)
      .json(curso)
  }

  static async atualizarCurso(req, res) {
    const { id } = req.params
    const data = req.body
    const curso = await Curso.findByPk(id)

    if (!curso) {
      res
        .status(404)
        .send("Curso não localizado.")
      return
    }

    await Curso.update(data, {
      where: {
        id: id
      }
    })

    res
      .status(200)
      .send("Curso atualizado.")
  }

  static async deletarCurso(req, res) {
    const { id } = req.params
    const curso = await Curso.findByPk(id)

    if (!curso) {
      res
        .status(404)
        .send("Curso não localizado.")
      return
    }

    await Curso.destroy({
      where: {
        id: id
      }
    })

    res
      .status(200)
      .send("Curso excluído.")
  }

}

module.exports = CursoController