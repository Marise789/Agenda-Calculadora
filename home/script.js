document.addEventListener('DOMContentLoaded', () => {
    fetchCliente();
});

const fetchCliente = async () => {
    try {
        const response = await fetch('http://127.0.0.1:1880/todosclientes');
        if (!response.ok) {
            throw new Error('Erro ao buscar cliente');
        }
        const cliente = await response.json();
        console.log('cliente recebidos:', cliente); // Log para depuração
        exibirCliente(cliente);
    } catch (error) {
        console.error('Erro:', error);
    }
};

const exibirCliente = (cliente) => {
    const tbody = document.querySelector('#tabela-cliente tbody');
    tbody.innerHTML = ''; // Limpa o conteúdo atual
    cliente.forEach(cliente => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${cliente.id || cliente.n_cliente_cliente}</td>
            <td>${cliente.nome || cliente.s_nome_cliente}</td>
            <td>${cliente.email || cliente.s_email_cliente}</td>
            <td>${cliente.telefone || cliente.n_telefone_cliente}</td>
            <td>${cliente.cidade || cliente.s_cidade_cliente}</td>
            <td>${cliente.valordaconta || cliente.n_valor_cliente}</td>
            <td>${cliente.ondeserainstalado || cliente.s_location_cliente}</td>
           
        `;
        tbody.appendChild(tr);
    });
};


