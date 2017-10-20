if (localStorage.usuarios) {
    var botao = document.querySelector("#botao");
    botao.innerText = localStorage.usuario;
} else {
    alert("não autorizado!");
}