function criarTopico() {
    document.getElementById("display").style.display = "none";
    document.getElementById("enviado").style.display = "none";
    document.getElementById("comentario").style.display = "flex";
}

function enviar() {
    document.getElementById("comentario").style.display = "none";
    document.getElementById("enviado").style.display = "block";
}

function verMais() {
    document.getElementById("expandido").style.display = "block";
    document.getElementById("retraido").style.display = "none";
}