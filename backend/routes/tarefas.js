import express from 'express'
import Tarefa from '../models/Tarefa.js'

const router = express.Router()

// Criar nova tarefa
router.post('/', async(req, res) => {
    try{ 
    const novaTarefa = new Tarefa(req.body)
    await novaTarefa.save()
    res.status(201).send(novaTarefa)
    } catch(error){
        res.status(400).json({error: error.message})
    }
})

// Listar tarefas
router.get('/', async(req,res)=> {
    const tarefas = await Tarefa.find()
    res.send(tarefas)
})

// Marcar tarefa como concluída 
router.put('/:id', async(req,res) => {
    const tarefa = await Tarefa.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.send(tarefa)
})

//Deletar tarefa
router.delete('/:id', async(req, res) =>{
    await Tarefa.findByIdAndDelete(req.params.id)
    res.status(204).send()
})

export default router 