const express = require('express');
const { 
  pessoaRoute,
  categoriaRoute,
  cursoRoute,
  matriculaRoute
} = require('./routes');

const app = express()

app.use(
  express.json(),
  pessoaRoute,
  categoriaRoute,
  cursoRoute,
  matriculaRoute
)

app.get('/', (req, res) => {
  res.status(200).send({message: 'API com Express e Sequelize'})
})

module.exports = app
