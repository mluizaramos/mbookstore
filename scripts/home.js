import { catalogoProdutos } from "./data.js" // importa o catalogo de produtos
import { carregaProdutos, handleClick} from "./funcoes.js"; // importa as funcoes que serao executadas na pagina home

// icone de quantidade em cima do carrinho
let listaCompras = JSON.parse(localStorage.getItem("carrinho"))

//guardando a informação de produtos 
let produtoVendidos = catalogoProdutos.filter(produto => produto.categoria === "Mais-Vendidos" && produto.mostrarNaHome == true) // lista de produtos filtrada pela categoria Section 2
let produtoLancamentos = catalogoProdutos.filter(produto => produto.categoria === "Lancamentos" && produto.mostrarNaHome == true) // lista de produtos filtrada pela categoria Section 4
let produtoEditoras = catalogoProdutos.filter(produto => produto.categoria === "Editoras" && produto.mostrarNaHome == true) // lista de produtos filtrada pela categoria Section 6

// Seleção do local onde o codigo HTML sera injetado
let container2 = document.querySelector(".hero2-img") 
let container4 = document.querySelector(".hero4-img") 
let container6 = document.querySelector(".hero6-img") 

// função recebe uma lista de produtos e o local onde o HTML será injetado, que será exibida nas paginas
carregaProdutos(produtoVendidos,container2)
carregaProdutos(produtoLancamentos,container4)
carregaProdutos(produtoEditoras,container6)

// adiciona o click nos cards de produto
handleClick()

// let indicador = document (produtoHome,gridProdutos).querySelector(".cart-item-qtd")
// if (listaCompras == null || listaCompras.length == 0){
//     indicador.innerHTML = 0
// } else {
//     indicador.innerHTML = listaCompras.length
//     indicador.classList.add("show")
// }

//função para o slide do banner da pagina home
var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 5000)

function proximaImg(){
    cont++

    if(cont > 3){
        cont = 1 
    }

    document.getElementById('radio'+cont).checked = true
}
