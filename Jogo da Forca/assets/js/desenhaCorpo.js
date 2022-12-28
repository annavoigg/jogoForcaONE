function desenhaCorpo(erros) {
  if (erros == 5) {
    // cabeça
    tabuleiro.beginPath();
    tabuleiro.arc(455, 60, 20, 0, 2 * Math.PI);
    tabuleiro.stroke();
    tabuleiro.closePath();
  } else if (erros == 4) {
    // linha do corpo
    tabuleiro.moveTo(455, 170);
    tabuleiro.lineTo(455, 80);
    tabuleiro.stroke();
    tabuleiro.closePath();
  } else if (erros == 3) {
    // // bracinho esquerdo
    tabuleiro.moveTo(455, 80);
    tabuleiro.lineTo(420, 130);
    tabuleiro.stroke();
    tabuleiro.closePath();
  } else if (erros == 2) {
    //bracinho direito
    tabuleiro.moveTo(455, 80);
    tabuleiro.lineTo(485, 130);
    tabuleiro.stroke();
    tabuleiro.closePath();
  } else if (erros == 1) {
    // perninha esquerda
    tabuleiro.moveTo(455, 170);
    tabuleiro.lineTo(425, 220);
    tabuleiro.stroke();
    tabuleiro.closePath();
  } else if (erros == 0) {
    // perninha direita
    tabuleiro.moveTo(455, 170);
    tabuleiro.lineTo(480, 220);
    tabuleiro.stroke();
    tabuleiro.closePath();
  } else {
    toggleModal();
  } 
  
} 