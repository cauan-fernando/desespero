function diadasemana(){
    const data = new Date();
    const dia = data.getDay();

let mensagem;
switch (dia){
case 0:
    mensagem = "hoje e domingo: e casei de escrever";
    break;
case 1:
    mensagem = "hoje e segunda: e casei de escrever";
    break;
case 2:
    mensagem = "hoje e terça: e casei de escrever";
    break;
case 3:
    mensagem = "hoje e quarta: e casei de escrever";
    break;
case 4:
    mensagem = "hoje e quinta: e casei de escrever";
    break;
case 5:
    mensagem = "hoje e sexta: e casei de escrever";
    break;
default:
    mensagem = "hoje e sabado: e casei de escrever";
}
document.getElementById("demo").innerHTML = mensagem;
}
