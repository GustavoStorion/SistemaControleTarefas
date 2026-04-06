const express = require ('express')
const router = express.Router()
const Tarefa = require('../models/Tarefa')

// Criar nova tarefa
router.post('/', async(req, res) => {
    const novaTarefa = newTarefa(req.body)
    await novaTarefa.save()
    res.status(201).send(novaTarefa)
})

// Listar tarefas
router.get('/', async(req,res)=> {
    const tarefa = await Tarefa.find()
    res.send(tarefas)
})

// Marcar tarefa como concluída 
router.put('/:id', async(req,res) => {
    const tarefa = await Tarefa.findByIdAndUpdate(req.params.id, reqbody, {new: true})
    res.send(tarefa)
})

//Deletar tarefa
router.delete('/:id', async(req, res) =>{
    await Tarefa.findByIdAndDelete(req.params.id)
    res.status(204).send()
})

module.exports = router 