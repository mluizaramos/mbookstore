import { deletarItem, carrinhoCompras, atualizarQuantidade, gerarPedido, valorTotalQuantidade } from "./funcoes.js";

let listaCarrinhoDeCompras = JSON.parse(localStorage.getItem("carrinho"));
let carrinho = document.querySelector('ul');

// renderizar
carrinhoCompras(listaCarrinhoDeCompras, carrinho);

// eventos de + e -
atualizarQuantidade(listaCarrinhoDeCompras, carrinho, valorTotalQuantidade);

// deletar
deletarItem(listaCarrinhoDeCompras, valorTotalQuantidade, carrinho);

// mostrar totais
valorTotalQuantidade(listaCarrinhoDeCompras);

let pedidos = JSON.parse(localStorage.getItem("pedidos"));
if (!pedidos) pedidos = [];

let btn_finalizar = document.querySelector("#finalize");
btn_finalizar.addEventListener("click", () => gerarPedido(listaCarrinhoDeCompras, pedidos));
