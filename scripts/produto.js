import { catalogoProdutos } from "./data.js";
import { findItem, carregaProduto, addCarrinho } from "./funcoes.js";
let listaCompras = JSON.parse(localStorage.getItem("carrinho"))

if (listaCompras == null){
    listaCompras = []
}

let Id = localStorage.getItem("IdProd")
let item = findItem(catalogoProdutos,Id)
carregaProduto(item)
addCarrinho(listaCompras,item,Id)
//cartIndicator(listaCompras)

//handleClick3() // adiciona o click nos cards de produto
