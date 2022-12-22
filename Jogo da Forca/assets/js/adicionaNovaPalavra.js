const addPalavraBotao = document.querySelector("[data-inicio-addPalavra]");

let novaPalavra = document.querySelector("[data-input-novaPalavra]");

let sectionInputNovaPalavra = document.getElementById("sectionInputNovaPalavra")

function adicionaPalavra() {
  listaPalavras.push(novaPalavra.value);

  localStorage.setItem("novaPalavra", listaPalavras);

  sectionInputNovaPalavra.classList.remove("ativo");
  document.getElementById("home-IniciaJogo").style.display = "none";

}

const recuperaPalavra = localStorage.getItem("novaPalavra");

console.log(listaPalavras);
