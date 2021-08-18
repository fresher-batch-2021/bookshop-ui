
function register() {

    event.preventDefault();
    const name = document.querySelector("#name").value;
    if (name == null || name == "" || name.trim() == "") {
        alert("Invalid name");
        return false;
    }
    const email = document.querySelector("#email").value;
    if (email == null) {
        alert("Invalid email");
        return false;
    }
    const password = document.querySelector("#password").value;
    if (password < 8) {
        alert("invalid password");
        return false;
    }

    const confirmpassword = document.querySelector("#confirmpassword").value;
    if (confirmpassword != password) {
        alert("password dosen't match");
        return false;
    }

    const dob = document.querySelector("#date").value;
    if (dob == null) {
        alert("enter date of birth");
        return false;
    }
    const ContactNumber = document.querySelector("#contactnumber").value;
    if (ContactNumber.length != 10) {
        alert("invalid contactno");
        return false;
    }
    else {

        // let url = "https://product-mock-api.herokuapp.com/bookshopapp/api/v1/auth/register"
        const dbusername = 'apikey-v2-23epskwaoah6sy6rvo29zejnn1k4kl1llrrq1ot36mry';
        const dbpassword = '69c1d2737d371d9f6b7f6009287e6ccc';
        const basicAuth = 'Basic ' + btoa(dbusername + ':' + dbpassword);
        console.log(basicAuth);
        let formData = {
            name: name,
            email: email,
            password: password,
            dob: dob,
            ContactNumber: ContactNumber
        }

        const url = "https://784ea086-d974-431c-aa48-7801aa7b2561-bluemix.cloudantnosqldb.appdomain.cloud/bookshop_user";
        axios.post(url, formData, { headers: { 'Authorization': basicAuth } }).then(res => {
            let data = res.data;
            alert("Registartion Successful");
            window.location.href = "login.html";

        }).catch(err => {
            console.error(err.response.data);
            alert("Unable to register");
        });

    }
}

