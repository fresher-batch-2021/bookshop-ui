function Shipment_validation() {

    console.log("okay");
    
     event.preventDefault() ;
     
     var Firstname = document.getElementById("Firstname").value;
     var Lastname = document.getElementById("Lastname").value;
     var email =  document.getElementById("email").value;
     var password = document.getElementById("password").value;
     var address = document.getElementById("address").value;
     var city = document.getElementById("city").value;
     var pincode = document.getElementById("pincode").value;
     var phonenumber = document.getElementById("phonenumber").value; 

     

     if(Firstname == ""){
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
     else if(password.length>8){
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
    
    let url = "https://784ea086-d974-431c-aa48-7801aa7b2561-bluemix.cloudant.com/shippingaddress/";

     const dbusername = "apikey-v2-23epskwaoah6sy6rvo29zejnn1k4kl1llrrq1ot36mry";
     const dbpassword = "69c1d2737d371d9f6b7f6009287e6ccc";
     const basicAuth = 'Basic ' + btoa(dbusername + ":" + dbpassword);
     console.log(basicAuth);

     let formData = {
         firstnames: Firstname,
         lastnames : Lastname,
         emails: email,
         passwords : password,
         addresss : address,
         citys : city,
         pincodes : pincode,
        phonenumbers: phonenumber
     };
    
     console.log(formData);

     axios.post(url, formData, { headers: { 'Authorization': basicAuth } }).then(res => {
         let data = res.data;  
         alert("Registartion Successful");
         window.location.href = "payment.html";

        }).catch(err => {
            console.error(err.response.data);
            alert("Unable to register");
        });

         }

}