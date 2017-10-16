var botao = document.getElementById("botao");
var modal = document.getElementById("modal");
var fundo = document.getElementById("fundo");
var botaoFechar = document.getElementById("botaoFechar");

botao.onclick = function () {
    fundo.classList.add("visivel");
}

botaoFechar.onclick = function () {
    fundo.classList.remove("visivel");
    console.log(botaoFechar);
}

fundo.onclick = function (e) {
    if (e.target == fundo) {
        fundo.classList.remove("visivel");
    }
}


