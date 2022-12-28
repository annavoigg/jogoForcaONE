const botaoNovoJogo = document.querySelector(".modal__voltaInicio")

const modalDerrota = document.getElementById("modalDerrota");
const fadeDerrota = document.getElementById("fadeDerrota");

const modalVitoria = document.getElementById("modalVitoria");
const fadeVitoria = document.getElementById("fadeVitoria");

const disparaDerrota = () => {
    [modalDerrota, fadeDerrota].forEach((el) => el.classList.toggle("hide__derrota"));

    document.onkeydown = (e) =>{
        e.preventDefault();
        return
    }
};

function voltarInicio(){
    window.location.href = 'index.html'
}

function disparaVitoria() {

    if (letrasCorretas.length == palavraSecreta.length) {
        [modalVitoria, fadeVitoria].forEach((el) => el.classList.toggle("hide__vitoria"));

        document.onkeydown = (e) =>{
            e.preventDefault();
            return
        }
    }
  }