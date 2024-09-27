const dados = document.querySelector("#dados");
const fundopopup = document.querySelector("#fundopopup");
const btn_gravar = document.querySelector("#btn_gravar");
const btn_cancelar = document.querySelector("#btn_cancelar");
const f_id = document.querySelector("#f_id");
const f_nome = document.querySelector("#f_nome");
const f_email = document.querySelector("#f_email");
const f_telefone = document.querySelector("#f_telefone");
const f_cidade = document.querySelector("#f_cidade");
const f_valordaconta = document.querySelector("#f_valordaconta");
const f_local = document.querySelector("#f_local");

btn_gravar.addEventListener("click", (evt) => {
    fundopopup.classList.add("ocultar");
    const endpoint = `http://127.0.0.1:1880/atualizarcliente/${f_id.value}/${f_nome.value}/${f_email.value}/${f_telefone.value}/${f_cidade.value}/${f_valordaconta.value}/${f_local.value}`;
    fetch(endpoint)
        .then(res => {
            if (res.status == 200) {
                alert("Dados atualizados");
                preencherdgv("http://127.0.0.1:1880/todosclientes");
            } else {
                alert("Erro ao atualizar dados");
            }
        })
});

btn_cancelar.addEventListener("click", (evt) => {
    fundopopup.classList.add("ocultar");
});

const preencherdgv = (endpoint) => {
    dados.innerHTML = "";
    fetch(endpoint)
        .then(res => res.json())
        .then(res => {
            dados.innerHTML = "";
            res.forEach((el) => {
                const linha = document.createElement("div");
                linha.setAttribute("class", "linhadados");

                const c1 = document.createElement("div");
                c1.setAttribute("class", "coluna c1");
                c1.innerHTML = el.n_cliente_cliente;
                linha.appendChild(c1);

                const c2 = document.createElement("div");
                c2.setAttribute("class", "coluna c2");
                c2.innerHTML = el.s_nome_cliente;
                linha.appendChild(c2);

                const c3 = document.createElement("div");
                c3.setAttribute("class", "coluna c3");
                c3.innerHTML = el.s_email_cliente;
                linha.appendChild(c3);

                const c4 = document.createElement("div");
                c4.setAttribute("class", "coluna c4");
                c4.innerHTML = el.n_telefone_cliente;
                linha.appendChild(c4);

                const c5 = document.createElement("div");
                c5.setAttribute("class", "coluna c5");
                c5.innerHTML = el.s_cidade_cliente;
                linha.appendChild(c5);

                const c6 = document.createElement("div");
                c6.setAttribute("class", "coluna c6");
                c6.innerHTML = el.n_valor_cliente;
                linha.appendChild(c6);

                const c7 = document.createElement("div");
                c7.setAttribute("class", "coluna c7");
                c7.innerHTML = el.s_location_cliente;
                linha.appendChild(c7);



                const c8 = document.createElement("div");
                c8.setAttribute("class", "coluna c8");
                const imgeditar = document.createElement("img");
                imgeditar.setAttribute("src", "../img/edit.svg");
                imgeditar.setAttribute("class", "iconeop");
                imgeditar.addEventListener("click", (evt) => {
                    fundopopup.classList.remove("ocultar");
                    const dados = [...evt.target.parentNode.parentNode.childNodes];
                    f_id.value = dados[0].innerHTML;
                    f_nome.value = dados[1].innerHTML;
                    f_email.value = dados[2].innerHTML;
                    f_telefone.value = dados[3].innerHTML;
                    f_cidade.value = dados[4].innerHTML;
                    f_valordaconta.value = dados[5].innerHTML;
                    f_local.value = dados[6].innerHTML;
                });

                const imgdelete = document.createElement("img");
                imgdelete.setAttribute("src", "../img/delete.svg");
                imgdelete.setAttribute("class", "iconeop");
                imgdelete.addEventListener("click", (evt) => {
                    removerCliente(evt.target.parentNode.parentNode.firstChild.innerHTML);
                });
                c8.appendChild(imgeditar);
                c8.appendChild(imgdelete);

                linha.appendChild(c8);

                dados.appendChild(linha);
            })
        });
};
const removerCliente = (id) => {
    const confirmacao = confirm("Tem certeza que deseja deletar esse cliente?");
    if (confirmacao) {
        const endpoint = `http://127.0.0.1:1880/deletarcliente/${id}`;
        fetch(endpoint)
            .then(res => {
                if (res.status == 200) {
                    alert("Cliente deletado com sucesso.");
                } else {
                    alert("Erro ao deletar cliente.");
                }
            });
    } else {
        alert("Ação cancelada.");
    }
};
preencherdgv("http://127.0.0.1:1880/pesquisarclientes");




















