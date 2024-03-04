const { Categoria } = require("../models")

class CategoriaController {

  static async salvarCategoria(req, res) {
    const data = req.body
    const newCategoria = { ...data, "createdAt": new Date(), "updatedAt": new Date() }

    if (!newCategoria.titulo) {
      res
        .status(404)
        .send("Você deve inserir o título da categoria.")
      return
    }

    await Categoria.create(newCategoria)

    res
      .status(201)
      .send("Categoria cadastrada.")
  }

  static async buscarCategorias(req, res) {
    try {
      const categorias = await Categoria.findAll()
      res
        .status(200)
        .json(categorias)
    } catch (error) {
      res
        .status(500)
        .send(error)
    }
  }

  static async buscarCategoriaPorID(req, res) {
    const { id } = req.params
    const categoria = await Categoria.findByPk(id)

    if (!categoria) {
      res
        .status(404)
        .send("Categoria não localizada.")
      return
    }

    res
      .status(200)
      .json(categoria)
  }

  static async atualizarCategoria(req, res) {
    const { id } = req.params
    const data = req.body
    const categoria = await Categoria.findByPk(id)

    if (!categoria) {
      res
        .status(404)
        .send("Categoria não localizada.")
      return
    }

    await Categoria.update(data, {
      where: {
        id: id
      }
    })

    res
      .status(200)
      .send("Categoria atualizada.")
  }

  static async deletarCategoria(req, res) {
    const { id } = req.params
    const categoria = await Categoria.findByPk(id)

    if (!categoria) {
      res
        .status(404)
        .send("Categoria não localizada.")
      return
    }

    await Categoria.destroy({
      where: {
        id: id
      }
    })

    res
      .status(200)
      .send("Categoria excluída.")
  }

}

module.exports = CategoriaController