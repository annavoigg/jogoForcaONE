function desenharCanvas(){
    tabuleiro.lineWidth = 4;
    tabuleiro.lineCap = "round";
    tabuleiro.lineJoin = "round";
    tabuleiro.fillStyle = "transparent";
    tabuleiro.strokeStyle = "white";

    // manipulação 
    tabuleiro.fillRect(0, 0, 1200, 450);
    tabuleiro.beginPath();
    tabuleiro.moveTo(300, 250);
    tabuleiro.lineTo(500, 250);
    tabuleiro.stroke();
    tabuleiro.closePath();

    // resto da forca

    tabuleiro.moveTo(350, 250);
    tabuleiro.lineTo(350, 10);
    tabuleiro.stroke();
    tabuleiro.closePath();

    tabuleiro.moveTo(350, 10);
    tabuleiro.lineTo(455, 10);
    tabuleiro.stroke();
    tabuleiro.closePath();

    tabuleiro.moveTo(455, 40);
    tabuleiro.lineTo(455, 10);
    tabuleiro.stroke();
    tabuleiro.closePath();

}