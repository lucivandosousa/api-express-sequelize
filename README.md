# API de escola de cursos usando Sequelize e SQLite

Esta é uma API construída usando o framework Express.js para Node.js e Sequelize com persistência em um banco relacional SQLite. A API simula operações básicas CRUD (Criar, Ler, Atualizar e Excluir) em um banco relacional.

## Requisitos

- Node.js
- npm (gerenciador de pacotes do Node.js)
- SQLite

## Instalação

### 1. Clone o repositório para sua máquina local:

```
https://github.com/lucivandosousa/api-express-sequelize
```
### 2. Navegue até o diretório do projeto

### 3. Instale as dependências necessárias:

  ```
  npm install
  ```
## Funcionalidades
### 1. Iniciar a API.

Para iniciar a API, execute o seguinte comando:

```
npm run dev
```
A API será executada na porta 3000 por padrão, ou na porta especificada pela variável de ambiente PORT.

### 2. Endpoints (Exemplos)

 - GET "/" Retorna uma mensagem indicando que a API está funcionando.

 - POST "/pessoas" Adiciona uma nova pessoa.

 - GET "/pessoas" Retorna a lista completa de pessoas.

 - GET "/pessoas/:id" Retorna uma pessoa específica com base no ID fornecido.

 - PUT "/pessoas/:id" Atualiza uma pessoa específica com base no ID fornecido.

 - DELETE "/pessoas/:id" Exclui uma pessoa específica com base no ID fornecido.
 
 - GET "/pessoas/:id/matriculas" Retorna a lista de matriculas por aluno

### 3. Exemplo de Uso

Para adicionar uma nova pessoa, você pode enviar uma requisição POST com os dados da pessoa no corpo da requisição:

```
{
    "nome": "string",
    "email": "string",
    "cpf": "string",
    "ativo": true,
    "role": "string"
}
```
