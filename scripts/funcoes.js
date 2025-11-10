// Esta funcao carrega todos os produtos nas paginas HOME e PRODUTOS.Ela recebe 2 parametros: A lista dos produtos que será renderizada, e o local onde o HTML será injetado
// Ela pega os dados da data.js e carrrega
export function carregaProdutos (lista, gridProduto){
    lista.forEach(item => {
    let html = `<div class="product_info" id=${item.codigoProduto}>
                    <a href="./produto.html">
                        <img class="product_image" src=${item.imagemProduto} id=${item.codigoProduto} >      
                   </a>
                </div>`
    gridProduto.innerHTML += html
        
    });
}

// Esta funcao carrega os produtos na pagina do produto
export function carregaProdutos1 (lista, gridProduto){
    lista.forEach(item => {
    let html = `<div class="product-pd" id="${item.codigoProduto}">
    <a href="./produto.html">
        <img src="${item.imagemProduto}" alt="Produto 1" id="${item.codigoProduto}"> 
   </a>
    <button class="favorite-button"><i class="ri-heart-line"></i></button>
    <p class="titulo-pd">${item.nomeProduto}</p>
    <p class="price">Por: R$${item.preco}</p>
    <a href="produto.html"><button class="buy-button-pd" id="${item.codigoProduto}">Comprar</button></a>
</div>`
    gridProduto.innerHTML += html
        
    });
}


// // Função para adicionar um produto aos favoritos
// function adicionarAosFavoritos(idProduto) {
//     let produto = listaDeProdutos.find(item => item.id === idProduto);

//     if (produto) {
//         produto.favorito = true;
//         console.log(`Produto "${produto.nome}" adicionado aos favoritos.`);
//     } else {
//         console.log(`Produto com ID ${idProduto} não encontrado.`);
//     }
// }
// // Exemplo de uso: adicionar o Produto com ID 2 aos favoritos
// adicionarAosFavoritos(2);


// Esta funcao adiciona o evento click nos cards de produtos. Ela captura o id do elemento e salva no local storage.
export function handleClick(){
    let cardProdtuos = document.querySelectorAll("div.product_info")
        console.log(cardProdtuos) //trocar variavel
        cardProdtuos.forEach(card => card.addEventListener('click', (e) => {
    let idProd = e.target.id   
        localStorage.setItem("IdProd",idProd)
    }))
}

//pagina dos produtos para pagina do produto
export function handleClick2(){
    let cardProdtuos = document.querySelectorAll("div.product-pd")
        console.log(cardProdtuos) 
        cardProdtuos.forEach(card => card.addEventListener('click', (e) => {
        let idProd = e.target.id
        console.log(idProd)
        localStorage.setItem("IdProd",idProd)
    }))   
}

//pagina do produto para pagina de carrinho
export function handleClick3(){
    let cardProdtuos = document.querySelectorAll("#Buy-pd")
        console.log(cardProdtuos) 
        cardProdtuos.forEach(card => card.addEventListener('click', (e) => {
        let idProd = e.target.id
        console.log(idProd)
        localStorage.setItem("IdProd",idProd)
    }))   
}

// Esta funcao localiza um item em uma lista de items: recebe 2 paramentos: A lista de itens, como o catalogo de produtos, e o ID(codigo do produto) que deverá ser encontrado.
export function findItem(items, Id){
    let item = items.find(produto => produto.codigoProduto == Id)
    return item
}

// Esta funcao carrega o produto encontrado pela funcao findItem na pagina do produto. Recebe como parametro o produto que será renderizado na pagina do produto
export function carregaProduto(item){
    let insertProduto = document.querySelector(".img_product_container")
    let html = `<div class="product_info_image">
                    <img src="${item.imagemProduto}">
                </div>
                <div class="product_info">
                    <h2>${item.nomeProduto}</h2>
                    <h5>${item.autor}</h5>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <span>R$ ${item.preco}</span>
                    <input type="number" name="" id="quantidade" value="1">
                    <button id="Buy-pd">Comprar</button>
                    <p>${item.descricaoProduto}</p>
            </div-->  `
                insertProduto.innerHTML = html
}

