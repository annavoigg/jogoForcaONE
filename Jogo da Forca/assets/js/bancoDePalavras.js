let palavrasAdicionadas = document.getElementById("palavrasAdicionadas")

let bancoDePalavras = document.getElementById("bancoDePalavras");

let bancoPronto = [];

function adicionaBancoPalavra() {

    listaPalavras.push(novaPalavra.value);

    localStorage.setItem("novaPalavra", listaPalavras);

    bancoDePalavras.innerHTML = recuperaPalavra.replaceAll(",", "\n");
    // return localStorage.value;
}


