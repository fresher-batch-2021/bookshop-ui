if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
}
else {
    ready()
}

function ready() {
    var removecart = document.getElementsByClassName('btn-danger')
    console.log(removecart)
    for (var i = 0; i < removecart.length; i++) {
        var button = removecart[i]
        button.addEventListener('click', removeCartItem)
        console.log('clicked')
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addtoCart = document.getElementsByClassName('btn')
    for (var i = 0; i < addtoCart.length; i++) {
        var button = addtoCart[i]
        button.addEventListener('click', addtoCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click',purchaseClicked)

}
    function purchaseClicked(){
        alert('Thank you for your purchase')
        var cartItems = documnet.getElementsByClassName('cart-items')[0]
        while (cartItems.hasChildNodes()) {
            cartItems.removeChild(cartItems.firstChild)
        }
        updateCartTotal()
    }
     
    function removeCartItem(event) {
        var buttonclicked = event.target
        buttonclicked.parentElement.parentElement.remove()
        updateCartTotal()
    }

    function quantityChanged(event) {
        var input = event.target
        if (isNaN(input.value) || input.value <= 0) {
            input.value = 1
        }
        updateCartTotal()
    }


    function addtoCartClicked(event) {
        var button = event.target
        var shopitem = button.parentElement.parentElement
        var title = shopitem.getElementsByClassName('title')[0].innerText
        var price = shopitem.getElementsByClassName('rs')[0].innerText
        var imgsrc = shopitem.getElementsByClassName('image')[0].src
        console.log(title, price, imgsrc)
        addItemToCart(title, price, imgsrc)
        updateCartTotal()
    }

    function addItemToCart(title, price, imgsrc) {
        var cartRow = document.createElement('div')
        cartRow.classList.add('cart-row')
        var cartItems = document.getElementsByClassName('cart-items')[0]
        var cartitemNames = cartItems.getElementsByClassName('cart-item-title')
        for (var i =0 ;i<cartitemNames.length;i++){
            if(cartitemNames[i].innerText==title) {
            //    alert('This item is already added to the cart')  
               //  return
            }
        }
    

        var cartRowContents = `
             <div class="cart-item cart-column">
                <img class="cart-item-image" src="${imgsrc}" width="100" height="100">
                 <span class="cart-item-title">${title}</span>
              </div>
             <span class="cart-price cart-column">${price}</span>
                  <div class="cart-quantity cart-column">
              <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
          </div>  `
          cartRow.innerHTML = cartRowContents
          cartItems.append(cartRow)
          cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click',removeCartItem)
          cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change',quantityChanged)
    }

    function updateCartTotal() {
        var cartItemPrice = document.getElementsByClassName('cart-items')[0]
        var cartRows = cartItemPrice.getElementsByClassName('cart-row')
        var total = 0
        for (var i = 0; i < cartRows.length; i++) {
            var cartRow = cartRows[i]
            var priceElement = cartRow.getElementsByClassName('cart-price')[0]
            var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
            console.log(priceElement, quantityElement)

            var price = parseFloat(priceElement.innerText.replace('₹', ''))
            var quantity = quantityElement.value
            total = total + (price * quantity)
            console.log(total)
        }


        document.getElementsByClassName('cart-total-price')[0].innerText = '₹' + total
    }

