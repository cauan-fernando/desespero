function mensagemquadrado(){
    alert ("voce clicou nisso.");
}
function teclaapertada(event){
    const x = event.key;
    document.getElementById("texto").innerHTML = "teclaapertada: " + x;
}
function mensagem(){
    const tempo = new Date();
    console.log ("oi" + tempo. getHours()+ ":" + tempo.getMinutes() + ":" + tempo.getSeconds());
}