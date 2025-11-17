let data = JSON.parse(localStorage.getItem("pedidos"));
const resultadoDiv = document.getElementById('resultado');

data.sort((a, b) => b.id - a.id);

data.forEach(pedido => {

    let totalPedido = pedido.itens.reduce((acc, item) => {
        return acc + (item.preco * item.quantidade);
    }, 0);

    resultadoDiv.innerHTML += `
        <div class="pedido-box">
            <p class="title-order">Pedido Nº ${pedido.id}</p>
            <p class="cliente-nome">Cliente: ${pedido.endereco.nome}</p>

            <table class="tabela-pedidos">
                <thead>
                    <tr>
                        <th>Título do Livro</th>
                        <th>Quantidade</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    ${pedido.itens.map(item => `
                        <tr>
                            <td>${item.nomeProduto}</td>
                            <td>${item.quantidade}</td>
                            <td>R$ ${item.preco.toFixed(2)}</td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>

            <p class="total-compra">
                Total do Pedido: <strong>R$ ${totalPedido.toFixed(2)}</strong>
            </p>
        </div>
    `;
});
