const express = require("express")
const pessoaRoute = require("./pessoa.route.js")
const categoriaRoute = require("./categoria.route.js")
const cursoRoute = require("./curso.route.js")
const matriculaRoute = require("./matricula.route.js")

module.exports = {
  pessoaRoute,
  categoriaRoute,
  cursoRoute,
  matriculaRoute
}