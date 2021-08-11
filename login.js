function login_validation(){
event.preventDefault();

var email = document.getElementById("email").value;
var password = document.getElementById("password").value;

if(email == "" ){
    alert("invalid email");
    return false;
 }
    if(password ==""){
        alert("invalid password");
        return false;
    }
    else{
        let userObj = {
            "email": email,
            "password" : password
        };
    console.log(userObj);

     let url ="https://product-mock-api.herokuapp.com/bookshopapp/api/v1/auth/login";
     let formData = {          
        email: email,          
        password: password
    }
    

    
    axios.post(url, formData).then(res=>{            
        let data = res.data;
        console.log(data);
        alert("Successffully Login");
        window.location.href = "index.html";
    }).catch(err=>{
        let errorMessage = err.response.data.errorMessage;
        console.error(errorMessage);
        alert("Error-" + errorMessage);
    });

}
}

