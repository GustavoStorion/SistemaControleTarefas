const { json } = require("body-parser")
const { application } = require("express")

async function listarTarefas() {
    const resposta = await fetch('http://localhost:3000/tarefas')
    const tarefas = await resposta.json()
    const lista = document.getElementById('lista-tarefas')
    lista.innerHTML = ''
    tarefas.forEach(tarefa => {
        const item = document.createElement('li')
        item.textContent = tarefa.descricao
        lista.appendChild(item)
    })
}

async function adicionarTarefa() {
    const descricao = document.getElementById('descricao').value
    await fetch('http://localhost:3000/tarefas', {
        method: 'POST',
        headers: {
            'Content-Type': application/json
        },
        body: JSON.stringify({descricao})
    })
    listarTarefas()
}

listarTarefas()