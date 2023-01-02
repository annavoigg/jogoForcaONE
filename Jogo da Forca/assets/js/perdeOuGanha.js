const botaoNovoJogo = document.querySelector(".modal__voltaInicio");

const modalDerrota = document.getElementById("modalDerrota");
const fadeDerrota = document.getElementById("fadeDerrota");

const modalVitoria = document.getElementById("modalVitoria");
const fadeVitoria = document.getElementById("fadeVitoria");

const disparaDerrota = () => {
  [modalDerrota, fadeDerrota].forEach((el) =>
    el.classList.toggle("hide__derrota")
  );

  document.onkeydown = (e) => {
    e.preventDefault();
    return;
  };
};

function voltarInicio() {
  window.location.href = "index.html";
}

function disparaVitoria() {
  const resultado = palavraSecreta.map((letra) => {
    return letrasCorretas.includes(letra);
  });

  if (!resultado.includes(false)) {
    [modalVitoria, fadeVitoria].forEach((el) =>
      el.classList.remove("hide__vitoria")
    );

  }
}