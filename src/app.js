const express = require('express');
const { pessoaRoute } = require('./routes');

const app = express()

app.use(
  express.json(),
  pessoaRoute
)

app.get('/', (req, res) => {
  res.status(200).send({message: 'API com Express e Sequelize'})
})

module.exports = app
