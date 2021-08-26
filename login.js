function login_validation() {
    event.preventDefault();

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email == "") {
        alert("invalid email");
        return false;
    }
    if (password == "") {
        alert("invalid password");
        return false;
    }
    else {
        UserService.loginService(email, password).then(res => {
            let data = res.data.docs;
            console.log(data);
            if (data.length == 0) {
                alert("invalid login credentials");
            }
            else {
                const user = data[0];
                localStorage.setItem("Logged_in_user", JSON.stringify(user));
                alert("Successffully Login");
                window.location.href = "index.html";
            }
        }).catch(err => {
            let errorMessage = err.response;
            console.error(errorMessage);
            alert("Error-" + errorMessage);
        });
    }
}

