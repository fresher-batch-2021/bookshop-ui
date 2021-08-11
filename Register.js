
 function register() {
    
    event.preventDefault();
    const name = document.querySelector("#name").value;
    if(name==null || name =="" || name.trim() ==""){
        alert("Invalid name");
        return false;
    }
    const email = document.querySelector("#email").value;
    if(email==null){
        alert("Invalid email");
        return false;
    }
    const password = document.querySelector("#password").value;
    if(password<8){
          alert("invalid password");
          return false;
    }
    
    const confirmpassword = document.querySelector("#confirmpassword").value;
    if(confirmpassword!==password){
        alert("password dosen't match");
        return false;
    }

    const dob = document.querySelector("#date").value;
    const ContactNumber = document.querySelector("#contactnumber").value;
    if(ContactNumber==""){
        alert("invalid contactno");
        return false;
    }
    else{
        
       let url = "https://product-mock-api.herokuapp.com/bookshopapp/api/v1/auth/register"
    

     let formData = {
             name : name,
             email : email,
             password : password,
             dob : dob,
             ContactNumber : ContactNumber
         }
console.log(formData);
         axios.post(url, formData).then(res=>{            
            let data = res.data;
            console.log(data);
            alert("Successffully Register");
            window.location.href = "login.html"
        }).catch(err=>{
            console.error(err);
            alert("Unable to register");
        });

    }
}


