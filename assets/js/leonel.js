let cart = []
const cartProductContainer = document.querySelector(".cart--container")
const carInfoVacio = document.querySelector(".cart")
function añadiendoCar() {
    const btnsCar = document.querySelectorAll(".products__button") // node list
    btnsCar.forEach( button => {
    button.addEventListener("click", e =>{
        const itemId = parseInt(e.target.parentElement.id)
        const selectedProducts = items.find( item => item.id === itemId )
            if (cart.includes(selectedProducts) === false) {
                selectedProducts.cantidad = 1
                selectedProducts.SubPrice = selectedProducts.price
                cart.push(selectedProducts)
            }else if(cart.includes(selectedProducts) === true){
                selectedProducts.cantidad += 1
                selectedProducts.SubPrice += selectedProducts.price
            }
// ============================total DE productos =============================== //
const itemCount = document.getElementById("item__cout")
const itemCount2 = document.getElementById("cart-counter")
const totalCantidad = cart.map( Product => Product.cantidad ).reduce((previousValue,currentValue)=> previousValue + currentValue,0)
itemCount.textContent = totalCantidad
itemCount2.textContent = totalCantidad
// ============================total DE productos =============================== //
const precioTotal = document.getElementById("cart__total")
const totalPrecio = cart.map( Product => Product.SubPrice ).reduce((previousValue,currentValue)=> previousValue + currentValue,0)
precioTotal.textContent = totalPrecio
// ===========================================================================//
// ========================= ELIMINANDO TODOS LOS ELEMENTOS ==================//
const btnVaciar = document.getElementById('checkout')
btnVaciar.addEventListener('click', () =>{
  .
})
//================ cart con los productos =============================//
function cartDeProductos(carArray) {
    let fragmentHTML = ``
    carArray.forEach( cartProduct  =>{
        fragmentHTML += `<article class="cart__product">
        <div class="cart--product__img">
        <img class="cart__img" src=" ${cartProduct.image} " alt="${cartProduct.name}">
        </div>
        <div cart__detalles>
        <h3 class="cart--detalles__tittle">${cartProduct.name}</h3>
        <span class="cart--detalles__stock">existencias: ${cartProduct.quantity} | <span class="cart--detalles__precio">$${cartProduct.price}</span>
        </span>
        <span class="cart--detalles__subtotal">subtotal: $${cartProduct.SubPrice}</span>
        <div class="cart__amount">
                    <div class="cart__amount-content">
                    <span class="cart__amount__box">
                    <i class="bx bx-minus"></i>
                    </span>
                    <span class="cart__amount-number">${cartProduct.cantidad} unidades</span>
                    <span class="cart__amount__box">
                    <i class="bx bx-plus"></i>
                    </span>
                    </div>
                    <i class="bx bx-trash-alt cart__amount-trash"></i>
        </div>
        </div>
    </article>`
    })
    cartProductContainer.innerHTML = fragmentHTML
        }
        cartDeProductos(cart)
        }) // fin del addEvent
    })  // fin del forEach
}