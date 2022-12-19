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

