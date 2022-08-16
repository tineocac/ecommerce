
const items = [
    {
      id: 1,
      name: 'Hoodies',
      price: 14.00,
      image: './assets/images/featured1.png',
      category: 'hoodies',
      quantity: 10
    },
    {
      id: 2,
      name: 'Shirts',
      price: 24.00,
      image: './assets/images/featured2.png',
      category: 'shirts',
      quantity: 15
    },
    {
      id: 3,
      name: 'Sweatshirts',
      price: 24.00,
      image: './assets/images/featured3.png',
      category: 'sweatshirts',
      quantity: 20
    }
  ]

document.addEventListener("DOMContentLoaded", () =>{
    load()
    showProducts(items)
})


/* =========LOADER==========*/
const loader = document.getElementById("loader")
function load (){
    setTimeout( () =>{
        loader.classList.add("hide")
    }, 3000)
}

/* ======DARK MODE===*/
const themeButton = document.getElementById("theme-button")

themeButton.addEventListener("click", () =>{
    document.body.classList.toggle("dark-theme")
      if(themeButton.classList.contains("bx-moon")){
        themeButton.classList.replace("bx-moon","bx-sun" )}
    else{
        themeButton.classList.replace("bx-sun","bx-moon" )
    }
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

  
  if(counter === 0){

  shoppingItems.innerHTML=`
   <div class = "shopping-container-img">
       <img class = "shopping-empty" src="./assets/images/empty-cart.png">
       <h2 class="shopping-tittle">Your cart is empty</h2>
       <p class="shopping-paragraph">You can add items to your cart by clicking on the "<i class='bx bx-plus'></i>" button on the product page.</p>
    </div> 
    `
  }
  else{
    shoppingItems =` /*elementos del carrito*/
    ` 
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

/*=========SCROLL========*/
const header=document.getElementById("header")
const nav = document.getElementById("nav")

window.addEventListener("scroll",() =>{
    
    if(window.scrollY >= 50){
      header.classList.add("scroll-header")
    }else{ 
      header.classList.remove("scroll-header")
    }
})

/*=======scroll boton===========*/
const discover = document.getElementById("discover")
discover.addEventListener("click",() =>
{window.scrollTo({
    top: 0,
      behavior: 'smooth'
  });})

/*=============ITEMS=========== */


/* AÑADIR PRODUCTO */
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

function numberToCurrency (value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(value)
}

// let valor = 0

// function aumentarContador(){
//   let contador = document.querySelector(".counter");
//   valor++;
//   contador.textContent = valor;
// }

// const btnAdd = document.querySelector(".btn-add")

let contador = document.get