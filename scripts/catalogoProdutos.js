import { catalogoProdutos } from "./data.js"; // importa o catalogo de produtos
import { carregaProdutos1, handleClick2 } from "./funcoes.js"; // importa as funcoes que serao executadas na pagina PRODUTOS / CATALOGO
let listaCompras = JSON.parse(localStorage.getItem("carrinho"))
let gridProdutos = document.querySelector(".container-pd") // Seleção do local onde o codigo HTML sera injetado
//cartIndicator(listaCompras)
carregaProdutos1(catalogoProdutos,gridProdutos); // função recebe uma lista de produtos, que será exibida nas paginas
handleClick2() // adiciona o click nos cards de produto