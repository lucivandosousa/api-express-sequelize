const { Matricula } = require("../models")

class MatriculaController {

  static async salvarMatricula(req, res) {
    const data = req.body
    const newMatricula = { ...data, "createdAt": new Date(), "updatedAt": new Date() }

    if (!newMatricula.estudante_id || !newMatricula.curso_id) {
      res
        .status(404)
        .send("Você deve inserir o estudante e/ou curso.")
      return
    }

    await Matricula.create(newMatricula)

    res
      .status(201)
      .send("Matrícula cadastrada.")
  }

  static async buscarMatriculas(req, res) {
    try {
      const matriculas = await Matricula.findAll()
      res
        .status(200)
        .json(matriculas)
    } catch (error) {
      res
        .status(500)
        .send(error)
    }
  }

  static async buscarMatriculaPorID(req, res) {
    const { id } = req.params
    const matricula = await Matricula.findByPk(id)

    if (!matricula) {
      res
        .status(404)
        .send("Matrícula não localizada.")
      return
    }

    res
      .status(200)
      .json(matricula)
  }

  static async atualizarMatricula(req, res) {
    const { id } = req.params
    const data = req.body
    const matricula = await Matricula.findByPk(id)

    if (!matricula) {
      res
        .status(404)
        .send("Matrícula não localizada.")
      return
    }

    await Matricula.update(data, {
      where: {
        id: id
      }
    })

    res
      .status(200)
      .send("Matrícula atualizada.")
  }

  static async deletarMatricula(req, res) {
    const { id } = req.params
    const matricula = await Matricula.findByPk(id)

    if (!matricula) {
      res
        .status(404)
        .send("Matrícula não localizada.")
      return
    }

    await Matricula.destroy({
      where: {
        id: id
      }
    })

    res
      .status(200)
      .send("Matricula excluída.")
  }

}

module.exports = MatriculaController