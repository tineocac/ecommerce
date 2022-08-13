
document.addEventListener("DOMContentLoaded", () =>{
    load()
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

cartOpen.addEventListener("click",() =>{
    cartContainer.classList.remove("hide")
})
cartClose.addEventListener("click",()=>{
    cartContainer.classList.add("hide")
})

/*=========GRID ABRIR Y CERRAR========*/
const gridOpen = document.getElementById("nav-toggle")
const gridClose = document.getElementById("close-grid")
const gridContainer = document.getElementById("nav--list")

gridOpen.addEventListener("click",() =>{
    gridContainer.classList.remove("hide")
})
gridClose.addEventListener("click",()=>{
    gridContainer.classList.add("hide")
})

/*=========SCROLL========*/
const header=document.getElementById("header")
window.addEventListener("scroll",() =>{
    if(window.screenY >= 50){
header.classList.add("scroll-header")}
else{ header-classList.remove("scroll-header")}
})
