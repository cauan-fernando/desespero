const hora = new Date().getHours();
let mensagem;
let emoji;
let tema;
if (hora < 12) {
    mensagem = "bom dia";
    emoji = "☀️";
    tema = "dia";
} else if (hora < 18) {
    mensagem = "boa tarde";
    emoji = "🌤️";
    tema = "tarde";
} else {
    mensagem = "boa noite";
    emoji = "🌙";
    tema = "noite";
}
console.log(mensagem);
document.body.classList.add(tema);
document.getElementById("emoji").textContent = emoji;
document.getElementById("saida").textContent = mensagem;