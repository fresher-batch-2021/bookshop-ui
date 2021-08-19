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

        const dbusername = 'apikey-v2-23epskwaoah6sy6rvo29zejnn1k4kl1llrrq1ot36mry';
        const dbpassword = '69c1d2737d371d9f6b7f6009287e6ccc';
        const basicAuth = 'Basic ' + btoa(dbusername + ':' + dbpassword);
        console.log(basicAuth);
        let userObj = {
            "email": email,
            "password" : password
        }
    console.log(userObj);

    // let url ="https://product-mock-api.herokuapp.com/bookshopapp/api/v1/auth/login";
     let formData = { 
         selector:{         
        email: email,          
        password: password
    }
}
    const url = "https://784ea086-d974-431c-aa48-7801aa7b2561-bluemix.cloudantnosqldb.appdomain.cloud/bookshop_user/_find";
    axios.post(url, formData, { headers: { 'Authorization': basicAuth } }).then(res => {
        let data = res.data.docs;
        console.log(data);
        if(data.length ==0){
            alert("invalid login credentials");
        }
        else{
            const user = data[0];
            localStorage.setItem("Logged_in_user", JSON.stringify(user));


        alert("Successffully Login");
        window.location.href = "index.html";
        }
    }).catch(err=>{
        let errorMessage = err.response;
        console.error(errorMessage);
        alert("Error-" + errorMessage);
    });

}
}

