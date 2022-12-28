const botaoNovoJogo = document.getElementById("close-modal");
const modal = document.getElementById("modal");
const fade = document.getElementById("fade");

const toggleModal = () => {
    [modal, fade].forEach((el) => el.classList.toggle("hide"));

    document.onkeydown = (e) =>{
        e.preventDefault();
        return
    }
};



function voltarInicio(){
    window.location.href = 'index.html'
}
