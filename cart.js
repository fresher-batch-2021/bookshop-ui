



function cartList(){
    let content='';
    let cartData =JSON.parse(localStorage.getItem('cartElements'))
    console.log(cartData)
    for(let data of cartData){
        content+=co(data);
    }
    document.querySelector('.cart-items').innerHTML=content;
}
cartList();
function co(cartItem){
    const content=`  <div class="cart-row">
      <div class="cart-item cart-column">
          <img class="cart-item-image" src="Images/${cartItem.image}" width="100" height="100" alt="suspects">
          <span class="cart-item-title">${cartItem.name}  </span>
      </div>
      <span class="cart-price cart-column">₹${cartItem.price}</span>
      <div class="cart-quantity cart-column">
          <input class="cart-quantity-input" type="number" value=${cartItem.quantity}>
          <em class="fas fa-trash"></em>
      </div>
  </div>`;
  return content;
  
  }