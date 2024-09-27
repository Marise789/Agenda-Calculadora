const atualizarAbaAtiva = () => {
    const links = document.querySelectorAll("#menu_nav a");
    const urlAtual = window.location.hash;

    links.forEach(link => {
        if (link.getAttribute("href") === urlAtual) {
            link.classList.add("abaSelecionada");
        } else {
            link.classList.remove("abaSelecionada");
        }
    });
};


window.addEventListener("load", atualizarAbaAtiva);

window.addEventListener("hashchange", atualizarAbaAtiva);