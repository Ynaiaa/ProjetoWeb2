document.querySelector("#salvar").addEventListener("click", cadastrar);


function cadastrar(){
    const titulo = document.querySelector("#titulo").value;
    const autor = document.querySelector("#autor").value;
    const Classificação = document.querySelector("#Classificação").value;
    const genero = document.querySelector("#genero").value;
    const descrição = document.querySelector("#descrição").value;

    const tarefa = { 
        titulo,
        autor,
        Classificação,
        descrição,
        genero
    }

    document.querySelector("#tarefas").innerHTML += criarCard(tarefa);
}

function apagar(botao){
    console.log(botao);
    botao.parentNode.parentNode.parentNode.remove();
}

function criarCard(tarefa){
    const card = `  
    <div class="col-lg-3 col-md-6 col-sm-12">
        <div class="card">
            <div class="card-header">
                ${tarefa.titulo}
            </div>
            <div class="card-body">
                <p class="card-text">${tarefa.descrição}.</p>
                <p class="card-text">${tarefa.genero}</p>
                <span class="badge text-bg-warning">+${tarefa.Classificação}</span>
            </div>
            <div class="card-footer">
                <a href="#" class="btn btn-success" title="marcar como concluída">
                    <i class="bi bi-check2"></i>
                </a>
                <a href="#" onClick="apagar(this)" class="btn btn-danger" title="apagar tarefa">
                    <i class="bi bi-trash3"></i>
                </a>
            </div>  <!-- card footer -->
            <div class="input-image">
                <input type="file" class="form-control" id="inputGroupFile02">
                <label class="card-text" for="inputGroupFile02">Upload</label>
            </div>
        </div> <!-- card -->
    </div> <!-- col -->

`
return card;
}