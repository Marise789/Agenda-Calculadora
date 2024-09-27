const cabecalho = document.querySelector("#cabecalho");
const menu = document.querySelector("#menu");
const btn_home = document.querySelector("#btn_home");
const btn_gestao = document.querySelector("#btn_gestao");
const btn_sobre = document.querySelector("#btn_sobre");
const iframe = document.querySelector("#if_principal");

btn_home.addEventListener("click", (evt) => {
    abrirPagina(evt.target, "../home/index.html");
});
btn_gestao.addEventListener("click", (evt) => {
    abrirPagina(evt.target, "../gestao/index.html");
});
btn_sobre.addEventListener("click", (evt) => {
    abrirPagina(evt.target, "../sobre/index.html");
});

const abrirPagina = (el, url) => {
    const abas = [...document.querySelectorAll(".aba")];
    abas.forEach(e => {
        e.classList.remove("abaSelecionada");
    });
    el.classList.add("abaSelecionada");
    iframe.src = url;
};
