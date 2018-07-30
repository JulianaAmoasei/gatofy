var botaoLogin = document.getElementById("botao-login");
var botaoCadastro = document.getElementById("botao-cadastro");
var modal = document.getElementById("modal");
var fundo = document.getElementById("fundo");
var fundoCadastro = document.getElementById("fundo-cadastro");
var botaoFechar = document.getElementById("botao-fechar");
var botaoFecharCadastro = document.getElementById("botao-fechar-cadastro");
var formulario = document.querySelector("form");

botaoLogin.onclick = function() {
    fundo.classList.add("visivel");
}

botaoCadastro.onclick = function() {
    fundoCadastro.classList.add("visivel");
}

botaoFechar.onclick = function() {
    fundo.classList.remove("visivel");
    console.log(botaoFechar);
}

botaoFecharCadastro.onclick = function() {
    fundoCadastro.classList.remove("visivel");
    console.log(botaoFechar);
}

fundo.onclick = function(e) {
    if (e.target == fundo) {
        fundo.classList.remove("visivel");
    }
}

fundoCadastro.onclick = function(e) {
    if (e.target == fundoCadastro) {
        fundoCadastro.classList.remove("visivel");
    }
}

formulario.onsubmit = function() {
    var email = document.getElementById("email");
    var senha = document.querySelector("#senha");
    var modal = document.querySelector("#modal");

    var usuarios = JSON.parse(localStorage.usuarios);
    var correto;
    for (var i = 0; i < usuarios.length; i++) {
        if (usuarios[i].email === email.value && usuarios[i].senha === senha.value) {
            correto = true;
            localStorage.usuario = email.value;
            break;
        }
    }
    if (!correto) {
        modal.classList.add("erro");
        setTimeout(function() {
            modal.classList.remove("erro");
        }, 1000);
        return false;
    }
}

formCadastro.onsubmit = function(e) {
    var nomeCadastro = document.querySelector("#nomeCadastro");
    var emailCadastro = document.querySelector("#emailCadastro");
    var senhaCadastro = document.querySelector("#senhaCadastro");
    var modalCadastro = document.querySelector("#modal-cadastro");
    var usuarios = JSON.parse(localStorage.usuarios || "[]");

    usuarios.push({
        email: emailCadastro.value,
        senha: senhaCadastro.value,
    })

    localStorage.usuarios = JSON.stringify(usuarios);
}
