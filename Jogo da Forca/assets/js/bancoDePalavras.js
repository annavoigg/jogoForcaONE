const addPalavraBotao = document.querySelector("[data-inicio-addPalavra]");

let novaPalavra = document.querySelector("[data-input-novaPalavra]");

let sectionInputNovaPalavra = document.getElementById(
  "sectionInputNovaPalavra"
  );

let recuperaPalavra = localStorage.getItem("listaPalavras");

let palavrasAdicionadas = document.getElementById("palavrasAdicionadas")

let bancoDePalavras = document.getElementById("bancoDePalavras");

bancoDePalavras.innerHTML = recuperaPalavra.replaceAll(",", "\n");

// botão OK
function adicionaBancoPalavra() {

    listaPalavras.push(novaPalavra.value);
    
    let id = proximoId();

    localStorage.setItem("id", id);
    localStorage.setItem(id, novaPalavra.value);


    location.reload();
}

function proximoId() {

    let proximoId = localStorage.getItem("id");

    if(proximoId == null){
        proximoId = 0;
    }

    return parseInt(proximoId)+1;

}
