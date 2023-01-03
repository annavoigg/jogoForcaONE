const botaoNovoJogo = document.querySelector(".modal__voltaInicio")

const modalDerrota = document.getElementById("modalDerrota");
const fadeDerrota = document.getElementById("fadeDerrota");

const modalVitoria = document.getElementById("modalVitoria");
const fadeVitoria = document.getElementById("fadeVitoria");

const disparaDerrota = () => {
    [modalDerrota, fadeDerrota].forEach((el) => el.classList.toggle("hide__derrota"));

    document.onkeydown = (e) => {
        e.preventDefault();
        return
    }
};

function voltarInicio() {
    window.location.href = 'index.html'
}

function disparaVitoria() {

    const resultado =
        palavraSecreta.map(letra => {
            return letrasCorretas.includes(letra);
        })

    // console.log(resultado);

    if (!(resultado.includes(false))) {
        [modalVitoria, fadeVitoria].forEach((el) => el.classList.toggle("hide__vitoria"));
    }

    // if (resultado.includes(false)) {
    //     console.log("Ainda não ganhou!");
    // } else {
    //     [modalVitoria, fadeVitoria].forEach((el) => el.classList.toggle("hide__vitoria"));
    // }

    //     for (let i = 0; i < palavraSecreta.length; i++) {
    //     if (letrasCorretas[i] == palavraSecreta[i]) {
    //         [modalVitoria, fadeVitoria].forEach((el) => el.classList.toggle("hide__vitoria"));

    //         document.onkeydown = (e) =>{
    //             e.preventDefault();
    //             return;
    //         }
    //     }
    // }

}