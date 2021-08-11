function login_validation(){
event.preventDefault();

var email = document.getElementById("email").value;
var password = document.getElementById("password").value;

if(email!="ramgv666@gmail.com" ){
    alert("invalid email")
 }
    if(password!=12345678){
        alert("invalid password");
    }
    if(email=="ramgv666@gmail.com" && password=="12345678"){
        alert("login successfull")
    window.location.href = "index.html";
    }
    else{
        alert("login failed");
    }
}

