import { catalogoProdutos } from "./data.js"; // importa o catalogo de produtos
import { carregaProdutos, handleClick, } from "./funcoes.js"; // importa as funcoes que serao executadas na pagina PRODUTOS / CATALOGO

// let listaCompras = JSON.parse(localStorage.getItem("carrinho"))
let containerPd = document.querySelector(".container-pd")
console.log(containerPd)
// Seleção do local onde o codigo HTML sera injetado

//cartIndicator(listaCompras)
carregaProdutos(catalogoProdutos,containerPd); // função recebe uma lista de produtos, que será exibida nas paginas
handleClick() // adiciona o click nos cards de produto