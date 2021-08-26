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
     const dbusername = 'apikey-v2-23epskwaoah6sy6rvo29zejnn1k4kl1llrrq1ot36mry';
     const dbpassword = '69c1d2737d371d9f6b7f6009287e6ccc';
     const basicAuth = 'Basic ' + btoa(dbusername + ':' + dbpassword);
     console.log(basicAuth);
     let userobj = {
         "firstname": Firstname,
         "lastname" : Lastname,
         "email": email,
         "password" : password,
         "address" : address,
         "city" : city,
         "pincode" : pincode,
        "phonenumber": phonenumber
     }
    
     
    localStorage.setItem('address' , JSON.stringify(userobj));
    alert("successfull");
    window.location.href = "bill.html";

     const url = "https://784ea086-d974-431c-aa48-7801aa7b2561-bluemix.cloudantnosqldb.appdomain.cloud/bookshop_user/shippingaddress";
     axios.post(url, formData, { headers: { 'Authorization': basicAuth } }).then(res => {
         let data = res.data;
         alert("Registartion Successful");
         window.location.href = "payment.html";

     }).catch(err => {
         console.error(err.response.data);
         alert("Unable to register");
     });

 }

      



   
    




