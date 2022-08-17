
import { db } from './data/db.js'
import { load, darkMode, scrollButton, scroll, numberToCurrency  } from './othersFiles.js'


document.addEventListener("DOMContentLoaded", () =>{
    load()
    scroll()
    scrollButton()
    darkMode()
    showProducts(db)
    cartFunctionality()
    addProducts(cart)
    numberToCurrency()
})

/*=========CARRITO ABRIR Y CERRAR========*/
const cartOpen = document.getElementById("cart-shop")
const cartClose = document.getElementById("close-shop")
const cartContainer = document.getElementById("cart--container")

let shoppingItems = document.getElementById("cart-bag")
let counter = document.getElementById("cart-counter")

cartOpen.addEventListener("click",() =>{
    cartContainer.classList.remove("hide")
})
cartClose.addEventListener("click",()=>{
    cartContainer.classList.add("hide")
  })

/*=======CART EMPTY=======*/
  shoppingItems.innerHTML=`
  <div class = "shopping-container-img">
      <img class = "shopping-empty" src="./assets/images/empty-cart.png">
      <h2 class="shopping-tittle">Your cart is empty</h2>
      <p class="shopping-paragraph">You can add items to your cart by clicking on the "<i class='bx bx-plus'></i>" button on the product page.</p>
  </div> 
    `
    
/*=========GRID ABRIR Y CERRAR========*/
const gridOpen = document.getElementById("nav-toggle")
const gridClose = document.getElementById("close-grid")
const gridContainer = document.getElementById("grid--container")

gridOpen.addEventListener("click",() =>{
    gridContainer.classList.remove("hide")
})
gridClose.addEventListener("click",()=>{
    gridContainer.classList.add("hide")
})



/*=============DATA BASE=========== */
const productContainer = document.getElementById("products-list" )

  /* =====MOSTRAR PRODUCTO===*/
  function showProducts( products ){
    let fragment = ``

    products.map( product => {
        fragment += `
        <div class="product-card" id="${product.id}">
            <div class="container-card-1">
            <img class ="showProduct-img" src=${product.image} alt="">
            <button class="btn-add"><i class='bx bx-plus'></i></button>
            </div>
            <div class="container-card-2">
            <span class="price-card">${numberToCurrency(product.price)}</span>
            <small class="stock-card">Stock ${ product.quantity}</small>
            <span class="name-card">${product.name}</span>
            </div>
        </div>
        ` 
    } )
    productContainer.innerHTML = fragment
}

/*===AGREGAR AL CARRITO===*/
let cantidadProductos = 0;

function cartFunctionality(){
  const btnsAdd = document.querySelectorAll(".btn-add")
  console.log(btnsAdd);
  const cart = []

  btnsAdd.forEach (button => {
    button.addEventListener("click", e =>{
      const id = parseInt(e.target.parentElement.id)
      const selectProduct = db.find(item => item.id === id)
      cart.push(selectProduct)
      console.log(cart)

      cantidadProductos++
      counter.textContent = cantidadProductos
    })
  })
}

/* ======== SHOPPING BAG PRODUCTS =====*/
function addProducts(cart){
  let fragmentHTML = ``
  cart.forEach(product =>{
    fragmentHTML = `
    <div class="product-card" id="${product.id}">
            <div class="container-card-1">
            <img class ="showProduct-img" src=${product.image} alt="">
            <button class="btn-add"><i class='bx bx-plus'></i></button>
            </div>
            <div class="container-card-2">
            <span class="price-card">${numberToCurrency(product.price)}</span>
            <small class="stock-card">Stock ${ product.quantity}</small>
            <span class="name-card">${product.name}</span>
            </div>
        </div>`
  })
  productContainer.innerHTML = fragmentHTML
}
