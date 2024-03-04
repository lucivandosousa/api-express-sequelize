const { Router } = require("express")
const CategoriaController = require("../controllers/CategoriaController")

const categoriaRoute = Router()

categoriaRoute.post("/categorias", CategoriaController.salvarCategoria)
categoriaRoute.get("/categorias", CategoriaController.buscarCategorias)
categoriaRoute.get("/categorias/:id", CategoriaController.buscarCategoriaPorID)
categoriaRoute.put("/categorias/:id", CategoriaController.atualizarCategoria)
categoriaRoute.delete("/categorias/:id", CategoriaController.deletarCategoria)

module.exports = categoriaRoute