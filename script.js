function inserir(num){
    document.querySelector('.tela').innerHTML += num;
}
function apagar(){
    document.querySelector('.tela').innerHTML = null;
}
function apagar1(){
    let tela = document.querySelector('.tela').innerHTML;
    document.querySelector('.tela').innerHTML = tela.substring(
        0,
        tela.length - 1
    );
}
function somar(){
    let tela = document.querySelector('.tela').innerHTML;
    if(tela){
        document.querySelector('.tela').innerHTML = eval(tela);
    }
    else{
        document.querySelector('.tela').innerHTML = "nenhuma comando";
    }
}