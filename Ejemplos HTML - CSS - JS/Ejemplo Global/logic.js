var audio = document.getElementById("audio");
var iniciar = document.getElementById("inicioParar");
var reiniciar = document.getElementById("reiniciar");
var retroceder = document.getElementById("retroceder");
var avanzar = document.getElementById("avanzar");

iniciar.addEventListener("click", () => {
    if (audio.paused || audio.ended) {
        audio.play();
        iniciar.innerHTML = "Parar";
    } else {
        audio.pause();
        iniciar.innerHTML = "Iniciar";
    }
});

reiniciar.addEventListener("click", () => {
    audio.pause();
    audio.currentTime = 0;
    iniciar.innerHTML = "Iniciar";
});

retroceder.addEventListener("click", () => {
    audio.currentTime -= 10;
});

avanzar.addEventListener("click", () => {
    audio.currentTime += 10;
});
