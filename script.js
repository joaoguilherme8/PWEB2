function mudarcor(){
    let link = document.getElementById("myLink")
    link.style.color = "red"
}

function atualizar(){
    let att = document.querySelector("h2")
    att.textContent = "Conteúdo Atualizado"
}

function remove(){
    document.querySelector("#content p").remove()
}
function addDiv() {
    let newDiv = document.createElement("div")
    newDiv.id = "newDiv"
    newDiv.textContent = "Este é um novo bloco de conteúdo."
    document.getElementById("content").appendChild(newDiv)
}

function addLinha() {
    let table = document.getElementById("infoTable")
    let novaLinha = "<tr><td>João</td><td>25</td></tr>"
    table.innerHTML += novaLinha
}