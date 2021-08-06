function login_validation(){
event.preventDefault();

var email = document.getElementById("email").value;
var password = document.getElementById("password").value;

if(email=="ramgv666@gmail.com" && password == 12345678){
    alert("sucessfully Login");
    window.location.href = "index.html"
}
else{
    alert("Login failed");
}
}
