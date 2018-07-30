var audio = document.querySelector("audio");
var botaoPlay = document.querySelector(".botao-play");

botaoPlay.onclick = function () {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

audio.onplay = function () {
    console.log("deu play");
}

audio.onpause = function () {
    console.log("deu pause");
}

audio.onloadeddata = function () {
    var duracaoTotal = Math.round(audio.duration);
    var spanTempoTotal = document.querySelector(".duracao");
    spanTempoTotal.innerText = duracaoTotal;
    spanTempoTotal.innerText = formatSecondsAsTime(audio.duration);
}

audio.ontimeupdate = function () {
    if (audio.play) {
        var porcentagem = (audio.currentTime / audio.duration) * 100;
        var tocado = document.querySelector(".tocado").style.width = porcentagem + "%";

        var duracaoAtual = Math.round(audio.currentTime);
        var spanTempoAtual = document.querySelector(".tempo-atual");
        spanTempoAtual.innerText = duracaoAtual;

        spanTempoAtual.innerText = formatSecondsAsTime(audio.currentTime);

    }
}
function formatSecondsAsTime(secs, format) {
    var hr = Math.floor(secs / 3600);
    var min = Math.floor((secs - (hr * 3600)) / 60);
    var sec = Math.floor(secs - (hr * 3600) - (min * 60));

    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }
    return min + ':' + sec;
}

// OPÇÃO PARA CÁLCULO DE TEMPO

// var data = new Date(2017, 0, 1);
// data.setSeconds(duracaoAtual);

// spanTempoAtual.innerText = data.getMinutes().toString().padStart(2, "0") + ":" + data.getSeconds().toString().padStart(2, "0");
