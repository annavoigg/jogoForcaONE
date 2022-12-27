let palavrasAdicionadas = document.getElementById("palavrasAdicionadas")

let bancoDePalavras = document.getElementById("bancoDePalavras");

let bancoPronto = [];

// botão OK
function adicionaBancoPalavra() {

    listaPalavras.push(novaPalavra.value);
    
    let id = proximoId();

    localStorage.setItem("id", id);
    localStorage.setItem(id, novaPalavra.value);

    bancoDePalavras.innerHTML = recuperaPalavra.replaceAll(",", "\n");

    window.location.href = 'palavraAdicionadaSucesso.html'
}

function proximoId() {

    let proximoId = localStorage.getItem("id");

    if(proximoId == null){
        proximoId = 0;
    }

    return parseInt(proximoId)+1;

}
