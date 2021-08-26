let tableValues = [];
function historyBooks() {
    HistoryService.getAllData().then(res => {
        let data = res.data.rows;
        tableValues = data.map(obj=>obj.doc);
        // let products = data.map(obj => obj.docs)
        console.log(" Table :", tableValues);
        displayBook(tableValues);
    })

function displayBook(tableValues) {
    
    let content = "";
    for (let item of tableValues)
     {
        // let ram = JSON.stringify(book)
        // alert("hi"+ram);
    
            
        content = content + `
     <div class="shop-item">
          <img style="width: 100px;" class="shop-item-image" src="${item.img}" style=>   </a>
          <P class = "shop-item-title">${item.bookName}</P>
          <p>By : ${item.bookAuth}</p>
          <div class="shop-item-details">
              <p class="shop-item-price">₹${item.price}</p>  
              <a href ="cart.html"><button class="button" type = "button" onclick= "addToCartClicked()">ADD TO CART</button>
          </div>
     </div>
          `;}
        document.querySelector("#demo").innerHTML = content;
    

}}
historyBooks();