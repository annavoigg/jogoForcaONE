let texto = document.getElementById("addPalavra");
let subTexto = document.getElementById("retornaPalavra");


let palavras = ["PARQUE", "PETECA", "CORDA", "CARIMBO", "FERRO", "CORPE", "PEDRA", "FOGO", "AR", "DESIGN", "ARTE", "JOGOS", "BOLA"];



function verificaString(){

    if (palavras.includes(subTexto.value) == false){
        alert("deu ruim");
    } else{  
        texto.value = subTexto.value;

        alert("deu certo");
    }

    console.log(palavras.includes(subTexto.value));
    console.log(palavras);
}

function olaLindes() {

}
