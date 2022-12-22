const addPalavraBotao = document.querySelector("[data-inicio-addPalavra]");

let novaPalavra = document.querySelector("[data-input-novaPalavra]");

let sectionInputNovaPalavra = document.getElementById(
  "sectionInputNovaPalavra"
  );
  
const recuperaPalavra = localStorage.getItem("novaPalavra");

function adicionaPalavra() {
  localStorage.setItem("novaPalavra", listaPalavras);

  sectionInputNovaPalavra.classList.remove("ativo");
  document.getElementById("home-IniciaJogo").style.display = "none";

  bancoDePalavras.innerHTML = recuperaPalavra.replaceAll(",", "\n");
}

