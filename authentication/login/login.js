// get input values
const email = document.getElementById("email");
const password = document.getElementById("password");

//email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

//password validation
function isValidPassword(password) {
    const passwprdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwprdRegex.test(password);
}

function authenticateUser() {
    if(isValidEmail && isValidPassword) {
        return true;
    }
    return false;
}

document.getElementById("login").addEventListener("submit", function(e) {
    e.preventDefault(); // prevent from submit

    //get form input
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    
    let isValid = true;

    //error message
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";

    //validate email 
    if(!isValidEmail(email)) {
        document.getElementById("emailError").textContent = "please enter a valid email address";
        isValid = false;
    }

    if(!isValidPassword(password)) {
        document.getElementById("passwordError").textContent = "password must be at least 8 characters include uppercase, lowercase, number, special character";
        isValid = false;
    }

    if(isValid) {
        const isAuthenticate = authenticateUser(email, password);
        if(isAuthenticate) {
            alert("successful login!");
        }
        else {
            alert("incorrect email or password");
        }
    }

});

//input event on keyup




