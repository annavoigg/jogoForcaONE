// seletores

let tabuleiro = document.getElementById("forca").getContext("2d");

let palavras = [
  "PARQUE",
  "PETECA",
  "CORDA",
  "CARIMBO",
  "FERRO",
  "CORPE",
  "PEDRA",
  "FOGO",
  "AR",
  "DESIGN",
  "ARTE",
  "JOGOS",
  "BOLA",
];

let palavraSecreta = "";
let letras = [];

let erros = 6;

let canvas = document.getElementById("canvas");

function sorteiaPalavras() {
  let palavra = palavras[Math.floor(Math.random() * palavras.length)];

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
  document.getElementById("temporario").style.display = "none";
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

// escrever letra digitada

//  if (textoComum.value.trim() == " " || textoComum.value.trim() == ""){
//      alert("É necessário digitar uma mensagem.")
//      garnet.classList.add("ativo")
//   } else{
//      garnet.classList.remove("ativo")
//      caixaTexto.classList.remove("ativo")
//  };

// function checkChar(e) {
//     const char = String.fromCharCode(e.keyCode);

//     const padrao = '[A-Z0-9 ]';

//     if (char.match(padrao)) {
//         return true;
//     }
// }
