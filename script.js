var botao = document.getElementById("botao");
var botaoCadastro = document.getElementById("botao-cadastro");
var modal = document.getElementById("modal");
var fundo = document.getElementById("fundo");
var fundoCadastro = document.getElementById("fundo-cadastro");
var botaoFechar = document.getElementById("botaoFechar");
var botaoFecharCadastro = document.getElementById("botaoFechar-cadastro");

botao.onclick = function () {
    fundo.classList.add("visivel");
}

botaoCadastro.onclick = function () {
    fundoCadastro.classList.add("visivel");
}

botaoFechar.onclick = function () {
    fundo.classList.remove("visivel");
    console.log(botaoFechar);
}

botaoFecharCadastro.onclick = function () {
    fundoCadastro.classList.remove("visivel");
    console.log(botaoFechar);
}

fundo.onclick = function (e) {
    if (e.target == fundo) {
        fundo.classList.remove("visivel");
    }
}

fundoCadastro.onclick = function (e) {
    if (e.target == fundoCadastro) {
        fundoCadastro.classList.remove("visivel");
    }
}

// Login

var formulario = document.querySelector("form");

formulario.onsubmit = function () {
    var email = document.getElementById("email");
    var senha = document.querySelector("#senha");
    var modal = document.querySelector("#modal");

    // verifica se o email e senha são permitidos
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
        setTimeout(function () {
            modal.classList.remove("erro");
        }, 1000);
        return false;
    }
}


// Cadastro

// var botaoCadastro = document.getElementById("botaoCadastro");
// var fundoCadastro = document.getElementById("fundoCadastro");
// var fecharCadastro = document.getElementById("fecharCadastro");

// botaoCadastro.onclick = function () {
//     fundoCadastro.classList.add("visivel");
// }

// fundoCadastro.onclick = function (e) {
//     if (e.target == fundoCadastro) {
//         fundoCadastro.classList.remove("visivel");
//     }
// }
// fecharCadastro.onclick = function () {
//     fundoCadastro.classList.remove("visivel");
// }

//seleciona o formulário
var formCadastro = fundoCadastro.querySelector("form");
//Quando for enviar mandar os dados
formCadastro.onsubmit = function (e) {

    //seleciona inputs
    var nomeCadastro = document.querySelector("#nomeCadastro");
    var emailCadastro = document.querySelector("#emailCadastro");
    var senhaCadastro = document.querySelector("#senhaCadastro");

    //seleciona modal
    var modalCadastro = document.querySelector("#modal-cadastro");
    var usuarios = JSON.parse(localStorage.usuarios || "[]");

    usuarios.push({
        email: emailCadastro.value,
        senha: senhaCadastro.value,
    })

    localStorage.usuarios = JSON.stringify(usuarios);
    // return false;

    // localStorage.novoUsuarioNome = nomeCadastro.value;
    // localStorage.novoUsuarioEmail = emailCadastro.value;
    // localStorage.novoUsuarioSenha = senhaCadastro.value;
    // localStorage.setItem = ("email", "admin@admin.com");
    // localStorage.email = "admin@admin.com";

}
