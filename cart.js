if(document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded',ready)
}
else{
    ready()
}

function ready() {
var removecart = document.getElementsByClassName('btn-danger')
console.log(removecart)
for(var i=0;i<removecart.length;i++){
    var button = removecart[i]
    button.addEventListener('click',removeCartItem)
        console.log('clicked')
       }
    
    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for(var i = 0;i< quantityInputs.length;i++){
        var input = quantityInputs[i]
        input.addEventListener('change',quantityChanged)
    }

    var addtoCart = document.getElementsByClassName('shop-item-button')
    for(var i = 0;i< addtoCart.length;i++){
        var button = addtoCart[i]
        button.addEventListener('click',addtoCartClicked)
}
function removeCartItem(event) {
    var buttonclicked = event.target
    buttonclicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event){
    var input = event.target
    if(isNaN(input.value) || input.value <=0){
        input.value = 1
    }
    updateCartTotal()
}

   
 function addtoCartClicked(event) {
     var button = event.target
     var shopitem = button.parentElement.parentElement
     var title = shopitem.getElementsByClassName('shop-item-title')[0].innerText
     var price = shopitem.getElementsByClassName('shop-item-price')[0].innerText
     var imgsrc = shopitem.getElementsByClassName('shop-item-image')[0].src
     console.log(title,price,imgsrc)
 }

function updateCartTotal() {
    var cartItemPrice = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemPrice.getElementsByClassName('cart-row')
    var total = 0
    for (var i =0;i < cartRows.length;i++){
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        console.log(priceElement,quantityElement)

        var price = parseFloat(priceElement.innerText.replace('₹',''))
        var quantity = quantityElement.value
        total = total + (price*quantity)
        console.log(total)
    }


    document.getElementsByClassName('cart-total-price')[0].innerText= '₹' + total
}
}