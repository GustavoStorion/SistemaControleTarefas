require('dotenv').config
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const tarefasRoutes = require('./routes/tarefas')

const app = express()
const port = process.env.PORT || 3000

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Banco conectado'))
    .catch(err => console.log(err))

app.use(cors())
app.use(bodyParser.json())
app.use('/tarefas', tarefasRoutes)

app.listen(port, () => {
    console.log('Servidor rodando em http://localhost:${port}')
})

