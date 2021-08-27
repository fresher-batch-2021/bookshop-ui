function payment_validation() {
    event.preventDefault();

    var cardname = document.querySelector("#cardname").value;
    var cardnumber = document.querySelector("#cardnumber").value;
    var cvv = document.querySelector("#CVV").value;
    var validfrom = document.querySelector("#validfrom").value;
    var validupto = document.querySelector("#checkbox").value;
   // var cashondelivery = document.querySelector("#cashondelivery").value;


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
        alert("payment successfull");
        window.location.href = "index.html";
    }
}

localStorage.setItem('address' , JSON.stringify(userobj));
alert("successfull");
window.location.href = "bill.html";
