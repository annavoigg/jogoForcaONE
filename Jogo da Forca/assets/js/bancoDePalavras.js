let palavrasAdicionadas = document.getElementById("palavrasAdicionadas")

let bancoDePalavras = document.getElementById("bancoDePalavras");

function adicionaBancoPalavra() {


    listaPalavras.push(novaPalavra.value);

    localStorage.setItem("novaPalavra", listaPalavras);

}