// Esta função adiciona um item ao carrinho: recebe 2 parametros : o carrinho de compras e o produto que sera adicionado
export function addCarrinho(listaCompras,item, id){
        let botaoComprar = document.querySelector("#Buy-pd")
        botaoComprar.addEventListener("click", ()=> {

            if(listaCompras.find(item => item.codigoProduto == id)){
                Swal.fire({
                    title: 'Item jáadicionado ao carrinho!',
                    icon: 'success',
                    backdrop: true,
                    showConfirmButton: true,
                    confirmButtonText: 'OK',
                    });
                let i = listaCompras.findIndex(item => item.codigoProduto == id)
                listaCompras[i].quantidade += 1
                localStorage.setItem("carrinho",JSON.stringify(listaCompras))
               
            } else{
            let quantidade = parseInt(document.querySelector("#quantidade").value)
            // Nesta linha, capturamos o valor do input quantidade e convertemos para numero, pois recebemos o valor como string
            //item.quantidade = quantidade   opçao 1 - adicionar a propriedade quantidade ao nosso objeto, e depois fazer o push do item na lista de compras
            //listaCompras.push(item)
            listaCompras.push({...item,quantidade}) // opcao 2 - criar um novo objeto com o spread operador, incluindo a propriedade quantidade
            localStorage.setItem("carrinho",JSON.stringify(listaCompras)) // verificar o link https://warcontent.com/localstorage-javascript/#armazenamento-de-objetos-json
            Swal.fire({
                title: 'Item adicionado ao carrinho!',
                icon: 'success',
                backdrop: true,
                showConfirmButton: true,
                confirmButtonText: 'OK',
                });
                  

            }
              
        })
}

export function valorTotalQuantidade (listaCarrinhoDeCompras){
let soma = 0
let quantidade = 0
listaCarrinhoDeCompras.forEach(
  item => {
    soma += ((item.quantidade * item.preco))
    quantidade += item.quantidade
  }  
)
document.querySelector(".qtd_price_area span:nth-child(2)").innerHTML = `R$ ${soma}`
document.querySelector(".qtd_price_area span:first-child").innerHTML = `${quantidade}`
console.log(soma, quantidade)
}

//função para carregar produto no carrinho
export function carrinhoCompras(ListaCarrinhoDeCompras, carrinho) {
    ListaCarrinhoDeCompras.forEach(item => {
        // Calcula o subtotal como um número fixo com precisão de duas casas decimais
        let subtotal = (item.quantidade * item.preco);
        subtotal = parseFloat(subtotal.toFixed(2)); // Converte para número com precisão de duas casas decimais

        let html = `<li class="cart_item">
            <img id="cart_img" src="${item.imagemProduto}">
            <p id="name_product_cart">Livro ${item.nomeProduto}</p>
            <div class="cart_item_container">
                <input type="number" name="" id="" value="${item.quantidade}">
                <span>R$${subtotal}</span>
                <i class="bi-trash3"></i>
            </div>
        </li>`;
        carrinho.innerHTML += html;
    });
}

// funçaõ para deletar item quando clicar na lixeira
export function deletarItem(listaCarrinhoDeCompras,valorTotalQuantidade){
    let botoesExcluir = document.querySelectorAll(".bi-trash3")
        
        botoesExcluir.forEach( botao =>
        botao.addEventListener("click", (event)=> {
       
        let cartList = document.querySelector('ul')
        let item = event.target.parentElement.parentElement
        cartList.removeChild(item)
        let itemId = item.id
        let index = listaCarrinhoDeCompras.findIndex( item => item.codigoProduto == itemId)
        listaCarrinhoDeCompras.splice(index,1)
        localStorage.setItem("carrinho",JSON.stringify(listaCarrinhoDeCompras))
        valorTotalQuantidade(listaCarrinhoDeCompras)
        cartIndicator(listaCarrinhoDeCompras)
        }))
}

//essa função armazena os pedidos gerados na pagina do administrador
export function gerarPedido(listaCarrinhoDeCompras,pedidos){
  
    let id = pedidos.length
     if (pedidos == null || pedidos == 0){id = 1}

    let endereco = {
        nome: document.querySelector("input#nome").value,
        genero: document.querySelector("select#genero").value,
        logradouro: document.querySelector("input#logradouro").value,
        cidade: document.querySelector("input#cidade").value,
        bairro: document.querySelector("input#bairro").value,
        estado: document.querySelector("select#estado").value,
        CEP: document.querySelector("input#CEP").value,
        telefone: document.querySelector("input#telefone").value,
        email: document.querySelector("input#email").value
         }

    let pedido = {
        id: id + 1,
        itens: listaCarrinhoDeCompras,
        endereco: endereco
    }

    pedidos.push(pedido)
    localStorage.setItem("pedidos",JSON.stringify(pedidos))
    localStorage.removeItem('carrinho')
    localStorage.removeItem('IdProd')
    alert("Compra realizada com sucesso!")
    location.reload()

    }