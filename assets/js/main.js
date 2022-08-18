
import { items } from './data/db.js'
import { load, darkMode, scrollButton, scroll, numberToCurrency  } from './othersFiles.js'


document.addEventListener("DOMContentLoaded", () =>{
    load()
    scroll()
    scrollButton()
    darkMode()
    numberToCurrency()
    showProducts(items)
    cartFunctionality(items)
    printItems(items)
    // minusButton(items)
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

/*=========CART (VARIABLES GLOBALES)========*/
const cartOpen = document.getElementById("cart-shop")
const cartClose = document.getElementById("close-shop")
const cartContainer = document.getElementById("cart--container")
const cart = document.getElementById("cart")
let shoppingItems = [];
// console.log(shoppingItems);

/*=======OPEN & CLOSE (CART)======= */
cartOpen.addEventListener("click",() =>{
  cartContainer.classList.remove("hide")
  printItems();
})
cartClose.addEventListener("click",()=>{
  cartContainer.classList.add("hide")
})

let checkout = document.querySelector('.checkout-container')  
let cartBag = document.getElementById('cart-bag')
/*=======PRINT ITEMS IN CART======*/
function printItems() {
  let html = ""
  if(shoppingItems.length === 0) {
    html = `
    <div class = "shopping-container-img" id="bag-empty">
      <img class = "shopping-empty" src="./assets/images/empty-cart.png">
      <h2 class="shopping-tittle">Your cart is empty</h2>
      <p class="shopping-paragraph">You can add items to your cart by clicking on the "<i class='bx bx-plus'></i>" button on the product page.</p>
    </div>
    `
    checkout.classList.add("hide")
  } else {             //este product se refiere a los elementos del shoppingItems
    shoppingItems.map((product) => {
      html += `
      <div class="cart-container-card-1" id="${product.id}">
          <img class ="cart-showProduct-img" src=${product.image} alt="">
      </div>
          <div class="cart-container-card-2">
          <span class="cart-name-card">${product.name}</span>
          <small class="cart-stock-card">Stock ${ product.quantity}</small>
          <span class="cart-price-card">${numberToCurrency(product.price)}</span>
          <span class="subtotal">Subtotal: ${numberToCurrency(product.price*product.cantidad) }</span>
          </div>
      </div>
      <div class="cart__amount">
                    <div class="cart__amount-content">
                    <button class="cart__amount__box minus">
                    <i class="bx bx-minus" data-id=${product.id}></i>
                    </button>
                    <span class="cart__amount-number">${product.cantidad} unidades</span>
                    <span class="cart__amount__box plus">
                    <i class="bx bx-plus" data-id=${product.id}></i>
                    </span>
                    <i class="bx bx-trash-alt cart__amount-trash"></i>
                    </div>
        </div>
        </div>
      `
      checkout.classList.remove("hide")
    })
    
  }
  cartBag.innerHTML = html;
}

/*=======CHECKOUT======= */
checkout.addEventListener("click", ()=>{
cartBag.innerHTML =`
<div class = "shopping-container-img" id="bag-empty">
<img class = "shopping-empty" src="./assets/images/empty-cart.png">
<h2 class="shopping-tittle">Your cart is empty</h2>
<p class="shopping-paragraph">You can add items to your cart by clicking on the "<i class='bx bx-plus'></i>" button on the product page.</p>
</div>
`
}) 

/*===COUNTER BAG (VARIABLES GLOBALES)===*/
let counter = document.getElementById("cart-counter")
let cantidadProductos = 0;

  /*=======SHOW & ADD ITEMS IN CART / INCREASE ITEM.CANTIDAD======*/
  function cartFunctionality(product){
    const btnsAdd = document.querySelectorAll(".btn-add")
    // console.log(btnsAdd); // [Todos los botones]
    
    btnsAdd.forEach (button => {
      button.addEventListener("click", e =>{
        // console.log(e);
        const id = parseInt(e.target.parentElement.parentElement.id)
        // console.log(id);
        const selectProduct = items.find(item => item.id === id)
          // console.log(selectProduct);
        cantidadProductos++
        counter.textContent = cantidadProductos
        
        let index = shoppingItems.indexOf(selectProduct)
        if (index !== -1){
          shoppingItems[index].cantidad++
        }else{
          selectProduct.cantidad = 1
          shoppingItems.push(selectProduct); 
        }
      })
    })
  }

      /* ========== STOCK ======*/
// const btnsAdd = document.querySelectorAll(".btn-add")

// btnsAdd.addEventListener("click",e =>{
//   const btnParetnID = parseInt(e.target.parentElement.parentElement.id)
//   // if( btnParetnID === items.id){
//     items[btnParetnID].quantity--
//     console.log(btnParentID);
//   // }else{
//   //   window.alert("No tenemos suficiente stock para tu pedido")
//   // }
//   })


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

/*=======BUTTONS CART=======*/
// const plusItems = document.querySelectorAll(".plus")

// function minusButton (products){
//   const minusItems = document.querySelectorAll(".minus")
//   console.log(minusItems);
// }

// minusItems.forEach(button => {
//   button.addEventListener('click', (shoppingItems) => {
//     let id = parseInt(button.getAttribute('data-id'))
//     let pruebaMinus = shoppingItems[id]
//   })
// })

// plusItems.forEach(button =>console.log(button));
  // button.addEventListener('click', (shoppingItems) => {
  //   let id = parseInt(button.getAttribute('data-id'))
  //   let prueba = shoppingItems[id]
//   })
// })










