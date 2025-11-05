import { deletarItem, carrinhoCompras, gerarPedido,valorTotalQuantidade } from "./funcoes.js"
let listaCarrinhoDeCompras = JSON.parse(localStorage.getItem("carrinho"))

let carrinho = document.querySelector('ul')

let pedidos = JSON.parse(localStorage.getItem("pedidos"))
if (pedidos == null ){
    pedidos = []
}

//cartIndicator(listaCarrinhoDeCompras)
carrinhoCompras(listaCarrinhoDeCompras,carrinho)
deletarItem(listaCarrinhoDeCompras,valorTotalQuantidade,carrinho)
valorTotalQuantidade(listaCarrinhoDeCompras)

let btn_finalizar = document.querySelector("#finalize")
    btn_finalizar.addEventListener("click", () => gerarPedido(listaCarrinhoDeCompras,pedidos))



      

    
    

