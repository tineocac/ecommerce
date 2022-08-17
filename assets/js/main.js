
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
console.log(shoppingItems);

/*=======OPEN & CLOSE (CART)======= */
cartOpen.addEventListener("click",() =>{
  cartContainer.classList.remove("hide")
  printItems();
})
cartClose.addEventListener("click",()=>{
  cartContainer.classList.add("hide")
})

/*=======PRINT ITEMS IN CART======*/
function printItems() {
  let products = shoppingItems;
  let cartBag = document.getElementById('cart-bag')
  let html = ""
  if(products.length === 0) {
    html = `
    <div class = "shopping-container-img" id="bag-empty">
      <img class = "shopping-empty" src="./assets/images/empty-cart.png">
      <h2 class="shopping-tittle">Your cart is empty</h2>
      <p class="shopping-paragraph">You can add items to your cart by clicking on the "<i class='bx bx-plus'></i>" button on the product page.</p>
    </div>
    `
  } else {
    products.map((product) => {
      html += `
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
      <div class="cart__amount">
                    <div class="cart__amount-content">
                    <span class="cart__amount__box">
                    <i class="bx bx-minus"></i>
                    </span>
                    <span class="cart__amount-number">${product.cantidad} unidades</span>
                    <span class="cart__amount__box">
                    <i class="bx bx-plus"></i>
                    </span>
                    </div>
                    <i class="bx bx-trash-alt cart__amount-trash"></i>
        </div>
        </div>
      `
    })
  }
  cartBag.innerHTML = html;
}

// if(cart.include(items.id === 1)){
//   product.cantidad += 1
// }

/*===COUNTER BAG (VARIABLES GLOBALES)===*/
let counter = document.getElementById("cart-counter")
let cantidadProductos = 0;

  /*=======SHOW & ADD ITEMS IN CART======*/
  function cartFunctionality(product){
    const btnsAdd = document.querySelectorAll(".btn-add")
    // console.log(btnsAdd); // [Todos los botones]
    const shoppingBag = []
    // console.log(shoppingBag);
    
    btnsAdd.forEach (button => {
      button.addEventListener("click", e =>{
        // console.log(e);
        const id = parseInt(e.target.parentElement.parentElement.id)
        // console.log(id);
        const selectProduct = items.find(item => item.id === id)
          // console.log(selectProduct);
        cantidadProductos++
        counter.textContent = cantidadProductos
        shoppingItems.push(selectProduct); 
      })
    })
  }

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



let red = [];
let black = [] ;
let white = [];

function numberProdcuts (array) {
    const object = array.map(object.id === 1)
    red.push(object)
    // console.log(object);
    return object
        

}

console.log(numberProdcuts(shoppingItems)); 

// 0: {id: 2, name: 'Shirts', price: 24, image: './assets/images/featured2.png', category: 'shirts', …}
// 1: {id: 2, name: 'Shirts', price: 24, image: './assets/images/featured2.png', category: 'shirts', …}
// 2: {id: 2, name: 'Shirts', price: 24, image: './assets/images/featured2.png', category: 'shirts', …}



