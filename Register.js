function register() {

    event.preventDefault();
    const name = document.querySelector("#name").value;
    if (name == null || name == "" || name.trim() == "") {
        alert("Invalid name");
        return false;
    }
    const email = document.querySelector("#email").value;
    if (email == null) {
        alert("Invalid email");
        return false;
    }
    const password = document.querySelector("#password").value;
    if (password < 8) {
        alert("invalid password");
        return false;
    }

    const confirmpassword = document.querySelector("#confirmpassword").value;
    if (confirmpassword != password) {
        alert("password dosen't match");
        return false;
    }

    const dob = document.querySelector("#date").value;
    if (dob == null) {
        alert("enter date of birth");
        return false;
    }
    const ContactNumber = document.querySelector("#contactnumber").value;
    if (ContactNumber.length != 10) {
        alert("invalid contactno");
        return false;
    }
    else {

        // let url = "https://product-mock-api.herokuapp.com/bookshopapp/api/v1/auth/register"
        const dbusername = 'apikey-v2-23epskwaoah6sy6rvo29zejnn1k4kl1llrrq1ot36mry';
        const dbpassword = '69c1d2737d371d9f6b7f6009287e6ccc';
        const basicAuth = 'Basic ' + btoa(dbusername + ':' + dbpassword);
        console.log(basicAuth);
        let formData = {
            name: name,
            email: email,
            password: password,
            dob: dob,
            ContactNumber: ContactNumber
        }

        const url = "https://784ea086-d974-431c-aa48-7801aa7b2561-bluemix.cloudantnosqldb.appdomain.cloud/bookshop_user";
        axios.post(url, formData, { headers: { 'Authorization': basicAuth } }).then(res => {
            let data = res.data;
            alert("Registartion Successful");
            window.location.href = "login.html";

        }).catch(err => {
            console.error(err.response.data);
            alert("Unable to register");
        });

    }
}            


/*let products=[];
function product() {
    //sending data to server
        crud.getData("giftshop_products").then(res =>{
            let data=res.data.rows;
             products=data.map(obj=>obj.doc);
            console.log(products);
            displayProduct();
    
    }).catch(err=>{
        console.log(err.response.data);
    });
    
}


 * 
 * @param {*} e event
 * function is used call a function on presing enter 
 
function enter(e){
    if(e.keyCode===13){
  search()
  }
}


function search(){
  let searchValue=document.getElementById('searchBox').value
    // alert(searchValue)
    if(searchValue==''){
        product()
        return
    }
    products=products.filter(obj=>obj.name.toLowerCase()==searchValue.toLowerCase())
    console.table(products)
    displayProduct();
}



function displayProduct(){
    let count=0;
    let content = "";
    for (let productItem of products) {
        
        content = content + `
        <div class="product" id="${productItem._id}">
            <a href="productSpec.html?id=${productItem._id}">
            <figure>
            <img class="productImg" src="Assets/Images/${productItem.imageUrl}"  id="productImg" alt=""> 
            <figcaption>${productItem.name}</figcaption>
            </figure>
            </a>
            <p class="productPrice" id="productPrice" >₹${productItem.price}</p>
                <button class="addCartBtn" type="submit"onclick="toCart('${productItem._id}','${productItem.name}','${productItem.imageUrl}','${productItem.price}','${productItem.description}')">Add to cart</button>
        </div>`;
        //for printing only 4 elements in a row
        count = count + 1;
        if (count == 4) {
        content = content + `<br>`;
        count = 0;
        }
    }
    document.querySelector("#productContainer").innerHTML = content;
}
//----------------------------------------for storing data in local machine-------------------------------
product();   */
