function payment_validation() {
    event.preventDefault();

    var cardname = document.querySelector("#cardname").value;
    var cardnumber = document.querySelector("#cardnumber").value;
    var cvv = document.querySelector("#CVV").value;
    var validfrom = document.querySelector("#validfrom").value;
    var validupto = document.querySelector("#validupto").value;
   


    if (cardname == "") {
        alert("Please enter card name");
        return false;
    }
    else if (cardnumber.length != 16) {
        alert("invalid cardnumber(must be 16 digit number");
        return false;
    }
    else if (cvv.length != 3) {
        alert("CVV contain only 3 digits");
        return false;
    }
    else if (validfrom == "" && validupto == "") {
        alert("select valid from and select valid upto");
    }
    else {
            let url = "https://784ea086-d974-431c-aa48-7801aa7b2561-bluemix.cloudant.com/payment/";
        
             const dbusername = "apikey-v2-23epskwaoah6sy6rvo29zejnn1k4kl1llrrq1ot36mry";
             const dbpassword = "69c1d2737d371d9f6b7f6009287e6ccc";
             const basicAuth = 'Basic ' + btoa(dbusername + ":" + dbpassword);
             console.log(basicAuth);
            
             let formData = {
                 name:cardname,
                 number:cardnumber,
                 cvvnum:cvv,
                 from:validfrom,
                 to:validupto
             };

             console.log(formData);
             
             axios.post(url, formData, { headers: { 'Authorization': basicAuth } }).then(res => {
                let data = res.data;  
                alert("payment Successful");
                window.location.href = "index.html";
            }).catch(err => {
                console.error(err.response.data);
                alert("payment failed");
            });
    }
}

/*localStorage.setItem('address' , JSON.stringify(userobj));
alert("successfull");
window.location.href = "bill.html";  */
