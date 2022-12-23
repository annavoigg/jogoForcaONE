function recuperaNovasPalavras() {
  let id = localStorage.getItem('id');

  for (i = 0; i <= id; i++) {
    let palavra = localStorage.getItem(i);
    if (palavra == null) {
      continue;
    }
    listaPalavras.push(palavra);
  }
}

// seletores

let tabuleiro = document.getElementById("forca").getContext("2d");

// Sprid Oparator

let listaPalavras = [
  "PARQUE",
  "PETECA",
  "CORDA",
  "CARIMBO",
  "FERRO",
  "CORPO",
  "PEDRA",
  "FOGO",
  "AR",
  "DESIGN",
  "ARTE",
  "JOGOS",
  "BOLA",
];

recuperaNovasPalavras();

localStorage.setItem("listaPalavras", listaPalavras);

let palavraSecreta = "";
let letras = [];

let erros = 6;

let canvas = document.getElementById("canvas");

function sorteiaPalavras() {
  let palavra = listaPalavras[Math.floor(Math.random() * listaPalavras.length)];

  palavraSecreta = palavra;
  return palavraSecreta;
}

function verificarLetra(key) {
  let estado = false;

  if (
    (key >= 65 && letras.indexOf(key)) ||
    (key <= 90 && letras.indexOf(key))
  ) {
    letras.push(key);
    console.log(key);
    console.log(letras);
    return estado;
  } else {
    estado = true;
    letras.push(key);
    console.log(key);
    console.log(letras, "if true");
    return estado;
  }
}

function adicionarLetraIncorreta() {
  erros -= 1;
}

function iniciarJogo() {

  document.getElementById("home-IniciaJogo").style.display = "none";
  canvas.classList.remove("ativo");



  sorteiaPalavras();
  desenharCanvas();
  desenhaTracinhos();
  // desenhaLetras();

  document.onkeydown = (e) => {
    let letraDigitada = e.key.toUpperCase();

    if (
      verificarLetra(letraDigitada) &&
      palavraSecreta.includes(letraDigitada)
    ) {
      for (let i = 0; i < palavraSecreta.length; i++) {
        if (palavraSecreta[i] === letraDigitada) {
          escreverLetraCorreta(i);
        }
      }
    } else if (!checkChar(e)) {
      e.preventDefault();
      alert("Use apenas letras.");
    } else {
      adicionarLetraIncorreta(letraDigitada);
      escreverLetraIncorreta(letraDigitada, erros);
      desenhaCorpo(erros);
    }

  };
}

// captar a tecla digitada

function checkChar(e) {
  const char = String.fromCharCode(e.keyCode);

  const padrao = "[a-zA-Z]";

  if (char.match(padrao)) {
    console.log(char);
    return true;
  }
}