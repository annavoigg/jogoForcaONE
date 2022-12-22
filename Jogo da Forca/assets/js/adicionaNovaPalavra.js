const addPalavraBotao = document.querySelector("[data-inicio-addPalavra]");

let novaPalavra = document.querySelector("[data-input-novaPalavra]");

let sectionInputNovaPalavra = document.getElementById(
  "sectionInputNovaPalavra"
);

function adicionaPalavra() {
  listaPalavras.push(novaPalavra.value);

  localStorage.setItem("novaPalavra", listaPalavras);

  sectionInputNovaPalavra.classList.remove("ativo");
  document.getElementById("home-IniciaJogo").style.display = "none";

  bancoDePalavras.innerHTML = getItensToString();
}

const recuperaPalavra = localStorage.getItem("novaPalavra");

function getItensToString() {
  var result = "";

  for (i = 0; i < listaPalavras.length; i++) {
    result = result + listaPalavras[i] + "\r\n";
  }
  return result;
}

console.log(listaPalavras);
