const mongoose = require('mongoose')

const tarefaSchema = new mongoose.Schema({
    descricao: {type: String, required: true},
    concluida: {type: Boolean, default: false}
})

module.exports = mongoose.model('Tarefa', tarefaSchema)
