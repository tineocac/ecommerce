const loader = document.getElementById("loader")

document.addEventListener("DOMContentLoaded", () =>{
    load()
})

function load (){
    setTimeout( () =>{
        loader.classList.add("hide")
    }, 3000)
}