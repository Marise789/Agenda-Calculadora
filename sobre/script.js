// Definindo informações dinâmicas (se necessário)
const versaoAppElem = document.querySelector("#versao_app");
const nomeDevElem = document.querySelector("#nome_dev");
const emailDevElem = document.querySelector("#email_dev");
const websiteDevElem = document.querySelector("#website_dev");

// Exemplo de dados, que podem ser alterados ou carregados dinamicamente
const informacoesApp = {
    versao: "1.0.0",
    nomeDesenvolvedor: "Seu Nome",
    emailDesenvolvedor: "seuemail@exemplo.com",
    website: "https://www.seusite.com"
};

// Atualizando o conteúdo da página com as informações
versaoAppElem.textContent = informacoesApp.versao;
nomeDevElem.textContent = informacoesApp.nomeDesenvolvedor;
emailDevElem.textContent = informacoesApp.emailDesenvolvedor;
websiteDevElem.href = informacoesApp.website;
websiteDevElem.textContent = informacoesApp.website;


