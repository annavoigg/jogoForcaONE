function escreverLetraCorreta(index) {
  tabuleiro.font = "bold 52px Poppins";
  tabuleiro.lineCap = "round";
  tabuleiro.fillStyle = "white";
  tabuleiro.lineWidth = 4;

  let largura = 600 / palavraSecreta.length;

  tabuleiro.fillText(palavraSecreta[index], 310 + largura * index, 340);

}


function escreverLetraIncorreta(letraDigitada, erros) {
  tabuleiro.font = "bold 40px Poppins";
  tabuleiro.lineCap = "round";
  tabuleiro.fillStyle = "white";
  tabuleiro.lineWidth = 4;

  tabuleiro.fillText(letraDigitada, 465 + 40 * (10 - erros), 65, 50);
}
