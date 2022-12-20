function desenhaTracinhos(){
    tabuleiro.lineWidth = 5;
    tabuleiro.lineCap = "round";
    tabuleiro.lineJoin = "round";
    tabuleiro.fillStyle = "white";
    tabuleiro.strokeStyle = "#0A3871";

    let largura = 600/palavraSecreta.length;

    for(let i = 0; i < palavraSecreta.length; i++){
        tabuleiro.moveTo(300 + (largura * i), 350);
        tabuleiro.lineTo(350 + (largura * i), 350);
    }

    console.log(palavraSecreta)
    
    tabuleiro.stroke();
    tabuleiro.closePath();
}