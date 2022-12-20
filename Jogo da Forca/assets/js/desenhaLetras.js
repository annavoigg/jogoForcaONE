
// function desenhaLetras(){
//     tabuleiro.lineWidth = 5;
//     tabuleiro.lineCap = "round";
//     tabuleiro.lineJoin = "round";
//     tabuleiro.fillStyle = "white";
//     tabuleiro.strokeStyle = "#0A38711";

//     let largura = 600/palavraSecreta.length;

//     for(let i = 0; i < palavraSecreta.length; i++){
//         tabuleiro.font = "40px Poppins"/         tabuleiro.fillText(palavraSecreta[i], 310 + (largura * i), 340);
//     }
    
//     tabuleiro.stroke();
//     tabuleiro.closePath();
//     console.log(palavraSecreta.charAt[2]);
// }

function escreverLetraCorreta(index){
    tabuleiro.font = "bold 52px Poppins"
    tabuleiro.lineCap = "round"
    tabuleiro.fillStyle = "white"
    tabuleiro.lineWidth = 4;
    
    let largura = 600/palavraSecreta.length;

    tabuleiro.fillText(palavraSecreta[index], 310 + (largura * index), 340)
}

function escreverLetraIncorreta(letraDigitada, erros){
    tabuleiro.font = "bold 40px Poppins";
    tabuleiro.lineCap = "round";
    tabuleiro.fillStyle = "white";
    tabuleiro.lineWidth = 4;

    tabuleiro.fillText(letraDigitada, 465 + (40 * (10 - erros)), 65, 50);

    
}

