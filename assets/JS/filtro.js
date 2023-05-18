document.querySelector("#filtrar_pendentes").addEventListener("click", () =>{
    let tarefasFiltradas = tarefas.filter(tarefa => !tarefa.concluida)
    filtrar(tarefasFiltradas)
})
document.querySelector("#filtrar_concluidas").addEventListener("click", () =>{
    let tarefasFiltradas = tarefas.filter(tarefa =>tarefa.concluida)
    filtrar(tarefasFiltradas)
})
document.querySelector("#busca").addEventListener("keyup", () =>{
    let busca = document.querySelector("#busca").value
    
    let tarefasFiltradas = tarefas.filter(tarefa => tarefa.titulo.toLowerCase().includes(busca.toLowerCase()))
    filtrar(tarefasFiltradas)
})
