let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let nomeOk = false
let emailOk = false
let mapa = document.querySelector("#mapa")
function validaNome() {
    let txtNome = document.querySelector("#txtNome")

    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome inválido"
        txtNome.style.color = "red"
        nomeOk = false
    } else {
        txtNome.innerHTML = "Nome válido"
        txtNome.style.color = "green"
        nomeOk = true
    }

}
function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color = "red"
        emailOk = false
    } else {
        txtEmail.innerHTML = "E-mail válido"
        txtEmail.style.color = "green"
        emailOk = true
    }
}
function enviarDados() {
    if (nomeOk == true && emailOk == true && descricaoOk == true) {
        alert("Formulário enviado!")
    } else {
        alert("Preencha o formulário corretamente antes de enviar!")
    }
}

function mapaZoom() {
    mapa.style.width = "800px"
    mapa.style.height = "600px"
}

function mapaNormal() {

    mapa.style.width = "400px"
    mapa.style.height = "250px"

}
