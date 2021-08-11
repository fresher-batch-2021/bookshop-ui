function Shipment_validation() {
     event.preventDefault() ;
     
     var Firstname = document.getElementById("Firstname").value;
     var Lastname = document.getElementById("Lastname").value;
     var email =  document.getElementById("email").value;
     var password = document.getElementById("password").value;
     var address = document.getElementById("address").value;
     var city = document.getElementById("city").value;
     var pincode = document.getElementById("pincode").value;
     var phonenumber = document.getElementById("phonenumber").value; 

     if(Firstname==""){
         alert("firstname is required");
         return false;
     }
     if(Lastname==""){
         alert("lastanme is required");
         return false;
     }
     if(email ==""){
         alert("invalid email");
         return false;
     }
     if(password.length<8){
         alert("invalid password");
         return false;
     }
     if(address==""){
         alert("enter address");
         return false;
     }
     if(city==""){
         alert("enter city");
         return false;
     }
     if(pincode.length!=6){
        alert("invalid pincode");
        return false;
     }
     if(phonenumber.length!=10){
         alert("invalid phonenumber");
         return false;
     }
     else{
         alert("payment succesfull");
         window.location.href="Payment.html";
     }
    } 


    function payment_validation() {
        event.preventDefault();

        
    }
     
    




