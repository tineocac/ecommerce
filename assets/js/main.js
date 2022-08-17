
import { items } from './data/db.js'
import { load, darkMode, scrollButton, scroll, numberToCurrency  } from './othersFiles.js'


document.addEventListener("DOMContentLoaded", () =>{
    load()
    scroll()
    scrollButton()
    darkMode()
    showProducts(items)
    cartFunctionality()
    // addProducts(cart)
    numberToCurrency()
})

/*=============PRODUCTS=========== */
const productContainer = document.getElementById("products-list" )

  /* =====MOSTRAR PRODUCTO HTML===*/
  function showProducts( products ){
    let fragment = ``
    
    products.map( product => {
      fragment += `
          <div class="product-card" >
          <div class="container-card-1" id="${product.id}">
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

/*=========CARRITO ABRIR Y CERRAR========*/
const cartOpen = document.getElementById("cart-shop")
const cartClose = document.getElementById("close-shop")
const cartContainer = document.getElementById("cart--container")

cartOpen.addEventListener("click",() =>{
  cartContainer.classList.remove("hide")
})
cartClose.addEventListener("click",()=>{
  cartContainer.classList.add("hide")
})

/*===COUNTER BAG===*/
let counter = document.getElementById("cart-counter")
let cantidadProductos = 0;
// counter = cantidadProductos 78

function cartFunctionality(){
  const btnsAdd = document.querySelectorAll(".btn-add")
  console.log(btnsAdd);
  const shoppingBag = []
  
  btnsAdd.forEach (button => {
    button.addEventListener("click", e =>{
      console.log(e);
      const id = parseInt(e.target.parentElement.parentElement.id)
      console.log(id);
      const selectProduct = items.find(item => item.id === id)

      cantidadProductos++
      counter.textContent = cantidadProductos
      shoppingBag.push(selectProduct)
    })
  })
}

/*======== MOSTRAR ELEMENTOS EN LA BAG =====*/
// function showProducts (productsArray){
//   let cart = document.getElementById("cart")
//   let fragmentHTML = ``
//   productsArray.forEach(product =>{
//     fragmentHTML += `
//     <div class="product-card" >
//           <div class="container-card-1" id="${product.id}">
//               <img class ="showProduct-img" src=${product.image} alt="">
//               <button class="btn-add"><i class='bx bx-plus'></i></button>
//               </div>
//               <div class="container-card-2">
//               <span class="price-card">${numberToCurrency(product.price)}</span>
//               <small class="stock-card">Stock ${ product.quantity}</small>
//               <span class="name-card">${product.name}</span>
//               </div>
//           </div>
//           <span class="cart--detalles__subtotal">subtotal: $${cartProduct.SubPrice}</span>
//           <div class="cart__amount">
//                       <div class="cart__amount-content">
//                       <span class="cart__amount__box">
//                       <i class="bx bx-minus"></i>
//                       </span>
//                       <span class="cart__amount-number">${cartProduct.cantidad} unidades</span>
//                       <span class="cart__amount__box">
//                       <i class="bx bx-plus"></i>
//                       </span>
//                       </div>
//                       <i class="bx bx-trash-alt cart__amount-trash"></i>
//           </div>`
//   }) 
//   cart.innerHTML = fragmentHTML
// }


/*=======CART EMPTY=======*/
let shoppingItems = document.getElementById("cart-bag")

shoppingItems.innerHTML=`
<div class = "shopping-container-img" id="bag-empty">
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






