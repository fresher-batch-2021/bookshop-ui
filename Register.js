function register(){
    event.preventDefault();

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const password = document.querySelector("confirmpassword").value;
    const dob = document.querySelector("#date").value;

    let userObj = { 
                
        "firstName":name,
        "email": email,
        "password": password,
        "confirmpassword" : confirmpassword,
        "dateOfBirth": date
    };
    console.log(userObj);
     
    alert("Registration Successful");
    window.location.href="login.html";
}
