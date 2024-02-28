const { Pessoa } = require("../models")

class PessoaController {

  static async salvarPessoa(req, res) {
    const data = req.body
    const newPessoa = { ...data, "createdAt": new Date(), "updatedAt": new Date() }

    if (!newPessoa.nome || !newPessoa.email) {
      res
        .status(404)
        .send("Você deve inserir o nome e/ou email.")
      return
    }

    await Pessoa.create(newPessoa)

    res
      .status(201)
      .send("Pessoa cadastrada.")
  }

  static async buscarPessoas(req, res) {
    try {
      const pessoas = await Pessoa.findAll()
      res
        .status(200)
        .json(pessoas)
    } catch (error) {
      res
        .status(500)
        .send(error)
    }
  }

  static async buscarPessoaPorID(req, res) {
    const { id } = req.params
    const pessoa = await Pessoa.findByPk(id)

    if (!pessoa) {
      res
        .status(404)
        .send("Pessoa não localizada.")
      return
    }

    res
      .status(200)
      .json(pessoa)
  }

  static async atualizarPessoa(req, res) {
    const { id } = req.params
    const data = req.body
    const pessoa = await Pessoa.findByPk(id)

    if (!pessoa) {
      res
        .status(404)
        .send("Pessoa não localizada.")
      return
    }

    await Pessoa.update(data, {
      where: {
        id: id
      }
    })

    res
      .status(200)
      .send("Pessoa atualizada.")
  }

  static async deletarPessoa(req, res) {
    const { id } = req.params
    const pessoa = await Pessoa.findByPk(id)

    if (!pessoa) {
      res
        .status(404)
        .send("Pessoa não localizada.")
      return
    }

    await Pessoa.destroy({
      where: {
        id: id
      }
    })

    res
      .status(200)
      .send("Pessoa excluída.")
  }

}

module.exports = PessoaController