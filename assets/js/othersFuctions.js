/* =========LOADER==========*/
const loader = document.getElementById("loader")
export function load (){
    setTimeout( () =>{
        loader.classList.add("hide")
    }, 3000)
}

/* ======DARK MODE===*/
export function darkMode () {
const themeButton = document.getElementById("theme-button")

themeButton.addEventListener("click", () =>{
    document.body.classList.toggle("dark-theme")
    if(themeButton.classList.contains("bx-moon")){
        themeButton.classList.replace("bx-moon","bx-sun" )}
    else{
        themeButton.classList.replace("bx-sun","bx-moon" )
    }
})
}

/*=========SCROLL========*/
export function scroll () {
const header=document.getElementById("header")

window.addEventListener("scroll",() =>{
    
    if(window.scrollY >= 50){
    header.classList.add("scroll-header")
    }else{ 
    header.classList.remove("scroll-header")
    }
})
}

/*=======SCROLL BUTTON===========*/
export function scrollButton () {
const discover = document.getElementById("discover")
discover.addEventListener("click",() =>
{window.scrollTo({
    top: 0,
    behavior: 'smooth'
});})
}

/*=======NUMBER TO CURRENCY======*/ 
export function numberToCurrency (value) {
    return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
    }).format(value)
}

