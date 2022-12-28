const addPalavraBotao = document.querySelector("[data-inicio-addPalavra]");

let novaPalavra = document.querySelector("[data-input-novaPalavra]");

let sectionInputNovaPalavra = document.getElementById(
  "sectionInputNovaPalavra"
);

let recuperaPalavra = localStorage.getItem("listaPalavras");

// Primeiro Botão - muda a página

function adicionaPalavra() {
  sectionInputNovaPalavra.classList.remove("ativo");
  document.getElementById("home-IniciaJogo").style.display = "none";

  bancoDePalavras.innerHTML = recuperaPalavra.replaceAll(",", "\n");
}
