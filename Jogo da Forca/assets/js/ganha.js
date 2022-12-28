const botaoNovoJogoVitoria = document.getElementById("close-modal-vitoria");
const modalVitoria = document.getElementById("modalVitoria");
const fadeVitoria = document.getElementById("fadeVitoria");

const disparaVitoria = () => {
  [modalVitoria, fadeVitoria].forEach((el) =>
    el.classList.toggle("hide__vitoria")
  );

  document.onkeydown = (e) => {
    e.preventDefault();
    return;
  };
};

function voltarInicio() {
  window.location.href = "index.html";
}
