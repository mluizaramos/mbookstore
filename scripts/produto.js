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


// agora sim os elementos existem
const qtyInput = document.querySelector(".qty-input");
const btnPlus = document.querySelector(".qty-btn.plus");
const btnMinus = document.querySelector(".qty-btn.minus");

// Impedir digitar 0 ou negativo
qtyInput.addEventListener("input", () => {
    let value = parseInt(qtyInput.value);
    if (isNaN(value) || value < 1) {
        qtyInput.value = 1;
    }
});

// Botão +
btnPlus.addEventListener("click", () => {
    qtyInput.value = parseInt(qtyInput.value) + 1;
});

// Botão -
btnMinus.addEventListener("click", () => {
    if (parseInt(qtyInput.value) > 1) {
        qtyInput.value = parseInt(qtyInput.value) - 1;
    }
});
