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
     else if(Lastname==""){
         alert("lastanme is required");
         return false;
     }
     else if(email ==""){
         alert("invalid email");
         return false;
     }
     else if(password.length<8){
         alert("password should be atleast 8 characters");
         return false;
     }
     else if(address==""){
         alert("enter address");
         return false;
     }
     else if(city==""){
         alert("enter city");
         return false;
     }
     else if(pincode.length!=6){
        alert("invalid pincode");
        return false;
     }
     else if(phonenumber.length!=10){
         alert("invalid phonenumber");
         return false;
     }
     else{
         alert("nextpage");
         window.location.href="Payment.html";
     }
    } 


   
    




