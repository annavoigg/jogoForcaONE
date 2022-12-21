const addPalavraBotao = document.querySelector('[data-inicio-addPalavra]');

let novaPalavra = document.querySelector('[data-input-novaPalavra]');


function adicionaPalavra(){


    listaPalavras.push(novaPalavra.value);

   localStorage.setItem("novaPalavra", listaPalavras);


    
}

const recuperaPalavra = localStorage.getItem("novaPalavra");
    
console.log(listaPalavras)